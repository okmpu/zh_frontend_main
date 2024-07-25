import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { Equal } from "lucide-react"
import Link from "next/link"


export default function BurgerMenu({ resourceLinks, }: { resourceLinks: any }) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant={"ghost"} className="px-3">
                    <Equal size={20} strokeWidth={1.5} />
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className="overflow-auto">
                <SheetHeader>
                    <SheetTitle className="text-left">Ресурстар</SheetTitle>
                    <SheetDescription className="text-left flex flex-col">
                        {resourceLinks.map((item: any) => (
                            <Link 
                                key={item.id}
                                href={item.src}
                            >
                                <Button 
                                    className="w-full justify-start" 
                                    variant={"ghost"}
                                >
                                    {item.label}
                                </Button>        
                            </Link>
                        ))}
                    </SheetDescription>
                </SheetHeader>
                
            </SheetContent>
        </Sheet>
    )
}