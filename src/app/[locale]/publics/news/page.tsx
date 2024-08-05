import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Жаңалықтар - Zhanibekov university',
    description: 'Ө.Жәнібеков атындағы Оңтүстік Қазақстан педагогикалық университеті',
}

export default function News() {
    return (
        <div className="">
            <h1 className="text-4xl font-bold text-foreground">News</h1>
        </div>
    )
}