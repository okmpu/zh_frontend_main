import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function AcademicEducation() {
    return (
        <div className="border-t">
            <div className="container grid gap-10 mx-auto py-10">
                <div className="max-w-xl w-full text-center mx-auto">
                    <h1 className="font-bold mb-4 text-2xl md:text-3xl lg:text-4xl text-neutral-900 dark:text-neutral-100">
                        Академиялық оқыту
                    </h1>
                    <div className="h-2 max-w-24 md:max-w-xs mx-auto bg-amber-500 my-4"></div>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias voluptas dolor quibusdam ea fuga blanditiis asperiores
                        commodi modi, perspiciatis excepturi?
                    </span>
                </div>

                <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <Link 
                            href={"#"}
                            className="p-4 grid gap-4 rounded-lg border transition-all hover:bg-secondary" key={index}
                        >
                            <div className="w-36 h-36 rounded-full border overflow-hidden mx-auto">
                                <Image
                                    src={"/card.png"} width={1080} height={1080} alt="Image"
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="grid gap-4 text-center">
                                <h1 className="text-center font-semibold text-xl text-neutral-900 dark:text-neutral-100">
                                    Физика-математика
                                </h1>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link href={"#"}>
                        <Button variant={"link"}>Толығырақ қарап шығу</Button>
                    </Link>
                </div>
            </div>
        </div>

    )
}