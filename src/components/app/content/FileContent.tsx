import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowDownToLine, Eye, FileText } from "lucide-react"


export default function FileContent({ content, fileContents }: { content: any, fileContents: any }) {

    return (
        <div className="grid gap-4">
            {fileContents && fileContents.map((file: any) => (
                <div
                    key={file.id}
                    className="flex justify-between items-center border rounded-md py-2 px-4"
                >
                    <div className="flex gap-2 items-center">
                        <FileText size={32} strokeWidth={1.5} />
                        <div>
                            <h1 className="text-neutral-900 text-base font-semibold">{file.title_kk}</h1>
                            <span className="text-sm">{content.title_kk}</span>
                        </div>
                    </div>
                    <div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant={"ghost"} className="px-3">
                                    <Eye size={20} strokeWidth={1.5} />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-screen-lg h-screen flex flex-col">
                                <DialogTitle className="text-neutral-900 dark:text-neutral-100">{file.title_kk}</DialogTitle>
                                <DialogDescription className="flex-1">
                                    <iframe src={file.file} className="w-full h-full"></iframe>
                                </DialogDescription>
                            </DialogContent>
                        </Dialog>

                        <a href={file.file} download={true} target="_blank">
                            <Button variant={"ghost"} className="px-3">
                                <ArrowDownToLine size={20} strokeWidth={1.5} />
                            </Button>
                        </a>

                    </div>
                </div>
            ))}
        </div>
    )
}


