import ProjectsDepartment from "@/components/app/university/departments/pages/projects";

// types
type ProjectsPropsData = {
    params: {
        department_slug: string
    }
}


// Actions
async function getDepartmentProjectsData({ department_slug, }: { department_slug: string, }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/university/departments/${department_slug}/projects/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


export default async function DepartmentProjects({ params }: ProjectsPropsData) {
    const data = await getDepartmentProjectsData(params);
    const { projects } = data;

    return (
        <ProjectsDepartment projects={projects} />
    )
}