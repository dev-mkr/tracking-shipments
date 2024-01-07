import { ShipmentStatues } from "@/shared/types/shipment.types";
import { cn } from "@/shared/utils/cn";
import { useTranslation } from "react-i18next";

interface Props {
  shipmentNumber: string;
  currentStatus: string;
  lastUpdate: string;
  provider: string;
  promisedDeliveryDate: string;
}

export const ShipmentDetails = ({
  shipmentNumber,
  currentStatus,
  lastUpdate,
  provider,
  promisedDeliveryDate,
}: Partial<Props>) => {
  const { t, i18n } = useTranslation();

  const renderLastUpdate = (time?: string, lang?: string) => {
    if (!time) return "";
    const date = new Date(time);

    return `${date.toLocaleString(lang, {
      weekday: "long",
    })} ${date.toLocaleString("en", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  const renderPromisedDeliveryDate = (time?: string, lang?: string) => {
    if (!time) return "";
    return new Date(time).toLocaleString(lang, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-wrap justify-between gap-5 px-5">
      <div>
        <span className="text-gray-400">
          {t("shipment.tracking-number")} {shipmentNumber}
        </span>
        <p
          className={cn("mt-2 text-lg font-extrabold text-primary", {
            "text-green-400": currentStatus === ShipmentStatues.DELIVERED,
            "text-main": currentStatus === ShipmentStatues.CANCELLED,
            "text-yellow-300":
              currentStatus === ShipmentStatues.WAITING_FOR_CUSTOMER_ACTION ||
              currentStatus === ShipmentStatues.DELIVERED_TO_SENDER,
          })}
        >
          {t(`shipment.status.${currentStatus}`, "")}
        </p>
      </div>
      <div>
        <span className="text-gray-400">{t("shipment.last-update")} </span>
        <p className="mt-2 text-lg font-extrabold text-primary">
          {renderLastUpdate(lastUpdate, i18n.language)}
        </p>
      </div>
      <div>
        <span className="text-gray-400">{t("shipment.provider-name")} </span>
        <p className="mt-2 text-lg font-extrabold text-primary">{provider}</p>
      </div>
      <div>
        <span className="text-gray-400">
          {t("shipment.promised-delivery-date")}{" "}
        </span>
        <p className="mt-2 text-lg font-extrabold text-primary">
          {renderPromisedDeliveryDate(promisedDeliveryDate, i18n.language)}
        </p>
      </div>
    </div>
  );
};
