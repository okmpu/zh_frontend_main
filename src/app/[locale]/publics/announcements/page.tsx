import AllAnnouncements from "@/components/app/publics/announcements/AllAnnouncements"
import PublicsFilter from "@/components/app/publics/Filters";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Хабарлардырулар - Zhanibekov university',
    description: 'Ө.Жәнібеков атындағы Оңтүстік Қазақстан педагогикалық университеті',
}


async function getAllAnnouncementsData() {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/public/announcements/`, { cache: "no-store" })

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}


export default async function Announcements() {
    const { announcements } = await getAllAnnouncementsData();
    
    return (
        <div className="">
            <PublicsFilter />
            <AllAnnouncements announcements={announcements} />
        </div>
    )
}