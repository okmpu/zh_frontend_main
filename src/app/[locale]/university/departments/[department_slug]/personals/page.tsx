import PersonalsDepartment from "@/components/app/university/departments/pages/personals";

// types
type PropsData = {
    params: {
        department_slug: string
    }
}


// Actions
async function getDepartmentPersonalsData({ department_slug, }: { department_slug: string, }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/university/departments/${department_slug}/personals/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


export default async function DepartmentProjects({ params }: PropsData) {
    const data = await getDepartmentPersonalsData(params);

    return (
        <PersonalsDepartment personals={data.personals} />
    )
}