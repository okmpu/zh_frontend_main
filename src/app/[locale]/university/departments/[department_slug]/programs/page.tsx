import ProgramsDepartment from "@/components/app/university/departments/pages/programs";


// types
type PropsData = {
    params: {
        department_slug: string
    }
}


// Actions
async function getDepartmentProgramsData({ department_slug, }: { department_slug: string, }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/university/departments/${department_slug}/programs/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


// Page
export default async function DepartmentPrograms({ params, }: PropsData) {
    const data = await getDepartmentProgramsData(params);
    const { programs } = data;

    return (
        <ProgramsDepartment programs={programs} />
    )
}