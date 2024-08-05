import Link from "next/link";

export default function SimilarNews({ similarNews, }: { similarNews: any }) {
    return (
        <div className="w-full lg:max-w-sm flex flex-col gap-2">
            <h1 className="text-foreground text-xl font-bold">Осыған ұқсас жаңалықтар</h1>

            <div className="grid gap-2">
                {similarNews.map((news: any) => (
                    <Link
                        key={news.id}
                        href={`/publics/news/${news.id}`}
                        className="block p-4 rounded-lg border"
                    >
                        {news.title_kk}
                    </Link>
                ))}
            </div>

        </div>
    )
}