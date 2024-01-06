import { Header } from "@/layout/Header";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
