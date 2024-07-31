import { Button } from "@/components/ui/button";
import { Bird } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title: "404 - Бет табылған жоқ",
    description: "Біз іздеген бет табылған жоқ. Басты бетке өтіп навигация арқылы іздеп көріңіз",
}

export default function NotFoundPage() {
    return (
        <div className="container mx-auto py-10 flex flex-col items-center text-foreground">
            <Bird size={256} strokeWidth={1} />
            
            <div className="max-w-2xl flex flex-col gap-2 items-center text-center">
                <h1 className="text-4xl font-bold">Бет табылған жоқ</h1>
                <span className="text-neutral-500">
                    Біз іздеген бет табылған жоқ. Басты бетке өтіп навигация арқылы іздеп көріңіз
                </span>
                <Link href={"/"}>
                    <Button variant={"link"}>Басты бетке қайту</Button>
                </Link>
            </div>
        </div>
    )
}