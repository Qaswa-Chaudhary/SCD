import React from "react";

export default function Page() {
  return (
    <div className="flex justify-center w-full">
    
      <div className="w-20 bg-red-600"></div>

      <div className="w-4/5">
        <header className="h-30 bg-cyan-400 flex items-center justify-center text-white text-2xl font-bold">
          ONLINE SHOPPING BANNER
        </header>

        <nav className="bg-black p-2.5">
          <a href="#" className="text-white mr-5 text-sm hover:underline">Home</a>
          <a href="#" className="text-white mr-5 text-sm hover:underline">About Us</a>
          <a href="#" className="text-white mr-5 text-sm hover:underline">Products</a>
          <a href="#" className="text-white text-sm hover:underline">Contact Us</a>
        </nav>

        <div className="flex min-h-500px]">
          <aside className="w-[30%] h-120 bg-green-600 text-white p-2.5">
            Left Sidebar
          </aside>

          <main className="w-[70%] bg-orange-500 p-2.5">
            Main Content Area
          </main>
        </div>

        <footer className="h-12 bg-blue-700 text-white flex items-center pl-2.5">
          Footer Section
        </footer>
      </div>

      <div className="w-20 bg-red-600"></div>
    </div>
  )
}



