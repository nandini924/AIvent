import React from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
    return (
       <>

     <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl z-20 border-b border-gray-800">
      <div className = "max-w-7xl  mx-auto px-6 py-4 flex items-center justify-between"> {/*logo */}
        <Link href={"/"} className="flex items-center">
      <Image src="/spott.png" alt="Spott logo" width={500} height={500}  className="w-full h-11"
              priority/>
              </Link>

        {/* search & lacation -Desktop Only */ }

        {/* Right side Actions */ }
        </div>  
         </nav>
        {/* Mobile Search and Location - Below Header */ }
       {/*
       Modals */}
       </>
    )
}

export default Header;