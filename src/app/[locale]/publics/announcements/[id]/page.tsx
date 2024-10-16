import PublicDetail from "@/components/app/publics/PublicDetail";
import SimilarItems from "@/components/app/publics/SimilarItems";
import { Metadata } from "next";
import { getLocale, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";


type PropsData = {
    params: {
        id: string,
        locale: string
    }
}

// Metadata
export async function generateMetadata({ params, }: PropsData): Promise<Metadata> {
    const id = params.id;

    const data = await fetch(
        `${process.env.BACKEND_URL}/api/main/public/announcements/${id}/`
    ).then((res) => res.json())
    const locale = await getLocale();

    if (data.announcement) {
        const announcement = data.announcement;
        return {
            title: `${locale === "ru" ? announcement.title_ru : locale === "en" ? announcement.title_en : announcement.title_kk} - Zhanibekov university`
        }
    } else {
        return {
            title: `${locale === "ru" ? "Страница не найдена" : locale === "en" ? "Page not found" : "Бұндай бет табылмады"}`
        }
    }
}


// Actions
async function getAnnouncementDetailData({ id }: { id: string }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/public/announcements/${id}/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


// Page
export default async function AnnouncementDetail({ params, }: PropsData) {
    unstable_setRequestLocale(params.locale);
    const data = await getAnnouncementDetailData(params);

    if (!data) {
        notFound();
    }
    const { announcement, code, announcements } = data;

    return (
        <section>
            <div className="grid gap-8">
                <PublicDetail code={code} item={announcement} files={announcement.announcement_files} />
                <SimilarItems code={code} similars={announcements} />
            </div>
        </section>
    )
}