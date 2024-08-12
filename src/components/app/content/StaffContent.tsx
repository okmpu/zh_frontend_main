import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mail, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";


export default function StaffContent({ content, }: { content: any }) {
    const currentLocale = useLocale();
    const t = useTranslations("ContentPage");

    return (
        <div className="grid gap-2 text-center border p-4 rounded-lg">
            <Image
                src={content.image ? content.image : "/card.png"} width={520} height={520} alt="Image"
                className="rounded-full w-32 h-32 mx-auto border-2"
            />
            <h1 className="text-xl font-bold text-foreground">
                {currentLocale === "ru" ? content.full_name_ru : currentLocale === "en" ? content.full_name_en : content.full_name_kk}
            </h1>
            <span>
                {currentLocale === "ru" ? content.profession_ru : currentLocale === "en" ? content.profession_en : content.profession_kk}
            </span>
            {(content.phone || content.email) &&
                <div className="grid gap-2">
                    <div className="flex justify-center items-center gap-2">
                        <Phone strokeWidth={1.5} size={20} />
                        <Button variant={"link"} className="h-auto p-0">{content.phone}</Button>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <Mail size={20} strokeWidth={1.5} />
                        <span>{content.email}</span>
                    </div>
                </div>
            }

            <Dialog>
                <DialogTrigger asChild>
                    <Button variant={"secondary"} className="w-full">{t("staffContent.button")}</Button>
                </DialogTrigger>
                <DialogContent className="flex flex-col max-w-2xl">
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <div className="text-center grid gap-4">
                        <Image
                            src={content.image ? content.image : "/card.png"} width={512} height={512} alt="Image"
                            className="w-40 h-40 rounded-full border-2 mx-auto"
                        />
                        <div className="grid gap-2 border-b pb-4">
                            <h1 className="text-xl font-bold text-foreground">
                                {content.full_name_kk}
                            </h1>
                            <span>{content.profession_kk}</span>
                            <div className="grid gap-2">
                                <div className="flex justify-center items-center gap-2">
                                    <Phone strokeWidth={1.5} size={20} />
                                    <Button variant={"link"} className="h-auto p-0">{content.phone}</Button>
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <Mail size={20} strokeWidth={1.5} />
                                    <span>{content.email}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            {currentLocale === "ru" ? content.bio_ru : currentLocale === "en" ? content.bio_en : content.bio_kk}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}