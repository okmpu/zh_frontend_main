"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Atom, Clock, FlaskConical, FolderKanban, GraduationCap, Mail, Newspaper, Phone } from "lucide-react"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


function GetIcon(slug: string) {
    if (slug === "bachelor") {
        return <GraduationCap size={64} strokeWidth={1} />
    } else if (slug === "magistracy") {
        return <Atom size={64} strokeWidth={1} />
    } else if (slug === "doctoral") {
        return <FlaskConical size={64} strokeWidth={1} />
    }
}


export default function FacultyDetailMain(
    {
        faculty,
        programs,
        departments,
        projects,
        personals,
        news, events, announcements
    }: {
        faculty: any,
        programs: any,
        departments: any,
        projects: any,
        personals: any,
        news: any,
        events: any, 
        announcements: any
    }
) {
    const currentLocale = useLocale();
    const t = useTranslations("FacultyPage.detail");

    return (
        <div className="my-10 flex items-start gap-10">
            <div className="flex-1 flex flex-col gap-4">
                {/* Programs */}
                <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {programs.map((item: any) => (
                        <div key={item.id} className="p-4 bg-primary text-secondary rounded-lg flex gap-2 justify-center items-center">
                            {GetIcon(item.slug)}
                            <h1 className="font-semibold text-xl">
                                {currentLocale === "ru" ? item.name_ru : currentLocale === "en" ? item.name_en : item.name_kk}
                            </h1>
                        </div>
                    ))}
                </div>

                {/* Departments */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-xl text-foreground">
                            {t("cafedra.head")}
                        </h1>

                        <Link href={"#"}>
                            <Button variant={"link"}>{t("cafedra.link")}</Button>
                        </Link>
                    </div>

                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {departments.map((item: any) => (
                            <div
                                key={item.id}
                                className="h-64 border rounded-lg flex flex-col gap-2 justify-center items-center"
                            >
                                <Image src={faculty.image ? faculty.image : "/card.png"} width={512} height={512} alt="Image"
                                    className="rounded-full w-36 h-36 border"
                                />
                                <div className="text-center">
                                    <h1 className="font-semibold text-xl text-neutral-900 dark:text-neutral-100">
                                        {currentLocale === "ru" ? item.name_ru : currentLocale === "en" ? item.name_en : item.name_kk}
                                    </h1>
                                    <span>кафедрасы</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Projects */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-xl text-foreground">
                            {t("projects.head")}
                        </h1>

                        <Link href={"#"}>
                            <Button variant={"link"}>{t("projects.link")}</Button>
                        </Link>
                    </div>

                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((item: any) => {
                            const date = new Date(item.date_created)
                            return (
                                <Link
                                    key={item.id}
                                    href={item.file}
                                    target="_blank"
                                    className="grid gap-2 items-center border overflow-hidden rounded-lg text-foreground"
                                >
                                    <div className="py-6 bg-primary flex justify-center text-secondary">
                                        <FolderKanban size={64} strokeWidth={1} />
                                    </div>
                                    <div className="flex-1 px-4 py-2">
                                        <h1 className="font-semibold text-lg line-clamp-1">
                                            {currentLocale === "ru" ? item.name_ru : currentLocale === "en" ? item.name_en : item.name_kk}
                                        </h1>
                                        <div className="flex justify-between items-center gap-2 text-neutral-500">
                                            <span>
                                                {currentLocale === "ru" ? item.author_ru : currentLocale === "en" ? item.author_en : item.author_kk}
                                            </span>

                                            <div className="flex items-center gap-2 text-sm">
                                                <Clock size={16} strokeWidth={1.5} />
                                                <span suppressHydrationWarning={true}>
                                                    {date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}
                                                    .{date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}
                                                    .{date.getFullYear()} -
                                                    {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}
                                                    :{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>

                {/* Personals */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-xl text-foreground">
                            {t("personals.head")}
                        </h1>

                        <Link href={"#"}>
                            <Button variant={"link"}>{t("personals.link")}</Button>
                        </Link>
                    </div>

                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {personals.map((item: any) => (
                            <div
                                key={item.id}
                                className="border rounded-lg flex justify-center items-center flex-col gap-2 p-4"
                            >
                                <Image
                                    src={item.image ? item.image : "/card.png"} width={512} height={512} alt="Image"
                                    className="w-36 h-36 rounded-full border"
                                />

                                <div className="text-center">
                                    <h1 className="text-foreground text-base font-semibold">
                                        {item.user.first_name + " " + item.user.last_name}
                                    </h1>
                                    <span>
                                        {currentLocale === "ru" ? item.profession_ru : currentLocale === "en" ? item.profession_en : item.profession_kk}
                                    </span>
                                </div>

                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant={"secondary"} className="w-full flex">{t("personals.link")}</Button>
                                    </DialogTrigger>
                                    <DialogContent className="flex flex-col max-w-2xl">
                                        <DialogHeader>
                                            <DialogTitle></DialogTitle>
                                            <DialogDescription></DialogDescription>
                                        </DialogHeader>
                                        <div className="text-center grid gap-4">
                                            <Image
                                                src={item.image ? item.image : "/card.png"} width={512} height={512} alt="Image"
                                                className="w-40 h-40 rounded-full border-2 mx-auto"
                                            />
                                            <div className="grid gap-2 border-b pb-4">
                                                <h1 className="text-xl font-bold text-foreground">
                                                    {item.user.first_name + " " + item.user.last_name}
                                                </h1>
                                                <span>
                                                    {currentLocale === "ru" ? item.profession_ru : currentLocale === "en" ? item.profession_en : item.profession_kk}
                                                </span>
                                                <div>
                                                    {item.phone &&
                                                        <div className="flex justify-center items-center gap-2">
                                                            <Phone strokeWidth={1.5} size={20} />
                                                            <Button variant={"link"} className="h-auto p-0">{item.phone}</Button>
                                                        </div>
                                                    }
                                                    {item.email &&
                                                        <div className="flex justify-center items-center gap-2">
                                                            <Mail size={20} strokeWidth={1.5} />
                                                            <span>{item.email}</span>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <div>
                                                {currentLocale === "ru" ? item.about_ru : currentLocale === "en" ? item.about_en : item.about_kk}
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Publics */}
            <div className="w-full max-w-sm grid gap-8">
                {/* News */}
                <div>
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-xl text-neutral-900 dark:text-neutral-100">
                            {t("publics.news_head")}
                        </h1>
                        <Link href={"#"}>
                            <Button variant={"link"}>{t("publics.link")}</Button>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        {news.map((item: any) => {
                            const date = new Date(item.date_created)

                            return (
                                <div
                                    key={item.id}
                                    className="border rounded-lg overflow-hidden flex text-foreground"
                                >
                                    <div className="bg-amber-500 p-6 text-secondary">
                                        <Newspaper strokeWidth={1.5} size={28} />
                                    </div>
                                    <div className="flex flex-col flex-1 gap-2 py-2 px-4">
                                        <h1 className="font-semibold text-base line-clamp-2 text-foreground">
                                            {currentLocale === "ru" ? item.title_ru : currentLocale === "en" ? item.title_en : item.title_kk}
                                        </h1>

                                        <div className="flex items-center gap-2 text-neutral-500 text-sm">
                                            <Clock size={16} strokeWidth={1.5} />
                                            <span>
                                                {date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}
                                                .{date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}
                                                .{date.getFullYear()} -
                                                {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}
                                                :{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Events */}
                <div>
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-xl text-neutral-900 dark:text-neutral-100">
                            {t("publics.events_head")}
                        </h1>
                        <Link href={"#"}>
                            <Button variant={"link"}>{t("publics.link")}</Button>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        {events.map((item: any) => {
                            const date = new Date(item.date_created)

                            return (
                                <div
                                    key={item.id}
                                    className="border rounded-lg overflow-hidden flex text-foreground"
                                >
                                    <div className="bg-amber-500 p-6 text-secondary">
                                        <Newspaper strokeWidth={1.5} size={28} />
                                    </div>
                                    <div className="flex flex-col flex-1 gap-2 py-2 px-4">
                                        <h1 className="font-semibold text-base line-clamp-2 text-foreground">
                                            {currentLocale === "ru" ? item.title_ru : currentLocale === "en" ? item.title_en : item.title_kk}
                                        </h1>

                                        <div className="flex items-center gap-2 text-neutral-500 text-sm">
                                            <Clock size={16} strokeWidth={1.5} />
                                            <span>
                                                {date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}
                                                .{date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}
                                                .{date.getFullYear()} -
                                                {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}
                                                :{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>


                {/* Announcements */}
                <div>
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-xl text-neutral-900 dark:text-neutral-100">
                            {t("publics.announcements_head")}
                        </h1>
                        <Link href={"#"}>
                            <Button variant={"link"}>{t("publics.link")}</Button>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        {announcements.map((item: any) => {
                            const date = new Date(item.date_created)

                            return (
                                <div
                                    key={item.id}
                                    className="border rounded-lg overflow-hidden flex text-foreground"
                                >
                                    <div className="bg-amber-500 p-6 text-secondary">
                                        <Newspaper strokeWidth={1.5} size={28} />
                                    </div>
                                    <div className="flex flex-col flex-1 gap-2 py-2 px-4">
                                        <h1 className="font-semibold text-base line-clamp-2 text-foreground">
                                            {currentLocale === "ru" ? item.title_ru : currentLocale === "en" ? item.title_en : item.title_kk}
                                        </h1>

                                        <div className="flex items-center gap-2 text-neutral-500 text-sm">
                                            <Clock size={16} strokeWidth={1.5} />
                                            <span>
                                                {date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}
                                                .{date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}
                                                .{date.getFullYear()} -
                                                {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}
                                                :{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}