"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, FolderKanban, Mail, Newspaper, Phone, Rss } from "lucide-react"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import React from "react"


export default function MainDepartment(
    {
        department,
        projects,
        personals,
        news, events, announcements
    }: {
        department: any,
        projects: any,
        personals: any,
        news: any,
        events: any,
        announcements: any
    }
) {
    const currentLocale = useLocale();
    const t = useTranslations("DepartmentPage.detail");

    return (
        <div className="my-10 flex flex-col lg:flex-row items-start gap-10">
            <div className="flex-1 flex flex-col gap-4">
                {/* News */}
                {news.length > 0 &&
                    <div className="flex-1 grid gap-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-bold text-foreground">{t("publics.news_head")}</h1>

                            <Link href={`/university/departments/${department.slug}/publics`}>
                                <Button variant={"link"} className="text-base p-0 h-auto">{t("publics.link")}</Button>
                            </Link>
                        </div>
                        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                            {news.map((item: any) => {
                                const date = new Date(item.date_created);
                                return (
                                    <div key={item.id} className="flex flex-col justify-between overflow-hidden rounded-lg border">
                                        <Image src={item.poster ? item.poster : "/poster.png"}
                                            width={1920} height={1080} alt="Image"
                                            className="w-full"
                                        />
                                        <div className="px-4 py-4 grid gap-2">
                                            <h1 className="font-semibold text-lg line-clamp-2 text-foreground">
                                                {currentLocale === "ru" ? item.title_ru : currentLocale === "en" ? item.title_en : item.title_kk}
                                            </h1>

                                            <div className="flex items-center gap-2">
                                                <Clock size={16} strokeWidth={1.5} />
                                                <span>
                                                    {date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}
                                                    .{date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}
                                                    .{date.getFullYear()} -
                                                    {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}
                                                    :{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
                                                </span>
                                            </div>

                                            <Link href={`/publics/news/${item.id}`}>
                                                <Button variant={"link"} className="text-base p-0 h-auto">{t("publics.link")}</Button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }

                {/* Projects */}
                {projects.length > 0 &&
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <h1 className="font-bold text-xl text-foreground">
                                {t("projects.head")}
                            </h1>

                            <Link href={`/university/departments/${department.slug}/projects`}>
                                <Button variant={"link"}>{t("projects.link")}</Button>
                            </Link>
                        </div>

                        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                            {projects.map((item: any) => {
                                const date = new Date(item.date_created)
                                return (
                                    <Link
                                        key={item.id}
                                        href={item.file}
                                        target="_blank"
                                        className="grid gap-2 items-center border overflow-hidden rounded-lg text-foreground transition-all hover:bg-secondary"
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
                }

                {/* Personals */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-xl text-foreground">
                            {t("personals.head")}
                        </h1>

                        <Link href={`/university/departments/${department.slug}/personals`}>
                            <Button variant={"link"}>{t("personals.link")}</Button>
                        </Link>
                    </div>

                    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
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
                                        {currentLocale === "ru" ? item.full_name_ru : currentLocale === "en" ? item.full_name_en : item.full_name_kk}
                                    </h1>
                                    <span>
                                        {currentLocale === "ru" ? item.profession_ru : currentLocale === "en" ? item.profession_en : item.profession_kk}
                                    </span>
                                </div>

                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant={"secondary"} className="w-full flex">{t("personals.link")}</Button>
                                    </DialogTrigger>
                                    <DialogContent className="flex flex-col max-w-screen-xl h-screen overflow-auto xl:h-[90%] 2xl:h-auto">
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
                                                    {currentLocale === "ru" ? item.full_name_ru : currentLocale === "en" ? item.full_name_en : item.full_name_kk}
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

            {/* ---------------------------------------------------------------------------------- */}

            {/* Publics */}
            <div className="w-full grid gap-8 lg:max-w-sm">
                {(news.length > 0 || events.length > 0) ?
                    <React.Fragment>
                        {/* Announcements */}
                        <div>
                            <div className="flex items-center justify-between">
                                <h1 className="font-bold text-xl text-foreground">
                                    {t("publics.announcements_head")}
                                </h1>
                                <Link href={`/university/departments/${department.slug}/publics`}>
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

                        {/* Events */}
                        <div>
                            <div className="flex items-center justify-between">
                                <h1 className="font-bold text-xl text-foreground">
                                    {t("publics.events_head")}
                                </h1>
                                <Link href={`/university/departments/${department.slug}/publics`}>
                                    <Button variant={"link"}>{t("publics.link")}</Button>
                                </Link>
                            </div>
                            <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
                                {events.map((item: any) => {
                                    const date = new Date(item.date_created)

                                    return (
                                        <Link
                                            key={item.id}
                                            href={`/publics/all-events/${item.id}`}
                                            className="block bg-background border rounded-lg overflow-hidden transition-all hover:bg-secondary"
                                        >
                                            <Image
                                                src={item.poster ? item.poster : "/card.png"} width={1080} height={1080} alt="Image"
                                                className="w-full"
                                            />

                                            <div className="px-4 py-4 grid gap-2">
                                                <h1 className="font-semibold text-lg line-clamp-2 text-foreground">
                                                    {currentLocale === "ru" ? item.title_ru : currentLocale === "en" ? item.title_en : item.title_kk}
                                                </h1>

                                                <div className="flex items-center gap-2 text-sm">
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
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </React.Fragment>
                    :
                    <div className="flex flex-col gap-4 items-center">
                        <Rss size={64} className="text-foreground"/>
                        <div className="text-center">
                            <h1 className="text-xl font-semibold text-foreground">{t("no-public.title")}</h1>
                            <span>{t("no-public.content")}</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}