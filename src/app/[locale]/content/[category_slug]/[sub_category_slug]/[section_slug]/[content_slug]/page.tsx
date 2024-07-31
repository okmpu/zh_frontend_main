import ContentBody from "@/components/app/content/Content";
import SidebarSheet from "@/components/app/content/Sheet";
import ContentSidebar from "@/components/app/content/Sidebar";
import { Metadata } from "next";
import { getLocale, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from 'next/navigation';


// Types
type PropsData = {
    params: {
        category_slug: string,
        sub_category_slug: string,
        section_slug: string,
        content_slug: string,
        locale: string
    },
}


// Metadata
export async function generateMetadata({ params, }: PropsData): Promise<Metadata> {
    const category_slug = params.category_slug;
    const sub_category_slug = params.sub_category_slug;
    const section_slug = params.section_slug;
    const content_slug = params.content_slug;

    const data = await fetch(
        `${process.env.BACKEND_URL}/api/main/content/${category_slug}/${sub_category_slug}/${section_slug}/${content_slug}/`
    ).then((res) => res.json())
    const locale = await getLocale();

    if (data.content) {
        const content = data.content;
        return {
            title: `${locale === "ru" ? content.title_ru : locale === "en" ? content.title_en : content.title_kk} - Zhanibekov university`
        }
    } else {
        return {
            title: `${locale === "ru" ? "Страница не найдена" : locale === "en" ? "Page not found" : "Бұндай бет табылмады"}`
        }
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
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/content/${category_slug}/${sub_category_slug}/${section_slug}/${content_slug}/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


// Page
export default async function ContentDetail({ params }: PropsData) {
    unstable_setRequestLocale(params.locale);
    const data = await getContentData(params);

    if (!data) {
        notFound();
    }

    const {
        content,
        category,
        sub_category,
        section,

        sub_categories,
        contents,

    } = data;

    return (
        <div>
            <div className="block lg:hidden sticky top-20">
                <SidebarSheet
                    category={category}
                    sub_categories={sub_categories}
                    contents={contents}
                />
            </div>
            <div className="container mx-auto py-10 flex gap-8 items-start">
                <ContentSidebar
                    category={category}
                    sub_categories={sub_categories}
                    contents={contents}
                />

                <ContentBody
                    content={content}
                    category={category}
                    section={section}
                    sub_category={sub_category}
                />
            </div>
        </div>
    )
}