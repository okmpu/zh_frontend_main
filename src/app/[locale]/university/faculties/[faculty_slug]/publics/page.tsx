import PublicsFaculty from "@/components/app/university/faculties/pages/publics";


// types
type PropsData = {
    params: {
        faculty_slug: string
    }
}


// Actions
async function getFacultyPublicsData({ faculty_slug, }: { faculty_slug: string, }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/university/faculties/${faculty_slug}/publics/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


export default async function FacultyPublics({ params }: PropsData) {
    const data = await getFacultyPublicsData(params);
    const { news, events, announcements } = data;

    return (
        <PublicsFaculty 
            news={news}
            events={events}
            announcements={announcements}
        />
    )
}