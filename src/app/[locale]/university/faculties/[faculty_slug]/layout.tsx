import FacultyHead from "@/components/app/university/faculties/Header";
import FacultyNavbar from "@/components/app/university/faculties/Navbar";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import React from "react";


// types
type PropsData = {
    children: React.ReactNode
    params: {
        faculty_slug: string
    }
}


// Metadata
export async function generateMetadata({ params, }: PropsData): Promise<Metadata> {
    const faculty_slug = params.faculty_slug;

    const data = await fetch(
        `${process.env.BACKEND_URL}/api/main/university/faculties/${faculty_slug}/`
    ).then((res) => res.json())
    const locale = await getLocale();

    if (data.faculty) {
        const faculty = data.faculty;
        return {
            title: `${locale === "ru" ? faculty.name_ru : locale === "en" ? faculty.name_en : faculty.name_kk} - Zhanibekov university`
        }
    } else {
        return {
            title: `${locale === "ru" ? "Страница не найдена" : locale === "en" ? "Page not found" : "Бұндай бет табылмады"}`
        }
    }
}


// Actions
async function getFacultyDetailData({ faculty_slug, }: { faculty_slug: string, }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/university/faculties/${faculty_slug}/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


export default async function FacultyLayout({ children, params }: PropsData) {
    const data = await getFacultyDetailData({ faculty_slug: params.faculty_slug });
    const { faculty } = data;

    return (
        <div className="container mx-auto">
            <FacultyHead faculty={faculty} />
            <FacultyNavbar slug={params.faculty_slug} />

            <section>
                {children}
            </section>
        </div>
    )
}