import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Іс-шаралар - Zhanibekov university',
    description: 'Ө.Жәнібеков атындағы Оңтүстік Қазақстан педагогикалық университеті',
}

export default function Events() {
    return (
        <div className="">
            <h1 className="text-4xl font-bold text-foreground">Events</h1>
        </div>
    )
}