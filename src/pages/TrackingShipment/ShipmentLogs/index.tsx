import { ShipmentStatues, ShipmentType } from "@/shared/types/shipment.types";
import { cn } from "@/shared/utils/cn";
import { useTranslation } from "react-i18next";

interface Props {
  logs: ShipmentType["TransitEvents"];
}

export const ShipmentLogs = ({ logs }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="flex-1">
      <h4 className="mb-4">{t("shipment.shipment-details")}</h4>
      <div className="overflow-x-scroll rounded-lg border">
        <table className="w-full  text-left text-sm text-primary rtl:text-right">
          <thead className=" bg-gray-50 text-xs font-extrabold text-gray-500">
            <tr>
              <th scope="col" className="px-6 py-5">
                {t("shipment.branch")}
              </th>
              <th scope="col" className="px-6 py-5">
                {t("shipment.date")}
              </th>
              <th scope="col" className="px-6 py-5">
                {t("shipment.time")}
              </th>
              <th scope="col" className="px-6 py-5">
                {t("shipment.details")}
              </th>
            </tr>
          </thead>
          <tbody>
            {logs?.map((log) => (
              <tr
                className="whitespace-nowrap border-b bg-white font-semibold"
                key={log.timestamp}
              >
                <td className="px-6 py-4 ">{log?.hub}</td>
                <td className="px-6 py-4">
                  {new Date(log.timestamp).toLocaleDateString()}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {new Date(log.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td scope="row" className="flex flex-col gap-3 px-6 py-4">
                  <span>{t(`shipment.status.${log?.state}`, "")}</span>
                  <span
                    className={cn("", {
                      "text-green-400":
                        log?.state === ShipmentStatues.DELIVERED,
                      "text-main": log?.state === ShipmentStatues.CANCELLED,
                      "text-yellow-300":
                        log?.state ===
                        ShipmentStatues.WAITING_FOR_CUSTOMER_ACTION,
                    })}
                  >
                    {log?.reason}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
