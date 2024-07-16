import ContentRoot from "@/components/app/content/Content";
import TopicSidebar from "@/components/app/content/Sidebar";
import { getLocale } from "next-intl/server";
import type { Metadata } from 'next';


type Props = {
    params: { slug: string, topic_slug: string, chapter_slug: string, content_slug: string },
}


// Metadata
export async function generateMetadata({ params, }: Props): Promise<Metadata> {
    const slug = params.slug;
    const topic_slug = params.topic_slug;
    const chapter_slug = params.chapter_slug;
    const content_slug = params.content_slug;

    const data = await fetch(`${process.env.BACKEND_URL}/main/${slug}/${topic_slug}/${chapter_slug}/${content_slug}/`).then((res) => res.json())
    const locale = await getLocale()
    const content = data.content

    return {
        title: `${locale === "ru" ? content.title_ru : locale === "en" ? content.title_en : content.title_kk} - Zhanibekov university`
    }
}


async function getContentData({ slug, topic_slug, chapter_slug, content_slug }: { slug: string, topic_slug: string, chapter_slug: string, content_slug: string }) {
    const res = await fetch(`${process.env.BACKEND_URL}/main/${slug}/${topic_slug}/${chapter_slug}/${content_slug}/`, { cache: 'force-cache' })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}


export default async function Content({ params }: { params: { slug: string, topic_slug: string,  chapter_slug: string, content_slug: string } }) {
    const data = await getContentData(params)
    const { content, text_contents, file_contents, chapters, contents } = data

    return (
        <div className="container mx-auto py-10 flex gap-8 items-start">
            <TopicSidebar
                topic={content.chapter.topic}
                chapters={chapters}
                contents={contents}
            />

            <ContentRoot 
                content={content} 
                textContents={text_contents}
                fileContents={file_contents}
            />
        </div>
    )
}