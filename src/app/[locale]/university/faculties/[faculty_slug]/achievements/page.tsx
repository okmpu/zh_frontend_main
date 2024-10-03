import ProjectsFaculty from "@/components/app/university/faculties/pages/projects";


// types
type AchievementsPropsData = {
    params: {
        faculty_slug: string
    }
}


// Actions
async function getFacultyAchievementsData({ faculty_slug, }: { faculty_slug: string, }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/university/faculties/${faculty_slug}/achievements/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


export default async function FacultyAchievements({ params }: AchievementsPropsData) {
    const data = await getFacultyAchievementsData(params);
    const { achievements } = data;

    return (
        <>
            <h1>Achievements</h1>
        </>
    )
}