import FacultyHead from "@/components/app/university/faculties/Header";
import FacultyNavbar from "@/components/app/university/faculties/Navbar";
import React from "react";


// types
type PropsData = {
    children: React.ReactNode
    params: {
        faculty_slug: string
    }
}

export default function FacultyLayout({ children, params }: PropsData) {
    const { faculty_slug } = params

    return (
        <div className="container mx-auto">
            <FacultyHead />
            <FacultyNavbar slug={faculty_slug} />
            
            <section>
                {children}
            </section>
        </div>
    )
}