"use client";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from '../generics/Header';
import Navbar from '../generics/Navbar';
import Footer from '../generics/Footer';


export default function ThemeLayout({ children, data }: { children: React.ReactNode, data: any }) {
    const { categories, academics } = data;
    
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div id="root" className="flex flex-col min-h-screen">
                <div className="flex-1">
                    <Header categories={categories} />
                    <Navbar categories={categories} />
                    <main>{children}</main>
                </div>
                <Footer academics={academics} />
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