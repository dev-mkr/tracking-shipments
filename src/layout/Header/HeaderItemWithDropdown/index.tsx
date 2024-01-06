import { Menu } from "@headlessui/react";

interface Props {
  buttonText: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  children: React.ReactNode;
}

export const HeaderItemWithDropdown = ({
  buttonText,
  buttonClassName,
  dropdownClassName,
  children,
}: Props) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {/* could be more predictable with tw-merge and clsx */}
        <Menu.Items
          className={`peer absolute rounded-md rounded-se-none bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none ${dropdownClassName}`}
        >
          <div className="px-10 py-8">{children}</div>
        </Menu.Items>
        <Menu.Button className={buttonClassName}>{buttonText}</Menu.Button>
      </div>
    </Menu>
  );
};
