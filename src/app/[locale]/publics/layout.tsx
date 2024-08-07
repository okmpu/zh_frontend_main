import PublicSidebar from "@/components/app/publics/PublicSidebar";
import React from "react";

export default function PublicsLayout({ children, }: { children: React.ReactNode }) {


    return (
        <div className="container mx-auto py-10 flex gap-4">
            <PublicSidebar />

            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}