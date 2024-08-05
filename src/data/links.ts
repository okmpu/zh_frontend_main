type Link = {
    id: number, 
    label: string,
    label_ru?: string,
    label_en?: string,
    src: string,
    dropdown?: boolean,
    subLinks?: {
        id: number, 
        label: string, 
        src: string,
    }[]
}


export const resourceLinks: Link[] = [
    {
        id: 1,
        label: "Platonus",
        label_ru: "Platonus",
        label_en: "Platonus",
        src: "https://platonus.okmpu.kz"
    },
    {
        id: 2,
        label: "eDocs",
        label_ru: "eDocs",
        label_en: "eDocs",
        src: "https://okmpu.documentolog.kz"
    },
    {
        id: 3,
        label: "KPI жүйесі",
        label_ru: "Система KPI",
        label_en: "KPI system",
        src: "https://kpi.okmpu.kz"
    },
    {
        id: 4,
        label: "Талапкер",
        label_ru: "Talapker",
        label_en: "Talapker",
        src: "https://talapker.okmpu.kz"
    },
    {
        id: 5,
        label: "Кітапхана",
        label_ru: "Библиотека",
        label_en: "Library",
        src: "https://library.okmpu.kz"
    },
]


export const footerLinks: Link[] = [
    {
        id: 1,
        label: "Басты бет",
        label_ru: "Главная",
        label_en: "Home",
        src: "/"
    },
    {
        id: 2,
        label: "Жаңалықтар",
        label_ru: "Новости",
        label_en: "News",
        src: "/publics/news"
    },
    {
        id: 3,
        label: "Хабарландырулар",
        label_ru: "Объявления",
        label_en: "Announcements",
        src: "/publics/announcements"
    },
    {
        id: 4,
        label: "Іс-шаралар",
        label_ru: "Мероприятия",
        label_en: "Events",
        src: "/publics/all-events"
    },
    {
        id: 5,
        label: "Вакансиялар",
        label_ru: "Вакансии",
        label_en: "Vacancies",
        src: "/publics/vacancies"
    },
    {
        id: 6,
        label: "Білім беру порталы",
        label_ru: "Образовательный портал",
        label_en: "Educational portal",
        src: "/educational-portal"
    },
]


export const legacyLinks: Link[] = [
    {
        id: 1,
        label: "Шарттар",
        label_ru: "Условия",
        label_en: "Сonditions",
        src: "/policy"
    },
    {
        id: 2,
        label: "Терминдер",
        label_ru: "Термины",
        label_en: "Terms",
        src: "/policy"
    },
]


export const locales: {id: number, title: string, prefix: string}[] = [
    {
        id: 1,
        title: "Қазақша",
        prefix: "kz"
    },
    {
        id: 2,
        title: "Русский",
        prefix: "ru"
    },
    {
        id: 3,
        title: "English",
        prefix: "en"
    },
]
