import AchievementsDepartment from "@/components/app/university/departments/pages/achievements";


// types
type AchievementsPropsData = {
    params: {
        department_slug: string
    }
}


// Actions
async function getDepartmentAchievementsData({ department_slug, }: { department_slug: string, }) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/main/university/departments/${department_slug}/achievements/`, { cache: "no-store" })
    if (!res.ok) {
        if (res.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch data')
    }
    return res.json();
}


export default async function DepartmentAchievements({ params }: AchievementsPropsData) {
    const data = await getDepartmentAchievementsData(params);
    const { achievements } = data;

    return (
        <AchievementsDepartment achievements={achievements} />
    )
}