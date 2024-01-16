// import React from 'react'

export default function Header() {
    

    return (
        <>
            <nav className='relative container mx-auto p-6'>
      {/* flex container */}
    <div className='flex items-center justify-between font-semibold'>
      {/* Logo */}
      <div className='pt-3'>
        <img src="img/logo.svg" alt="" />
      </div>
      {/* menus */}
      <div className='hidden md:flex  space-x-6 '>
      <a href="#" className='hover:text-orange-600'>Home</a>
      <a href="#" className='hover:text-orange-600'>Products</a>
      <a href="#" className='hover:text-orange-600'>Pricing</a>
      <a href="#" className='hover:text-orange-600'>Careers</a>
      <a href="#" className='hover:text-orange-600'>Community</a>
      </div>
      {/* Buttons */}
      <a href="#" className="hidden md:block bg-orange-600 text-white rounded-full px-4 py-3  hover:bg-orange-700">Get Started</a>
    </div>
    </nav>

        </>
    )
}
