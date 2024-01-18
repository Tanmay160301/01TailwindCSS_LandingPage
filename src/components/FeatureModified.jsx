

export default function FeatureModified() {
    

    return (
        <>
                        <section id="feature">
                <div className="flex flex-col space-y-8 container mx-auto p-10 md:flex-row ">
                    {/* left item */}
                    <div className=" text-center space-y-10 md:ml-10 md:my-5 md:w-1/2">
                        <h1 className="text-4xl font-bold md:text-left md:w-64">Whats different about Manage?</h1>
                        <p className="text-center text-gray-400  md:text-left md:max-w-sm">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
                    </div>
                    {/* right item */}
                    <div className="flex flex-col space-y-6   md:w-1/2">
                        <div className="bg-orange-300 rounded-l-full flex items-center md:bg-transparent md:flex-row ">
                        <a href="#" className="px-4 py-1  h-8 text-center bg-orange-600 text-white rounded-full   hover:bg-orange-700 mr-6">01</a>
                        <h3 className="font-bold md:text-lg">Track company-wide progress</h3>
                        </div>
                        <div className="md:ml-20">
                            <p className="text-gray-400">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.</p>
                        </div>
                        <div className="bg-orange-300 rounded-l-full flex items-center md:bg-transparent md:flex-row ">
                        <a href="#" className="px-4 py-1  h-8 text-center bg-orange-600 text-white rounded-full   hover:bg-orange-700 mr-6">02</a>
                        <h3 className="font-bold md:text-lg">Advanced built-in reports</h3>
                        </div>
                        <div className="md:ml-20">
                            <p className="text-gray-400">Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                        </div>
                        <div className="bg-orange-300 rounded-l-full flex items-center md:bg-transparent md:flex-row ">
                        <a href="#" className="px-4 py-1  h-8 text-center bg-orange-600 text-white rounded-full   hover:bg-orange-700 mr-6">03</a>
                        <h3 className="font-bold md:text-lg">Everything you need in one place</h3>
                        </div>
                        <div className="md:ml-20">
                            <p className="text-gray-400">Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                        </div>



                    </div>
                </div>
            </section>
        </>
    )
}
