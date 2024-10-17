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
        `${process.env.BACKEND_URL}/api/main/public/events/${id}/`
    ).then((res) => res.json())
    const locale = await getLocale();

    if (data.event) {
        const event = data.event;
        return {
            title: `${locale === "ru" ? event.title_ru : locale === "en" ? event.title_en : event.title_kk} - Zhanibekov university`
        }
    } else {
        return {
            title: `${locale === "ru" ? "Страница не найдена" : locale === "en" ? "Page not found" : "Бұндай бет табылмады"}`
        }
    }
}


// Actions
async function getEventDetailData({ id }: { id: string }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/public/events/${id}/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


export default async function EventDetail({ params, }: PropsData) {
    unstable_setRequestLocale(params.locale);
    const data = await getEventDetailData(params);

    if (!data) {
        notFound();
    }
    const { event, code, events } = data;

    return (
        <section>
            <div className="grid gap-8">
                <PublicDetail code={code} item={event} files={event.event_files} />

                <SimilarItems code={code} similars={events} />
            </div>
        </section>
    )
}