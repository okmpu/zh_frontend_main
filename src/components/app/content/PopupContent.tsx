import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function PopupContent({ popupContents, }: { popupContents: any }) {
    return (
        <Accordion type="single" collapsible>
            {popupContents.map((popup: any) => (
                <AccordionItem key={popup.id} value={`item-${popup.id}`}>
                    <AccordionTrigger>{popup.trigger_kk}</AccordionTrigger>
                    <AccordionContent>
                        {popup.description_kk}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}