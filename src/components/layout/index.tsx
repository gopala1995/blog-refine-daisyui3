import { PropsWithChildren } from "react";
import { Breadcrumb } from "../breadcrumb";
import { Menu } from "../menu";
import ApexChart from "../dashboard/ApexChart";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="">
      <Menu />
      <div className="p-4 bg-zinc-100">
        <Breadcrumb />
        <ApexChart/>
        <div>{children}</div>
      </div>
    </div>
  );
};
