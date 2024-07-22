import "@/css/globals.css";
import "@/css/content.css";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '@/config';
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import ThemeLayout from "@/components/app/ThemeLayout";


const inter = Inter({ subsets: ["latin"] });

type Props = {
    children: Readonly<React.ReactNode>;
    params: { locale: string };
}


export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

async function getContextData() {
    const res = await fetch(`${process.env.BACKEND_URL}/main/categories/`)

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}


export default async function LocaleLayout({ children, params: { locale } }: Props) {
    unstable_setRequestLocale(locale);
    const messages = await getMessages();
    const data = await getContextData();

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
            </head>
            <body className={`${inter.className} text-[15px] text-neutral-500`}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeLayout data={data}>{children}</ThemeLayout>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
