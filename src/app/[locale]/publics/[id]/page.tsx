import Image from "next/image"

type PropsData = {
    params: {
        id: string
    }
}

export default function PublicDetail({ params, }: PropsData) {
    return (
        <section>
            <div className="container mx-auto py-10 flex gap-10 flex-col lg:flex-row">
                <div className="flex-1 flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <Image src={"/poster.png"} width={1920} height={1080} alt="Image" 
                            className="w-full border rounded-lg"
                        />
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-neutral-900 dark:text-neutral-100">{params.id} Lorem ipsum dolor sit amet.</h1>
                    </div>

                    <div className="text-justify flex flex-col gap-2">
                        <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Natus aperiam quia, ut excepturi enim nisi fuga deleniti. Placeat 
                            saepe ipsam animi eaque rerum vitae, explicabo sint quam laboriosam 
                            perferendis sit maiores qui excepturi est corporis. Voluptatem, autem 
                            enim distinctio quasi laudantium voluptates ex adipisci harum, est totam 
                            eveniet fugit omnis aliquam blanditiis quibusdam asperiores, ipsum 
                            recusandae ea molestias! Neque totam laboriosam nemo exercitationem 
                            veniam, libero rem sunt eum debitis eaque? Unde dolor magni explicabo 
                            cupiditate ea sit deserunt, quis quo distinctio libero vitae sunt 
                            quae incidunt. Veniam saepe odit laboriosam similique eveniet minus, 
                            iste sed illum, nobis deserunt quia laborum.
                        </span>
                        <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Natus aperiam quia, ut excepturi enim nisi fuga deleniti. Placeat 
                            saepe ipsam animi eaque rerum vitae, explicabo sint quam laboriosam 
                            perferendis sit maiores qui excepturi est corporis. Voluptatem, autem 
                            enim distinctio quasi laudantium voluptates ex adipisci harum, est totam 
                            eveniet fugit omnis aliquam blanditiis quibusdam asperiores, ipsum 
                            recusandae ea molestias! Neque totam laboriosam nemo exercitationem 
                            veniam, libero rem sunt eum debitis eaque? Unde dolor magni explicabo 
                            cupiditate ea sit deserunt, quis quo distinctio libero vitae sunt 
                            quae incidunt. Veniam saepe odit laboriosam similique eveniet minus, 
                            iste sed illum, nobis deserunt quia laborum.
                        </span>
                        <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Natus aperiam quia, ut excepturi enim nisi fuga deleniti. Placeat 
                            saepe ipsam animi eaque rerum vitae, explicabo sint quam laboriosam 
                            perferendis sit maiores qui excepturi est corporis. Voluptatem, autem 
                            enim distinctio quasi laudantium voluptates ex adipisci harum, est totam 
                            eveniet fugit omnis aliquam blanditiis quibusdam asperiores, ipsum 
                            recusandae ea molestias! Neque totam laboriosam nemo exercitationem 
                            veniam, libero rem sunt eum debitis eaque? Unde dolor magni explicabo 
                            cupiditate ea sit deserunt, quis quo distinctio libero vitae sunt 
                            quae incidunt. Veniam saepe odit laboriosam similique eveniet minus, 
                            iste sed illum, nobis deserunt quia laborum.
                        </span>
                    </div>
                </div>

                <div className="w-full lg:max-w-sm flex flex-col gap-2">
                    <div className="h-28 rounded-lg bg-secondary"></div>
                    <div className="h-28 rounded-lg bg-secondary"></div>
                    <div className="h-28 rounded-lg bg-secondary"></div>
                    <div className="h-28 rounded-lg bg-secondary"></div>
                    <div className="h-28 rounded-lg bg-secondary"></div>
                    <div className="h-28 rounded-lg bg-secondary"></div>
                    <div className="h-28 rounded-lg bg-secondary"></div>
                </div>
                
            </div>
        </section>
    )
}