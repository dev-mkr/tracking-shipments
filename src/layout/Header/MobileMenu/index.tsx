import SvgIcon from "@/shared/SvgIcon";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

export const MobileMenu = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Fragment>
      <button
        type="button"
        className="-ml-2 rounded-md p-2  text-gray-400 lg:hidden"
        onClick={() => setMobileMenuOpen(true)}
      >
        <SvgIcon className="h-7 w-7" name="burger-menu" alt="Open Menu" />
      </button>
      <Transition.Root show={isMobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 me-24 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <SvgIcon className="h-6 w-6" name="x" alt="Close Menu" />
                  </button>
                </div>

                <nav className="flex flex-col">
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
                <nav className="flex flex-col items-start  [&>a]:text-lg [&>a]:font-extrabold">
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
                    className="px-4 text-start uppercase text-main"
                    onClick={() => {
                      const newLanguage = i18n.language === "en" ? "ar" : "en";
                      i18n.changeLanguage(newLanguage);
                    }}
                  >
                    {i18n.language === "en" ? "ar" : "eng"}
                  </button>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </Fragment>
  );
};
