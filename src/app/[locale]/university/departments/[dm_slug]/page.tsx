type Props = {
    params: {
        locale: string,
        dm_slug: string
    }
}

export default function DepartmentDetail({ params, }: Props) {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-4xl font-bold text-foreground">{params.dm_slug}</h1>
        </div>
    )
}
