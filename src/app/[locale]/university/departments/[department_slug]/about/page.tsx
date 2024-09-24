import AboutDepartment from "@/components/app/university/departments/pages/about";


// types
type AboutPropsData = {
    params: {
        department_slug: string
    }
}


// Actions
async function getDepartmentAboutData({ department_slug, }: { department_slug: string, }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/university/departments/${department_slug}/about/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


export default async function DepartmentAbout({ params }: AboutPropsData) {
    const data = await getDepartmentAboutData(params);

    return (
        <AboutDepartment about={data.about} />
    )
}