import MainDepartment from "@/components/app/university/departments/pages"


// types
type PropsData = {
    params: {
        department_slug: string
    }
}


// Actions
async function getFacultyDetailData({ department_slug, }: { department_slug: string, }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/university/departments/${department_slug}/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


// Page
export default async function DepartmentDetail({ params }: PropsData) {
    const data = await getFacultyDetailData(params);
    const { department, projects, personals, news, events, announcements } = data; 

    return (
        <MainDepartment
            department={department}
            projects={projects}
            personals={personals}
            news={news}
            events={events}
            announcements={announcements}
        />
    )
}