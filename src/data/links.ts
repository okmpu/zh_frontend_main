type Link = {
    id: number, 
    label: string, 
    src: string,
    dropdown?: boolean,
    subLinks?: {
        id: number, 
        label: string, 
        src: string,
    }[]
}

export const navLinks: Link[] = [
    {
        id: 1,
        label: "Басты бет",
        src: "/",
        dropdown: false,
    },
    {
        id: 2,
        label: "Біз туралы",
        src: "/products",
        dropdown: true,
        subLinks: [
            {
                id: 1,
                label: "Университет тарихы",
                src: "/products",
            },
            {
                id: 2,
                label: "Корпоративті басқарма",
                src: "/products",
            },
            {
                id: 3,
                label: "Әкімшілік",
                src: "/products",
            },
            {
                id: 4,
                label: "Ғылыми кеңес",
                src: "/products",
            },
            {
                id: 5,
                label: "Ғылыми кеңес",
                src: "/products",
            },
            {
                id: 6,
                label: "Стратегиялық жоспар",
                src: "/products",
            },
            {
                id: 7,
                label: "Университет миссиясы",
                src: "/products",
            },
            {
                id: 8,
                label: "Нормативтік база",
                src: "/products",
            },
            {
                id: 9,
                label: "Ө.Жәнібеков атындағы ОҚПУ сандармен",
                src: "/products",
            },
            {
                id: 10,
                label: "Есептер",
                src: "/products",
            },
            {
                id: 11,
                label: "Құрылымдық бөлімдер",
                src: "/products",
            },
            {
                id: 12,
                label: "Аккредитация және институционалдық баға",
                src: "/products",
            },
            {
                id: 13,
                label: "Кәсіподақ",
                src: "/products",
            },
            {
                id: 14,
                label: "Ваканциялар",
                src: "/products",
            },
            {
                id: 15,
                label: "Ө.Жәнібеков атындағы ОҚПУ ережелері",
                src: "/products",
            },
        ]
    },
    {
        id: 3,
        label: "Оқу",
        src: "/products",
        dropdown: true,
        subLinks: [
            {
                id: 1,
                label: "Тарихы",
                src: "/products",
            },
            {
                id: 2,
                label: "Корпоративті басқарма",
                src: "/products",
            },
            {
                id: 3,
                label: "Әкімшілік",
                src: "/products",
            },
            {
                id: 4,
                label: "Ғылыми кеңес",
                src: "/products",
            },
        ]
    },
    {
        id: 4,
        label: "Ғылым",
        src: "/products",
        dropdown: true,
        subLinks: [
            {
                id: 1,
                label: "Тарихы",
                src: "/products",
            },
            {
                id: 2,
                label: "Корпоративті басқарма",
                src: "/products",
            },
            {
                id: 3,
                label: "Әкімшілік",
                src: "/products",
            },
            {
                id: 4,
                label: "Ғылыми кеңес",
                src: "/products",
            },
        ]
    },
    {
        id: 5,
        label: "Білім алушыға",
        src: "/products",
        dropdown: true,
        subLinks: [
            {
                id: 1,
                label: "Тарихы",
                src: "/products",
            },
            {
                id: 2,
                label: "Корпоративті басқарма",
                src: "/products",
            },
            {
                id: 3,
                label: "Әкімшілік",
                src: "/products",
            },
            {
                id: 4,
                label: "Ғылыми кеңес",
                src: "/products",
            },
        ]
    },
    {
        id: 6,
        label: "Тәрбие және жастар саясаты",
        src: "/products",
        dropdown: true,
        subLinks: [
            {
                id: 1,
                label: "Тарихы",
                src: "/products",
            },
            {
                id: 2,
                label: "Корпоративті басқарма",
                src: "/products",
            },
            {
                id: 3,
                label: "Әкімшілік",
                src: "/products",
            },
            {
                id: 4,
                label: "Ғылыми кеңес",
                src: "/products",
            },
        ]
    },
    {
        id: 7,
        label: "Білім беру порталы",
        src: "/products",
        dropdown: false
    },
]

export const footerLinks: Link[] = [
    {
        id: 1,
        label: "Оқу",
        src: "/products"
    },
    {
        id: 2,
        label: "Ғылым",
        src: "/products"
    },
    {
        id: 3,
        label: "Білім алушыға",
        src: "/products"
    },
    {
        id: 4,
        label: "Тәрбие және жастар саясаты",
        src: "/products"
    },
    {
        id: 5,
        label: "Білім беру порталы",
        src: "/products"
    },
]

export const resourceLinks: Link[] = [
    {
        id: 1,
        label: "Platonus",
        src: "https://platonus.okmpu.kz"
    },
    {
        id: 2,
        label: "eDocs",
        src: "https://okmpu.documentolog.kz"
    },
    {
        id: 3,
        label: "KPI жүйесі",
        src: "https://kpi.okmpu.kz"
    },
    {
        id: 4,
        label: "Талапкер",
        src: "https://talapker.okmpu.kz"
    },
    {
        id: 5,
        label: "Кітапхана",
        src: "https://library.okmpu.kz"
    },
]


export const legacyLinks: Link[] = [
    {
        id: 1,
        label: "Шарттар",
        src: "/products"
    },
    {
        id: 2,
        label: "Терминдер",
        src: "/products"
    },
]


export const aboutLinks: Link[] = [
    {
        id: 1,
        label: "Құрылым",
        src: "/products"
    },
    {
        id: 2,
        label: "Әкімшілік",
        src: "/products"
    },
    {
        id: 3,
        label: "Корпоративті басқарма",
        src: "/products"
    },
    {
        id: 4,
        label: "Ваканциялар",
        src: "/products"
    },
    {
        id: 5,
        label: "Толығырақ",
        src: "/products"
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
