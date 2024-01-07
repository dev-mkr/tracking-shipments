import SvgIcon from "@/shared/SvgIcon";

export const GlobalLoadingSpinner = () => {
  return (
    <span className="absolute inset-0 flex items-center justify-center">
      <SvgIcon
        name="loading-circle"
        className="h-10 w-10 animate-spin fill-main text-gray-200"
        alt="loading"
      />
    </span>
  );
};
