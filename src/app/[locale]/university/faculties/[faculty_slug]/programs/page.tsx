import ProgramFacultyDetail from "@/components/app/university/faculties/pages/programs";


// types
type PropsData = {
    params: {
        faculty_slug: string
    }
}


// Actions
async function getFacultyProgramsData({ faculty_slug, }: { faculty_slug: string, }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/university/faculties/${faculty_slug}/programs/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


// Page
export default async function FacultyPrograms({ params, }: PropsData) {
    const data = await getFacultyProgramsData(params);
    const { programs } = data;

    return (
        <ProgramFacultyDetail programs={programs} />
    )
}