import PersonalsFaculty from "@/components/app/university/faculties/pages/personals";

// types
type PersonalsPropsData = {
    params: {
        faculty_slug: string
    }
}


// Actions
async function getFacultyPersonalsData({ faculty_slug, }: { faculty_slug: string, }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/university/faculties/${faculty_slug}/personals/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


export default async function FacultyProjects({ params }: PersonalsPropsData) {
    const data = await getFacultyPersonalsData(params);

    return (
        <PersonalsFaculty personals={data.personals} />
    )
}