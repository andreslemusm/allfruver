import { Button } from "@components/lib";
import { Fragment } from "react";
import { HiMenu } from "react-icons/hi";
import Image from "next/image";
import { LocationModal } from "./location-modal";
import { ShoppingCart } from "./shopping-cart";
import { logo } from "@assets";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps): React.ReactElement => (
  <Fragment>
    <header className="bg-gray-100 px-8 pt-9 pb-3 lg:pb-6">
      {/* Mobile & Tablet */}
      <div className="flex justify-between lg:hidden">
        <LocationModal />
        <ShoppingCart />
      </div>
      {/* Desktop */}
      <div className="hidden justify-between lg:flex">
        <div className="flex items-center gap-x-4">
          <button>
            <HiMenu className="h-5 w-5" />
          </button>
          <div className="h-14 w-40">
            <Image src={logo} alt="Allfruver logo" priority />
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <LocationModal />
          <ShoppingCart />
          <Button size="sm">Ingreso ó registro</Button>
        </div>
      </div>
    </header>
    <main>{children}</main>
  </Fragment>
);
