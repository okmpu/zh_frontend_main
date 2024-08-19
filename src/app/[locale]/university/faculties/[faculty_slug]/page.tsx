import FacultyDetailMain from "@/components/app/university/faculties/pages"


// types
type PropsData = {
    params: {
        faculty_slug: string
    }
}


// Actions
async function getFacultyDetailData({ faculty_slug, }: { faculty_slug: string, }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/university/faculties/${faculty_slug}/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


// Page
export default async function FacultyDetail({ params }: PropsData) {
    const data = await getFacultyDetailData({ faculty_slug: params.faculty_slug });
    const { faculty, departments, projects, personals, news, events, announcements } = data; 

    return (
        <FacultyDetailMain
            faculty={faculty} 
            departments={departments}
            projects={projects}
            personals={personals}
            news={news}
            events={events}
            announcements={announcements}
        />
    )
}