import { Button } from "@components/lib";
import { Fragment } from "react";
import Image from "next/image";
import { LocationModal } from "./location-modal";
import { ShoppingCart } from "./shopping-cart";
import { HiChevronDown, HiMenu } from "react-icons/hi";
import { kushki, logo, logoWhite } from "@assets";

const copyright = (
  <div className="flex flex-col items-center lg:flex-row lg:gap-x-2">
    <div className="h-10 w-28">
      <Image src={logoWhite as string} alt="Allfruver logo" />
    </div>
    <p>
      <strong>2021</strong> Todos los derechos reservados
    </p>
  </div>
);
const kushkiEl = (
  <p className="flex items-center gap-x-0.5 font-bold">
    Pagos seguros con
    <span className="h-5 w-20">
      <Image src={kushki} alt="Kushki" className="object-contain" />
    </span>
  </p>
);
const navigation = (
  <nav className="space-x-3">
    <a href="#">Nosotros</a>
    <a href="#">Mercados</a>
    <a href="#">Privacidad</a>
    <a href="#">Datos</a>
  </nav>
);
const footerButton = (
  <Button rightIcon={HiChevronDown} appearance="secondary" size="sm">
    Ver pie de página
  </Button>
);

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
          <div className="h-14 w-auto">
            <Image src={logo as string} alt="Allfruver logo" priority />
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
    <footer className="bg-gray-400 text-white text-sm mt-8 px-8 pt-6 pb-9 lg:py-9 lg:px-20">
      {/* Mobile & Tablet */}
      <div className="flex flex-col items-center gap-y-8 xl:hidden">
        {copyright}
        {navigation}
        <div className="flex items-center flex-col gap-y-2">
          {kushkiEl}
          {footerButton}
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden justify-between xl:flex">
        {copyright}
        <div className="flex items-center gap-x-3">
          {navigation}
          {kushkiEl}
          {footerButton}
        </div>
      </div>
    </footer>
  </Fragment>
);
