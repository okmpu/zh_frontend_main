import PublicsDepartment from "@/components/app/university/departments/pages/publics";


// types
type PropsData = {
    params: {
        department_slug: string
    }
}


// Actions
async function getDepartmentPublicsData({ department_slug, }: { department_slug: string, }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/university/departments/${department_slug}/publics/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


export default async function DepartmentPublics({ params }: PropsData) {
    const data = await getDepartmentPublicsData(params);
    const { news, events, announcements } = data;

    return (
        <PublicsDepartment
            news={news}
            events={events}
            announcements={announcements}
        />
    )
}