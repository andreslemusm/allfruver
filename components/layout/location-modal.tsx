import { HiOutlineLocationMarker } from "react-icons/hi";

export const LocationModal = (): React.ReactElement => (
  <button className="transition flex items-center px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300">
    <HiOutlineLocationMarker className="-ml-1 mr-2 h-5 w-5" />
    <p className="text-sm text-green-300 font-bold">Agrega una dirección</p>
  </button>
);
