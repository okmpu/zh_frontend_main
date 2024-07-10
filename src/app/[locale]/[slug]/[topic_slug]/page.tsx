import TopicRoot from "@/components/app/content/Topic";
import TopicSidebar from "@/components/app/content/Sidebar";
import type { Metadata } from 'next'
import { getLocale } from "next-intl/server";

type Props = {
    params: { slug: string, topic_slug: string },
}


// Metadata
export async function generateMetadata({ params, }: Props): Promise<Metadata> {
    const slug = params.slug
    const topic_slug = params.topic_slug
    const data = await fetch(`${process.env.BACKEND_URL}/${slug}/${topic_slug}/`).then((res) => res.json())
    const locale = await getLocale()
    const topic = data.topic

    return {
        title: `${locale === "ru" ? topic.name_ru : locale === "en" ? topic.name_en : topic.name_kk} - Zhanibekov university`
    }
}

// Server action
async function getTopicData({ slug, topic_slug }: { slug: string, topic_slug: string }) {
    const res = await fetch(`${process.env.BACKEND_URL}/${slug}/${topic_slug}/`, { cache: 'force-cache' })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}


// Page
export default async function Topic({ params, }: Props) {
    const data = await getTopicData(params)
    const { topic, chapters, contents } = data

    return (
        <div className="container mx-auto py-10 flex gap-8 items-start relative">
            <TopicSidebar
                topic={topic}
                chapters={chapters}
                contents={contents}
            />

            <TopicRoot topic={topic} />
        </div>
    )
}
