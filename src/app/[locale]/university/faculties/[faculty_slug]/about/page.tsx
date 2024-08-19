import AboutFaculty from "@/components/app/university/faculties/pages/about";


// types
type PropsData = {
    params: {
        faculty_slug: string
    }
}


// Actions
async function getFacultyAboutData({ faculty_slug, }: { faculty_slug: string, }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/university/faculties/${faculty_slug}/about/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


export default async function FacultyAbout({ params }: PropsData) {
    const data = await getFacultyAboutData(params);

    return (
        <AboutFaculty about={data.about} />
    )
}