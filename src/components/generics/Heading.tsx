export default function Heading({ children, sizeClass }: {children: any, sizeClass: string}) {
    return (
        <h1 
            className={`text-neutral-900 dark:text-neutral-100 font-bold ${sizeClass}`}
        >{children}</h1>
    )
}
