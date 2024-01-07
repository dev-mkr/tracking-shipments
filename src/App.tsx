import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

import { TrackingShipment } from "@/pages/TrackingShipment";

function App() {
  const {
    i18n: { language },
  } = useTranslation();

  useLayoutEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return <TrackingShipment />;
}

export default App;
