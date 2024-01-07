import SvgIcon from "@/shared/SvgIcon";
import { ShipmentStatues } from "@/shared/types/shipment.types";
import { cn } from "@/shared/utils/cn";
import { useTranslation } from "react-i18next";

interface Props {
  statues: keyof typeof ShipmentStatues;
  reason?: string;
}
export const ShipmentStatuesComponent = ({ statues, reason }: Props) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const isTicketCreated = statues === ShipmentStatues.TICKET_CREATED;
  const isShipmentReceived = statues === ShipmentStatues.PACKAGE_RECEIVED;
  const isOutForDelivery = statues === ShipmentStatues.OUT_FOR_DELIVERY;
  const isCanceled = statues === ShipmentStatues.CANCELLED;
  const isWaitingForCustomerAction =
    statues === ShipmentStatues.WAITING_FOR_CUSTOMER_ACTION;
  const isDelivered = statues === ShipmentStatues.DELIVERED;

  if (isDelivered) {
    return (
      <div className="relative w-full px-5 py-8">
        <div
          className="absolute start-2 top-8  -z-10 mx-5 flex h-4/6  flex-col items-center justify-between bg-gray-200 max-sm:w-1 md:inset-x-0 md:top-1/3 md:h-1 md:flex-row"
          aria-hidden="true"
        >
          <span className="flex-1  bg-green-400 max-sm:w-1 md:h-1" />
          <span className="flex-1  bg-green-400 max-sm:w-1 md:h-1" />
          <span className="flex-1  bg-green-400 max-sm:w-1 md:h-1" />
        </div>

        <div className="flex w-full flex-col items-start gap-y-5 md:flex-row md:items-center">
          <div className="flex flex-1 gap-x-6 gap-y-5 max-sm:items-center md:flex-col">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-400 shadow">
              <SvgIcon name="check-mark" className="h-5 w-5 text-white" />
            </div>
            <p className="text-md font-bold text-primary">
              {t("shipment.status.TICKET_CREATED")}
            </p>
          </div>

          <div className="flex flex-1 gap-x-6 gap-y-5 max-sm:items-center md:-me-5 md:flex-col">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-400 shadow">
              <SvgIcon name="check-mark" className="h-5 w-5 text-white" />
            </div>
            <p className="text-md font-bold text-primary">
              {t("shipment.status.PACKAGE_RECEIVED")}
            </p>
          </div>

          <div className=" flex flex-1 gap-x-6 gap-y-5  max-sm:items-center  md:flex-col">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-400 shadow">
              <SvgIcon name="check-mark" className="h-5 w-5 text-white" />
            </div>
            <div className="">
              <p className="text-md font-bold text-primary">
                {t("shipment.status.OUT_FOR_DELIVERY")}
              </p>
            </div>
          </div>

          <div className="flex gap-x-6 gap-y-5  max-sm:items-center md:flex-col md:items-end">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-400 shadow">
              <SvgIcon name="check-mark" className="h-5 w-5 text-white" />
            </div>
            <p className="text-md font-bold text-primary">
              {t("shipment.status.DELIVERED")}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full px-5 py-8">
      <div
        className="absolute start-2 top-8  -z-10 mx-5 flex h-4/6  flex-col items-center justify-between bg-gray-200 max-sm:w-1 md:inset-x-0 md:top-1/3 md:h-1 md:flex-row"
        aria-hidden="true"
      >
        <span
          className={cn("flex-1  max-sm:w-1 md:h-1", {
            "bg-green-400": isShipmentReceived || isOutForDelivery,
            "bg-main": isCanceled,
            "bg-yellow-300": isWaitingForCustomerAction,
          })}
        />
        <span
          className={cn("flex-1  max-sm:w-1 md:h-1", {
            "bg-green-400": isOutForDelivery,
            "bg-main": isCanceled,
            "bg-yellow-300": isWaitingForCustomerAction,
          })}
        />
        <span className="flex-1  max-sm:w-1 md:h-1" />
      </div>
      <div className="flex w-full flex-col items-start gap-y-5 md:flex-row md:items-center">
        <div className="flex flex-1 gap-x-6 gap-y-5 max-sm:items-center md:flex-col">
          <div
            className={cn(
              "flex h-6 w-6 items-center justify-center rounded-full shadow ",
              {
                "bg-green-400":
                  isTicketCreated || isShipmentReceived || isOutForDelivery,
                "bg-main": isCanceled,
                "bg-yellow-300": isWaitingForCustomerAction,
              }
            )}
          >
            <SvgIcon name="check-mark" className="h-5 w-5 text-white" />
          </div>
          <p className="text-md font-bold text-primary">
            {t("shipment.status.TICKET_CREATED")}
          </p>
        </div>
        <div className="flex flex-1 gap-x-6 gap-y-5 max-sm:items-center md:-me-5 md:flex-col">
          <div
            className={cn(
              "flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 shadow",
              {
                "bg-green-400": isShipmentReceived || isOutForDelivery,
                "bg-main": isCanceled,
                "bg-yellow-300": isWaitingForCustomerAction,
              }
            )}
          >
            <SvgIcon name="check-mark" className="h-5 w-5 text-white" />
          </div>
          <p
            className={cn("text-md font-bold text-gray-400", {
              "text-primary":
                isShipmentReceived ||
                isOutForDelivery ||
                isCanceled ||
                isWaitingForCustomerAction,
            })}
          >
            {t("shipment.status.PACKAGE_RECEIVED")}
          </p>
        </div>
        <div className=" flex flex-1 gap-x-6 gap-y-5 max-sm:-ms-3 max-sm:items-center md:-me-5 md:flex-col">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full bg-gray-300",
              {
                "scale-x-[-1] scale-y-[1]": language === "ar",
                "bg-green-400": isOutForDelivery,
                "bg-main": isCanceled,
                "bg-yellow-300": isWaitingForCustomerAction,
              }
            )}
          >
            <SvgIcon
              name="truck-delivery"
              className={cn("h-7 w-7 text-white")}
            />
          </div>
          <div className="">
            <p
              className={cn("text-md font-bold text-gray-400", {
                "text-primary":
                  isOutForDelivery || isCanceled || isWaitingForCustomerAction,
              })}
            >
              {t("shipment.status.OUT_FOR_DELIVERY")}
            </p>
            <span
              className={cn("text-xs text-gray-400", {
                "text-main": isCanceled,
                "text-yellow-300": isWaitingForCustomerAction,
              })}
            >
              {reason}
            </span>
          </div>
        </div>
        <div className="flex gap-x-6 gap-y-5 max-sm:-ms-3 max-sm:items-center md:flex-col md:items-end">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow ">
            <SvgIcon name="delivered-box" className="h-7 w-7 text-gray-300" />
          </div>
          <p className="text-md font-bold text-gray-400">
            {t("shipment.status.DELIVERED")}
          </p>
        </div>
      </div>
      {/* <div className="flex h-1 items-center justify-between bg-gray-200">
      
       
            
          </div>
        </div>
        <div className="relative flex w-1/3 justify-end">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow">
            <SvgIcon name="delivered-box" className="h-7 w-7 text-gray-300" />
          </div>
          <p className="text-md absolute top-10 font-bold text-gray-400">
            {t("shipment.status.DELIVERED")}
          </p>
        </div>
      </div> */}
    </div>
  );

  // return (
  //   <div className="px-5 py-8 pb-16">
  //     <div className="flex h-1 items-center justify-between bg-gray-200">
  //       <div className="relative flex h-1 w-1/3 items-center bg-main">
  //         <div className="flex h-6 w-6 items-center justify-center rounded-full bg-main shadow">
  //           <SvgIcon name="check-mark" className="h-5 w-5 text-white" />
  //         </div>
  //         <p className="text-md absolute top-10 font-bold text-primary">
  //           {t("shipment.status.TICKET_CREATED")}
  //         </p>
  //       </div>
  //       <div className="relative flex h-1 w-1/3 items-center justify-between bg-main">
  //         <div className="-ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-main shadow">
  //           <SvgIcon name="check-mark" className="h-5 w-5 text-white" />
  //         </div>
  //         {/* <p className="text-md absolute -start-1/2 top-10 translate-x-1/2 font-bold text-primary"> */}
  //         <p
  //           className={cn(
  //             "text-md absolute -start-1/2 top-10  font-bold text-primary",
  //             {
  //               "-translate-x-1/2": language === "ar",
  //               "translate-x-1/2": language !== "ar",
  //             }
  //           )}
  //         >
  //           {t("shipment.status.PACKAGE_RECEIVED")}
  //         </p>
  //         <div>
  //           <div className="flex h-12 w-12 items-center justify-center rounded-full bg-main">
  //             <SvgIcon
  //               name="truck-delivery"
  //               className={cn("h-7 w-7 text-white", {
  //                 "scale-x-[-1] scale-y-[1]": language === "ar",
  //               })}
  //             />
  //           </div>
  //           <div
  //             className={cn("absolute start-1/2 top-10 ", {
  //               "-translate-x-1/2": language === "ar",
  //               "translate-x-1/2": language !== "ar",
  //             })}
  //           >
  //             <p className="text-md font-bold text-primary">
  //               {t("shipment.status.OUT_FOR_DELIVERY")}
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="relative flex w-1/3 justify-end">
  //         <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow">
  //           <SvgIcon name="delivered-box" className="h-7 w-7 text-gray-300" />
  //         </div>
  //         <p className="text-md absolute top-10 font-bold text-gray-400">
  //           {t("shipment.status.DELIVERED")}
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );
};
