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
        label: "Білім беру порталы",
        label_ru: "Образовательный портал",
        label_en: "Educational portal",
        src: "/learn"
    },
]


export const facultiesLinks: Link[] = [
    {
        id: 1,
        label: "Физика-математика",
        src: "/products"
    },
    {
        id: 2,
        label: "Жаратылыстану",
        src: "/products"
    },
    {
        id: 3,
        label: "Филология",
        src: "/products"
    },
    {
        id: 4,
        label: "Тарих және педагогика",
        src: "/products"
    },
    {
        id: 5,
        label: "Өнер және білім факультеті",
        src: "/products"
    },
    {
        id: 6,
        label: "Дене шынықтыру және спорт",
        src: "/products"
    },
]


export const resourceLinks: Link[] = [
    {
        id: 1,
        label: "eDocs",
        label_ru: "eDocs",
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
