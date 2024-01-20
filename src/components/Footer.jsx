export default function Footer() {
  return (
    <>
      <footer id="footer" className="bg-gray-800 flex justify-center">
        <div className="container  h-[200px] w-[1400px]  p-6 flex flex-col justify-evenly items-center space-y-8 md:flex-row md:space-x-20" >
          {/* Images and Logos */}
          <div className=" w-1/3 space-y-12 flex flex-col items-start   md:order-0">
            <img src="img/logo-white.svg" width={195}  alt="" />
            <div className="flex space-x-3">
              <img src="img/icon-facebook.svg" alt="" />
              <img src="img/icon-youtube.svg" alt="" />
              <img src="img/icon-twitter.svg" alt="" />
              <img src="img/icon-pinterest.svg" alt="" />
              <img src="img/icon-instagram.svg" alt="" />
            </div>
          </div>

          {/* nav links */}
          <div className="w-1/3 flex justify-between text-white">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-orange-500">
                Home
              </a>
              <a href="#" className="hover:text-orange-500">
                Pricing
              </a>
              <a href="#" className="hover:text-orange-500">
                Products
              </a>
              <a href="#" className="hover:text-orange-500">
                About
              </a>
            </div>
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-orange-500">
                Careers
              </a>
              <a href="#" className="hover:text-orange-500">
                Community
              </a>
              <a href="#" className="hover:text-orange-500">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* input tags */}
          <form action="" className="order-3 space-y-20">
            <div className="flex justify-center space-x-3">
              <input
                type="text"
                placeholder="Updated in your inbox"
                name=""
                id=""
                className="rounded-full pl-2 w-[300px] h-[40px] md:w-[200px]"
              />
              <a
                href="#"
                className="max-w-32 ml-7 bg-orange-600 text-white rounded-full px-5 py-2  hover:bg-orange-700 md:"
              >
                Go
              </a>
            </div>
            {/* Copyright */}
            <div className="mt-5 text-white text-center">
              Copyright &copy; 2024, All Rights Reserved
            </div>
          </form>

          {/* Copyright */}
          <div className="hidden text-white text-center">
            Copyright &copy; 2024, All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}
