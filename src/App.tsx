import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

import { TrackingShipment } from "@/pages/TrackingShipment";

function App() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  useLayoutEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.title = t("global.shipment-page-title");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return <TrackingShipment />;
}

export default App;
