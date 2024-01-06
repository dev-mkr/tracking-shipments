import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GlobalLoadingSpinner } from "@/shared/GlobalLoadingSpinner";
import { Layout } from "./layout";

function App() {
  const { t, i18n } = useTranslation();
  const { language, changeLanguage } = i18n;
  const handleChangeLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    changeLanguage(newLanguage);
  };
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return (
    <Suspense fallback={<GlobalLoadingSpinner />}>
      <Layout>
        <button onClick={handleChangeLanguage}>change</button>
        <div>{t("description.part1")}</div>
      </Layout>
    </Suspense>
  );
}

export default App;
