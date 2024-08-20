import DepartmentHead from "@/components/app/university/departments/Header";
import DepartmentNavbar from "@/components/app/university/departments/Navbar";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import React from "react";


// types
type PropsData = {
    children: React.ReactNode
    params: {
        department_slug: string
    }
}


// Metadata
export async function generateMetadata({ params, }: PropsData): Promise<Metadata> {
    const department_slug = params.department_slug;

    const data = await fetch(
        `${process.env.BACKEND_URL}/api/main/university/departments/${department_slug}/`
    ).then((res) => res.json())
    const locale = await getLocale();

    if (data.department) {
        const department = data.department;
        return {
            title: `${locale === "ru" ? department.name_ru : locale === "en" ? department.name_en : department.name_kk} - Zhanibekov university`
        }
    } else {
        return {
            title: `${locale === "ru" ? "Страница не найдена" : locale === "en" ? "Page not found" : "Бұндай бет табылмады"}`
        }
    }
}


// Actions
async function getDepartmentDetailData({ department_slug, }: { department_slug: string, }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/university/departments/${department_slug}/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


export default async function DepartmentLayout({ children, params }: PropsData) {
    const data = await getDepartmentDetailData(params);
    const { department } = data;

    return (
        <div className="container mx-auto">
            <DepartmentHead department={department} />
            <DepartmentNavbar slug={params.department_slug} />
            
            <section>
                {children}
            </section>
        </div>
    )
}