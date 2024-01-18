

export default function Hero() {
    

    return (
        <>
            <section id="Hero-Section">
            <div className="flex container mx-auto p-6 flex-col-reverse md:flex-row  mt-10">
                {/* Left item */}
                <div className="flex flex-col space-y-10  md:w-1/2">
                    <h1 className="text-4xl font-bold text-center pl-7 md:w-1/2 md:text-left md:text-5xl ">Bring everyone Together to build Awesome Products</h1>
                    <p className="max-w-md text-center text-gray-400 md:text-left pl-7  ">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                    <div className="flex items-center justify-center md:place-content-start">
                    <a href="#" className="max-w-32 ml-7 bg-orange-600 text-white rounded-full px-4 py-3  hover:bg-orange-700 md:">Get Started</a>
                    </div>
                </div>

                {/* right item */}
                <div className=" md:w-1/2">
                    <img src="img/illustration-intro.svg" alt="" />
                </div>
            </div>
            </section>
        </>
    )
}
