type CardProps = {
    title: string
    children: React.ReactNode
}

export const Card = ({ title, children }:CardProps) => (
    <article className="rounded-md border border-foreground/15 bg-surface p-4 text-foreground">
        <h2 className="font-semibold">{title}</h2>
        <div>{children}</div>
    </article>
)