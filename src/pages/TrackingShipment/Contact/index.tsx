import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center gap-5 rounded-md border p-5 md:flex-row">
      <img
        src="/asking-questions.avif"
        aria-hidden
        className="h-24 w-24 max-w-full"
      />
      <div className="flex flex-col gap-y-3">
        <span className="text-md font-extrabold text-primary/80 ">
          {t("shipment.is-there-any-problem")}
        </span>
        <a
          href="#"
          className="rounded-2xl bg-main  py-1.5 text-center font-semibold text-white"
        >
          {t("shipment.report-a-problem")}
        </a>
      </div>
    </div>
  );
};
