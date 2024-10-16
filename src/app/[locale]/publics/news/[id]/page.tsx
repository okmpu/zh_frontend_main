import PublicDetail from "@/components/app/publics/PublicDetail"
import SimilarItems from "@/components/app/publics/SimilarItems"
import { Metadata } from "next"
import { getLocale, unstable_setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"


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
        `${process.env.BACKEND_URL}/api/main/public/news/${id}/`
    ).then((res) => res.json())
    const locale = await getLocale();

    if (data.news) {
        const news = data.news;
        return {
            title: `${locale === "ru" ? news.title_ru : locale === "en" ? news.title_en : news.title_kk} - Zhanibekov university`
        }
    } else {
        return {
            title: `${locale === "ru" ? "Страница не найдена" : locale === "en" ? "Page not found" : "Бұндай бет табылмады"}`
        }
    }
}


// Actions
async function getNewsDetailData({ id }: { id: string }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/public/news/${id}/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


// Page
export default async function NewsDetail({ params, }: PropsData) {
    unstable_setRequestLocale(params.locale);
    const data = await getNewsDetailData(params);

    if (!data) {
        notFound();
    }

    const { news, code, similar_news } = data;

    return (
        <section>
            <div className="grid gap-8">
                <PublicDetail code={code} item={news} files={news.news_files} />
                <SimilarItems code={code} similars={similar_news} />
            </div>
        </section>
    )
}
