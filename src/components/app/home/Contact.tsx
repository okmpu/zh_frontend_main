"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import Image from "next/image"
import { Textarea } from "@/components/ui/textarea"


const FormSchema = z.object({
    full_name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    message: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})


export default function Contact() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            full_name: "",
            email: "",
            message: ""
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <div className="border-t">
            <div className="container grid gap-10 mx-auto py-10">
                <div className="max-w-xl w-full text-center mx-auto">
                    <h1 className="font-bold mb-4 text-2xl md:text-3xl lg:text-4xl text-neutral-900 dark:text-neutral-100">
                        Бізбен байланыс
                    </h1>
                    <div className="h-2 max-w-24 md:max-w-xs mx-auto bg-amber-500 my-4"></div>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias voluptas dolor quibusdam ea fuga blanditiis asperiores
                        commodi modi, perspiciatis excepturi?
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-10 lg:flex">
                    <div className="flex-1 rounded-xl bg-secondary">
                        <Image 
                            src={"/poster.png"} width={1920} height={1080} alt="Image" 
                            className="w-full"
                        />
                    </div>

                    <div className="w-full lg:max-w-lg">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                                <FormField
                                    control={form.control}
                                    name="full_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Аты-жөніңіз</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Аты Жөні" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Есіміңіз бен тегіңізді жазыңыз
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="example@gmail.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Сауалыңыз</FormLabel>
                                            <FormControl>
                                                <Textarea {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full">Жіберу</Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
