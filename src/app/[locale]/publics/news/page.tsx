import AllNews from "@/components/app/publics/news";
import { Metadata } from "next"
import PublicsFilter from "@/components/app/publics/Filters";


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
        <div>
            <PublicsFilter />
            <AllNews news={news} />
        </div>
    )
}