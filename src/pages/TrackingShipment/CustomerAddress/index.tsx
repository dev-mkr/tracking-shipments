import { useTranslation } from "react-i18next";

interface Props {
  address: string;
}

export const CustomerAddress = ({ address }: Props) => {
  const { t } = useTranslation();
  return (
    <div>
      <h4 className="mb-4">{t("shipment.delivery-address")}</h4>
      <div className="rounded-md border bg-gray-100 p-5">{address}</div>
    </div>
  );
};
