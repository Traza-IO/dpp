// components/AccordionHead.tsx
import React, { ReactNode } from "react";
import { FaAngleDown } from "react-icons/fa";

interface AccordionHeadProps {
  children: ReactNode;
  toggleAccordion: () => void;
  isOpen: boolean;
}

const AccordionHead: React.FC<AccordionHeadProps> = ({
  children,
  toggleAccordion,
  isOpen,
}) => {
  return (
    <div
      className="accordion-head p-4 cursor-pointer flex justify-between items-center bg-gray-100 hover:bg-gray-200"
      onClick={toggleAccordion}
    >
      <h3 className="text-sm font-medium">{children}</h3>
      <FaAngleDown
        size={16}
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </div>
  );
};

export default AccordionHead;
