import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useShipmentStore } from "@/store/shipment-store";
import SvgIcon from "./SvgIcon";

interface Props {
  callBack?: () => void;
}

export const TrackingNumberInput = ({ callBack }: Props) => {
  const { t } = useTranslation();

  const [shipmentNumberInput, setShipmentNumberInput] = useState("");

  const setShipmentNumber = useShipmentStore(
    (state) => state.setShipmentNumber
  );

  return (
    <div className="flex flex-col gap-3" onClick={(e) => e.preventDefault()}>
      <label className="text-start">{t("tracking-input.label")}</label>

      <div className="relative ">
        <input
          type="search"
          id="search-input"
          value={shipmentNumberInput}
          onChange={(e) => setShipmentNumberInput(e.target.value)}
          autoFocus
          className="h-12 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-main focus:outline-none focus:ring-main "
          placeholder={t("tracking-input.placeholder")}
        />
        <button
          onClick={() => {
            setShipmentNumber(shipmentNumberInput);
            callBack?.();
          }}
          className="absolute end-0 top-0 h-full rounded-e-lg border bg-main p-2.5 text-sm font-medium text-white hover:bg-main focus:outline-none focus:ring-4 focus:ring-main "
        >
          <SvgIcon className="h-6 w-6" name="search-icon" alt="search" />
        </button>
      </div>
    </div>
  );
};
