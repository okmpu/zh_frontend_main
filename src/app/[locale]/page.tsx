import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Metadata } from "next";
import Heading from "@/components/generics/Heading";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";


export const metadata: Metadata = {
    title: 'Zhanibekov university',
    description: 'Ө.Жәнібеков атындағы Оңтүстік Қазақстан педагогикалық университеті',
}
type Props = {
    params: { locale: string };
};

export default function Home({ params: { locale }}: Props) {
    unstable_setRequestLocale(locale);
    const t = useTranslations("Index");
    
    return (
        <div className="w-full max-w-xl container py-4 flex flex-col gap-2 items-center">
            <Image
                src={"/logo.png"} width={1709} height={366} alt="Logo image" priority={true}
                className="w-64"
            />
            <Heading sizeClass="text-4xl">Zhanibekov university</Heading>
            <Heading sizeClass="text-4xl">{t("title")}</Heading>
            <span className="block text-center">
                Ө.Жәнібеков атындағы Оңтүстік Қазақстан педагогикалық университеті
            </span>

            <div className="flex gap-2 mt-2">
                <Button>
                    <Link href={"/products"}>Жылдам бастама</Link>
                </Button>
                <Link href={"/accounts/login"}>
                    <Button variant={"secondary"}>Бізге қосылу</Button>
                </Link>
            </div>
        </div>
    );
}
