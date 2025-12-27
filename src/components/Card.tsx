
type CardProps = {
    title? : string;
    content?: string;
    children? : React.ReactNode;
}

export default function Card({title, content, children} : CardProps) {
    return (
        <>
            <section className="md:w-full rounded shadow-xl p-5 bg-gray-600 text-start">
              <h1 className="text-white text-2xl  font-extrabold">{title}</h1>
              <p className="text-gray-300 text-sm md:text-md lg:text-lg pt-3 font-sans">{content}</p>
              {children && <div>{children}</div>}
            </section>
        </>
    )
}