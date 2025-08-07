
type CardProps = {
    title? : string;
    content?: string;
    children? : React.ReactNode;
}

export default function Card({title, content, children} : CardProps) {
    return (
        <>
            <section className="md:w-full rounded shadow-xl p-5 bg-gray-900">
              <h1 className="text-white  font-extrabold text-start pl-2">{title}</h1>
              <p className="text-white text-xs md:text-sm pt-3">{content}</p>
              {children && <div className="flex justify-center">{children}</div>}
            </section>
        </>
    )
}