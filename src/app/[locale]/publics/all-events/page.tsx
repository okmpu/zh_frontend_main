import AllEvents from "@/components/app/publics/all-events";
import PublicsFilter from "@/components/app/publics/Filters";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Іс-шаралар - Zhanibekov university',
    description: 'Ө.Жәнібеков атындағы Оңтүстік Қазақстан педагогикалық университеті',
}


async function getAllEvensData() {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/public/events/`, { cache: "no-store" })

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}


export default async function Events() {
    const { events } = await getAllEvensData();

    return (
        <div className="">
            <PublicsFilter />
            <AllEvents events={events} />
        </div>
    )
}