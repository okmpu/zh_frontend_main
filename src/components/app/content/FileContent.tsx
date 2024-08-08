import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowDownToLine, Eye, FileText } from "lucide-react"
import { useLocale } from "next-intl"


export default function FileContent({ head, content }: { head: any, content: any }) {
    const currentLocale = useLocale();

    return (
        <div className="flex justify-between items-center border rounded-md py-2 px-4">
            <div className="flex gap-2 items-center">
                <FileText size={32} strokeWidth={1.5} />
                <div>
                    <h1 className="text-foreground text-xl font-semibold">
                        {currentLocale === "ru" ? content.caption_ru : currentLocale === "en" ? content.caption_en : content.caption_kk}
                    </h1>
                    <span>
                        {currentLocale === "ru" ? head.title_ru : currentLocale === "en" ? head.title_en : head.title_kk}
                    </span>
                </div>
            </div>
            
            <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant={"ghost"} className="px-3">
                            <Eye size={20} strokeWidth={1.5} />
                        </Button>
                    </DialogTrigger>
                        <DialogContent className="flex flex-col p-0 max-w-full h-full 2xl:max-w-screen-xl 2xl:h-5/6">
                            <DialogTitle className="text-foreground px-4 pt-4">
                                {currentLocale === "ru" ? content.caption_ru : currentLocale === "en" ? content.caption_en : content.caption_kk}
                            </DialogTitle>
                            <DialogDescription className="flex-1">
                                <iframe src={content.file} className="w-full h-full"></iframe>
                            </DialogDescription>
                        </DialogContent>
                </Dialog>

                <a href={content.file} download={true} target="_blank">
                    <Button variant={"ghost"} className="px-3">
                        <ArrowDownToLine size={20} strokeWidth={1.5} />
                    </Button>
                </a>
            </div>
        </div>
    )
}
