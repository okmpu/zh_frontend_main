import Image from "next/image";

export default function About() {
    return (
        <div className="border-t">
            <div className="container mx-auto py-10 grid gap-10">
                <div className="max-w-xl w-full text-center mx-auto">
                    <h1 className="font-bold mb-4 text-2xl md:text-3xl lg:text-4xl text-neutral-900 dark:text-neutral-100">
                        Біз жайлы
                    </h1>
                    <div className="h-2 max-w-24 md:max-w-xs mx-auto bg-amber-500 my-4"></div>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias voluptas dolor quibusdam ea fuga blanditiis asperiores
                        commodi modi, perspiciatis excepturi?
                    </span>
                </div>

                <div className="flex gap-10 flex-wrap lg:flex-nowrap">
                    <div className="max-w-xl">
                        <h1 className="text-xl font-bold text-primary">
                            Біз
                        </h1>
                        <div className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
                            earum dolores? Voluptatibus excepturi inventore porro tempora esse
                            accusamus ipsa ab labore laborum delectus corporis aspernatur, ipsam
                            totam officiis non suscipit doloribus officia deleniti? Itaque non mollitia,
                            consequatur, quam ullam explicabo aperiam enim ab eius blanditiis maiores
                            quaerat exercitationem natus voluptas fugit molestiae deserunt dicta in odit
                            fugiat nihil hic magnam quisquam. Obcaecati quo quod inventore at! Minima
                            aperiam accusantium veritatis odit voluptates ad sint. Autem laudantium
                            recusandae dolorum aliquid quae. Dolorem amet veniam asperiores et quaerat
                            in at tempora harum fugiat enim. Aut totam deserunt ad, voluptate nam est
                            nulla.
                        </div>
                    </div>

                    <div className="flex-1">
                        <Image 
                            src={"/slide-1.jpg"} width={1920} height={1080} alt="Image" 
                            className="rounded-xl"
                        />
                    </div>
                </div>

                {/* Reports */}
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <div className="border p-4 rounded-lg text-center">
                        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">6954</h1>
                        <span>Студент</span>
                    </div>
                    
                    <div className="border p-4 rounded-lg text-center">
                        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">6954</h1>
                        <span>Студент</span>
                    </div>

                    <div className="border p-4 rounded-lg text-center">
                        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">6954</h1>
                        <span>Студент</span>
                    </div>

                    <div className="border p-4 rounded-lg text-center">
                        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">6954</h1>
                        <span>Студент</span>
                    </div>

                    <div className="border p-4 rounded-lg text-center">
                        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">6954</h1>
                        <span>Студент</span>
                    </div>
                </div>
            </div>


        </div>
    )
}
