"use client";
import Accordion from "../components/Accordion/Accordion";
import AccordionContent from "../components/Accordion/components/AccordionContent";
import AccordionHead from "../components/Accordion/components/AccordionHead";
// import Description from "../components/Description";

export default function Trazabilidad() {
  return (
    <>
      {/* <Description /> */}
      <div className="max-w-[1024px] mx-auto mt-6">
        <Accordion>
          <AccordionHead toggleAccordion={() => {}} isOpen={false}>
            Descripción
          </AccordionHead>
          <AccordionContent isOpen={false}>
            <p>Descripción</p>
            <p>Hola</p>
          </AccordionContent>
        </Accordion>

        <Accordion>
          <AccordionHead toggleAccordion={() => {}} isOpen={false}>
            Información
          </AccordionHead>
          <AccordionContent isOpen={false}>
            <p>Otro contenido</p>
            <p>Hola nuevamente</p>
          </AccordionContent>
        </Accordion>
      </div>
    </>
  );
}
