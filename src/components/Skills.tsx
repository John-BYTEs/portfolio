
export default function Skills(){
    const skills : string[] = ["Web Development", "Networking", "Graphics Design", "Hardware Installation", "Software Installation"];

    return (
        <>
            <div>
                {skills.map((skill) => (
                    <div className="flex md:inline-flex space-x-6 justify-center text-green-500 hover:text-blue-500 cursor-pointer bg-gray-950 m-2 p-2 rounded font-bold">{skill}</div>
                ))}
            </div>
        </>
    )
}