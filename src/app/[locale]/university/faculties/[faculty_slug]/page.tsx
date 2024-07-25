// types
type PropsData = {
    params: {
        faculty_slug: string
    }
}


export default function FacultyDetail({ params }: PropsData) {
    return (
        <section>
            <div className="container mx-auto py-10">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-neutral-900 dark:text-neutral-100">
                    {params.faculty_slug}
                </h1>
            </div>
        </section>
    )
}