import ProjectsFaculty from "@/components/app/university/faculties/pages/projects";


// types
type ProjectsPropsData = {
    params: {
        faculty_slug: string
    }
}


// Actions
async function getFacultyProjectsData({ faculty_slug, }: { faculty_slug: string, }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/university/faculties/${faculty_slug}/projects/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


export default async function FacultyProjects({ params }: ProjectsPropsData) {
    const data = await getFacultyProjectsData(params);
    const { projects } = data;

    return (
        <ProjectsFaculty projects={projects} />
    )
}