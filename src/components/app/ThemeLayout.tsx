"use client";

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from '../generics/Header';
import Navbar from '../generics/Navbar';
import Footer from '../generics/Footer';


export default function ThemeLayout({ children, }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div id="root" className="flex flex-col min-h-screen">
                <div className="flex-1">
                    <Header />
                    <Navbar />
                    <main>{children}</main>
                </div>
                <Footer />
            </div>
            <ProgressBar
                height="3px"
                color="#2563eb"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </ThemeProvider >
    )
}