import { Dispatch, SetStateAction, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "./Modal";

export interface ModelType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Portals = ({ isOpen, setIsOpen }: ModelType) => {
  return createPortal(
    <>{isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}</>,
    document.body
  );
};

export const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-28 mx-auto shadow-md rounded-lg px-5 py-3 m-4 bg-gray-800 text-orange-500">
      <Portals isOpen={isOpen} setIsOpen={setIsOpen} />
      <button
        onClick={() => setIsOpen(true)}
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
      >
        Toggel
      </button>
    </div>
  );
};
