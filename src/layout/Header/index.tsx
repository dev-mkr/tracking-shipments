import { useTranslation } from "react-i18next";
import { Logo } from "@/shared/Logo";
import { HeaderItemWithDropdown } from "@/layout/Header/HeaderItemWithDropdown";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full border-b">
      <header className="container flex items-center justify-between ">
        <Logo className="h-10 w-28 lg:h-20 lg:w-40" />
        {/* start mobile menu */}
        <HeaderItemWithDropdown
          buttonText={t("header.track-your-order")}
          dropdownClassName="left-full -translate-x-1/2 top-10 z-10 mt-2 w-[100vw]"
          buttonClassName="text-main/70 p-2 rounded-lg rounded-b-none font-extrabold peer-focus:shadow-[0_-10px_19px_2px_rgba(0,0,0,.10)] lg:hidden"
        />

        <MobileMenu />
        {/* end mobile menu */}

        <nav className=" hidden items-center lg:flex lg:gap-x-8 xl:gap-x-12">
          <a
            className="p-4  text-lg font-extrabold hover:text-main hover:underline"
            href="#"
          >
            {t("header.home")}
          </a>

          <a
            className="p-4  text-lg font-extrabold hover:text-main hover:underline"
            href="#"
          >
            {t("header.prices")}
          </a>

          <a
            className="p-4  text-lg font-extrabold hover:text-main hover:underline"
            href="#"
          >
            {t("header.contact-sales")}
          </a>
        </nav>
        <nav className="hidden items-center lg:flex lg:gap-x-6 xl:gap-x-8 [&>a]:text-lg [&>a]:font-extrabold">
          <HeaderItemWithDropdown
            buttonText={t("header.track-your-order")}
            dropdownClassName="end-0 top-20 z-10 mt-2 w-80"
            buttonClassName="peer-focus:text-main rounded-lg rounded-b-none p-6 px-7 text-lg font-extrabold peer-focus:shadow-[0_-10px_19px_2px_rgba(0,0,0,.10)] hover:text-main hover:underline"
          />

          <a
            className="relative p-4 text-lg font-extrabold hover:text-main hover:underline"
            href="#"
          >
            <span
              className="absolute -start-5 h-8 w-[1px] bg-gray-400"
              aria-hidden
            />
            {t("header.login")}
          </a>

          <button
            className="uppercase text-main"
            onClick={() => {
              const newLanguage = i18n.language === "en" ? "ar" : "en";
              i18n.changeLanguage(newLanguage);
            }}
          >
            {i18n.language === "en" ? "ar" : "eng"}
          </button>
        </nav>
      </header>
    </div>
  );
};
