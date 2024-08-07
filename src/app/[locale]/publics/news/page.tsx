import AllNews from "@/components/app/publics/news";
import PublicSearchFilter from "@/components/app/publics/PublicSearch";
import { Metadata } from "next"
import React from "react";


export const metadata: Metadata = {
    title: 'Жаңалықтар - Zhanibekov university',
    description: 'Ө.Жәнібеков атындағы Оңтүстік Қазақстан педагогикалық университеті',
}

async function getAllNewsData() {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/public/news/`, { cache: "no-store" })

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}


export default async function News() {
    const { news } = await getAllNewsData();

    return (
        <React.Fragment>
            <PublicSearchFilter />
            <AllNews news={news} />
        </React.Fragment>
    )
}