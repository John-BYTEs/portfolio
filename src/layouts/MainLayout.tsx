import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function MainLayout(){
    return (
        <>
         {/* Root div controls the entire viewport  */}
        <div className="relative min-h-screen w-full overflow-hidden 
                       bg-gray-900 text-white">
            <div className="flex min-h-screen flex-col">
                <Header />
                
                {/* Flexible main content */}
                <main className="flex-1 w-full overflow-auto">
                    {/* This container prevents content from stretching too wide */}
                    <div className="mx-auto h-full w-full max-w-full 
                                  px-4 py-6 sm:px-6 sm:py-8 md:px-8 
                                  lg:max-w-screen-xl xl:max-w-screen-2xl">
                        <Outlet />
                    </div>
                </main>
                
                <Footer />
            
            </div>
         </div>
         </>
    )
}