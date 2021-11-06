import { Button } from "@components/lib";
import { Fragment } from "react";
import Image from "next/image";
import { LocationModal } from "./location-modal";
import { Only } from "@components/only";
import { logo } from "@assets";
import { HiMenu, HiShoppingCart } from "react-icons/hi";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps): React.ReactElement => (
  <Fragment>
    <header className="bg-gray-100 px-8 pt-9 pb-3 flex justify-between lg:pb-6">
      <Only on="lgDown">
        <LocationModal />
      </Only>
      <Only on="lgUp">
        <div className="flex items-center gap-x-4">
          <button>
            <HiMenu className="h-5 w-5" />
          </button>
          <Image
            src={logo as string}
            alt="Allfruver logo"
            className="h-8 w-auto"
          />
        </div>
      </Only>
      <div className="flex items-center gap-x-2">
        <Only on="lgUp">
          <LocationModal />
        </Only>
        <Button leftIcon={HiShoppingCart} size="sm">
          1
        </Button>
        <Only on="lgUp">
          <Button size="sm">Ingreso ó registro</Button>
        </Only>
      </div>
    </header>
    <main>{children}</main>
  </Fragment>
);
