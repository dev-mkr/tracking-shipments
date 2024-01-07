import { useTranslation } from "react-i18next";

export const GlobalError = () => {
  const { t } = useTranslation();
  return (
    <div className="absolute inset-0 flex items-center justify-center text-xl">
      {t("global.something-went-wrong")}
    </div>
  );
};
