import ContentRoot from "@/components/app/content/Content";
import ContentSidebar from "@/components/app/content/Sidebar";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

type Props = {
    params: {
        category_slug: string,
        sub_category_slug: string,
        section_slug: string,
        content_slug: string
    },
}

// Metadata
export async function generateMetadata({ params, }: Props): Promise<Metadata> {
    const category_slug = params.category_slug;
    const sub_category_slug = params.sub_category_slug;
    const section_slug = params.section_slug;
    const content_slug = params.content_slug;

    const data = await fetch(
        `${process.env.BACKEND_URL}/main/content/${category_slug}/${sub_category_slug}/${section_slug}/${content_slug}/`
    ).then((res) => res.json())
    const locale = await getLocale();
    const content = data.content;

    return {
        title: `${locale === "ru" ? content.title_ru : locale === "en" ? content.title_en : content.title_kk} - Zhanibekov university`
    }
}


// Actions
async function getContentData({
    category_slug,
    sub_category_slug,
    section_slug,
    content_slug
}: {
    category_slug: string,
    sub_category_slug: string,
    section_slug: string,
    content_slug: string
}) {
    const res = await fetch(
        `${process.env.BACKEND_URL}/main/content/${category_slug}/${sub_category_slug}/${section_slug}/${content_slug}/`
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}


// Page
export default async function ContentDetail({ params }: Props) {
    const data = await getContentData(params)
    const { 
        content, 
        text_contents,

        category, 
        sub_category, 
        section, 
        sub_categories, 
        contents 
    } = data;
    
    return (
        <div className="container mx-auto py-10 flex gap-8 items-start">
            <ContentSidebar
                category={category}
                sub_categories={sub_categories}
                contents={contents}
            />

            <ContentRoot 
                content={content}
                textContents={text_contents}

                category={category} 
                sub_category={sub_category} 
                section={section} 
            />
        </div>
    )
}