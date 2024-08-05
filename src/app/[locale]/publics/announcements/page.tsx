import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Хабарлардырулар - Zhanibekov university',
    description: 'Ө.Жәнібеков атындағы Оңтүстік Қазақстан педагогикалық университеті',
}

export default function Announcements() {
    return (
        <div className="">
            <h1 className="text-4xl font-bold text-foreground">Announcements</h1>
        </div>
    )
}