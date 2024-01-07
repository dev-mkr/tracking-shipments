import { useTranslation } from "react-i18next";
import SvgIcon from "@/shared/SvgIcon";

interface Props {
  className?: string;
}

export const Logo = ({ className }: Props) => {
  const { i18n } = useTranslation();
  const { language } = i18n;
  return (
    <SvgIcon
      name={language === "ar" ? "logo-ar" : "logo-en"}
      className={className}
      alt="logo"
    />
  );
};
