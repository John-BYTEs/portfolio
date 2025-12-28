
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { items } from '../data/SkillData'

export default function Skills() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      
     
      {/* Single Accordion wrapping all items */}
      <Accordion 
        type="single" 
        collapsible 
        className="max-w-4xl mx-auto space-y-1 mt-7"
      >


        {items.map((skill, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`} 
            className="border-b border-gray-700 last:border-0 w-full max-w-full"
          >
            <AccordionTrigger className="text-gray-400 text-left hover:no-underline py-3 w-full justify-start">
              <div className="flex items-start w-full pr-4 font-sans font-bold text-left">
                <span>{skill.skill}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-left pt-1 pb-3 font-sans w-full">
              {skill.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}