import ContentRoot from "@/components/app/content/Content";
import TopicSidebar from "@/components/app/content/Sidebar";


async function getContentData({ slug, topic_slug, chapter_slug, content_slug }: { slug: string, topic_slug: string, chapter_slug: string, content_slug: string }) {
    const res = await fetch(`${process.env.BACKEND_URL}/${slug}/${topic_slug}/${chapter_slug}/${content_slug}/`, { cache: 'force-cache' })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}


export default async function Content({ params }: { params: { slug: string, topic_slug: string,  chapter_slug: string, content_slug: string } }) {
    const data = await getContentData(params)
    const { content, chapters, contents } = data

    return (
        <div className="container mx-auto py-10 flex gap-8 items-start">
            <TopicSidebar
                topic={content.chapter.topic}
                chapters={chapters}
                contents={contents}
            />

            <ContentRoot content={content} />
        </div>
    )
}