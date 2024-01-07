import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import axios, { AxiosError } from "axios";
import { useShipmentStore } from "@/store/shipment-store";
import { ShipmentStatues, ShipmentType } from "@/shared/types/shipment.types";

import { GlobalLoadingSpinner } from "@/shared/GlobalLoadingSpinner";
import { ShipmentDetails } from "./ShipmentDetails";
import { TrackingNumberInput } from "@/shared/TrackingNumberInput";
import { ShipmentStatuesComponent } from "./ShipmentStatues";
import { ShipmentLogs } from "./ShipmentLogs";
import { CustomerAddress } from "./CustomerAddress";
import { Contact } from "./Contact";

export const TrackingShipment = () => {
  const { t } = useTranslation();

  const shipmentNumber = useShipmentStore((state) => state.ShipmentNumber);
  const { data, isLoading, error } = useQuery({
    queryKey: ["shipment", shipmentNumber],
    queryFn: () =>
      axios.get<ShipmentType>(`/shipments/track/${shipmentNumber}`),
    enabled: !!shipmentNumber,
  });

  if (!shipmentNumber) {
    return (
      <div className="container mt-10 max-w-md">
        <TrackingNumberInput />
      </div>
    );
  }
  if (isLoading) {
    return <GlobalLoadingSpinner />;
  }
  if ((error as AxiosError)?.response?.status === 404) {
    return (
      <div className="container mt-10 max-w-md text-xl">
        <TrackingNumberInput />
        <span className="mt-10 block">
          {t("shipment.order-not-found")}: {shipmentNumber}
        </span>
      </div>
    );
  }
  const shipment = data?.data;

  return (
    <main className="container my-14">
      <div className="flex flex-col justify-between rounded-md border pt-5">
        <ShipmentDetails
          shipmentNumber={shipment?.TrackingNumber}
          currentStatus={
            ShipmentStatues[shipment?.CurrentStatus?.state || "UNKNOWN"]
          }
          lastUpdate={shipment?.CurrentStatus.timestamp}
          provider={shipment?.provider}
          promisedDeliveryDate={shipment?.PromisedDate}
        />
        <span className="my-5 block h-px w-full bg-gray-200" />
        <ShipmentStatuesComponent
          statues={ShipmentStatues[shipment?.CurrentStatus?.state || "UNKNOWN"]}
        />
      </div>
      <div className="mt-12 flex flex-col-reverse gap-10 md:flex-row">
        <ShipmentLogs logs={shipment?.TransitEvents || []} />
        <div className="flex flex-col gap-5">
          <CustomerAddress
            address={
              "15 test street next to test square and test and one more test"
            }
          />
          <Contact />
        </div>
      </div>
    </main>
  );
};
