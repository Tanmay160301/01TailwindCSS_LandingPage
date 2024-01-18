

export default function Testimonials() {
    

    return (
        <>
            <section id="Testimonials" className="mx-40">
                <div className="container mx-auto p-6 space-y-12 flex flex-col">
                    {/* Title */}
                    <h1 className="text-4xl font-bold  text-center mb-10">Whats Different about Manage?</h1>
                    {/* Testinomials */}
                    <div className="flex flex-col text-center  md:flex-row md:space-x-6 ">
                    <div className="pb-16 mt-14 mb-14 bg-gray-100 space-y-6 md:w-1/3 rounded-lg">
                        <div className=" flex justify-center -mt-12">
                            <img src="./img/avatar-anisha.png" className="h-20" alt="" />
                            </div>
                            <h1 className="font-bold text-xl">Anisha Li</h1>
                            <p className="text-sm text-gray-400">“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                        </div>
                        <div className="pb-16 mt-14 mb-14 bg-gray-100 space-y-6 md:w-1/3 rounded-lg">
                        <div className=" flex justify-center -mt-12">
                            <img src="./img/avatar-ali.png" className="h-20" alt="" />
                            </div>
                            <h1 className="font-bold text-xl">Ali Bravo</h1>
                            <p className="text-sm text-gray-400">“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
                        </div>
                        <div className="pb-16 mt-14 mb-14 bg-gray-100 space-y-6 md:w-1/3 rounded-lg">
                        <div className=" flex justify-center -mt-12">
                            <img src="./img/avatar-richard.png" className="h-20" alt="" />
                            </div>
                            <h1 className="font-bold text-xl">Richard Watts</h1>
                            <p className="text-sm text-gray-400">“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                        </div>
                    </div>
                    {/* Button */}
                    <div className="flex justify-center">
                    <a href="#" className="max-w-32 ml-7 bg-orange-600 text-white rounded-full px-4 py-3  hover:bg-orange-700 md:">Get Started</a>

                    </div>

                </div>
            </section>
        </>
    )
}
