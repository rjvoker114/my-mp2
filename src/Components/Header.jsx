import React, { useState, useEffect } from 'react';
import logo from "./../assets/Images/logo.png";
import { HiSearch, HiMenu } from 'react-icons/hi';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
   
    const fetchGames = async () => {
      try {
        if (searchTerm.trim() === '') {
          setSearchResults([]);
          return;
        }

        const response = await fetch(`https://api.rawg.io/api/games?key=d05656c2efc84e5ea5284b7e5c6fed40&search=${searchTerm}`);
        const data = await response.json();
        
        if (data.results) {
          setSearchResults(data.results);
        }
      } catch (failed) {
        console.failed('Error fetching data:', failed);
      }
    };

    
    fetchGames();
  }, [searchTerm]);

  return (
    <nav className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 sticky top-0  ">
      <div className="container m-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl font-semibold"> 
            <a href="/"><img src={logo} width={100} height={100} alt="" /></a>
          </div>
          <div className="hidden lg:flex space-x-8">
            <a href="#" className="text-white hover:text-gray-700 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">Home</a>
            <a href="#" className="text-white hover:text-gray-700 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">Authors</a>
            <a href="#" className="text-white hover:text-gray-700 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">News</a>
            <a href="#" className="text-white hover:text-gray-700 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">Blog</a>
            <div className='flex bg-slate-200 p-auto items-center rounded-md '>
              <HiSearch className='text-gray-700 ml-2' /> 
              <input
                type='text'
                placeholder='Search Games Here'
                className='bg-transparent outline-none font-bold'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
                onClick={() => {
                  
                }}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="lg:hidden">
            <HiMenu
              className="text-white text-2xl cursor-pointer"
              onClick={toggleMenu}
            /> 
          </div>
        </div>
      </div>

    
      <div className="absolute bg-white mt-2 w-full z-50 bg-gradient-to-r
       from-indigo-500 via-purple-500 to-pink-500 text-white p-4 ">
        {searchResults.map((game) => (
          <div key={game.id} className="p-2 hover:bg-gray-200 cursor-pointer">
            {game.name}
          </div>
        ))}
      </div>

      {menuOpen && (
        <div className="lg:hidden">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 ">
            <a href="#" className="block py-2 text-white hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">Home</a>
            <a href="#" className="block py-2 text-white hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">Authors</a>
            <a href="#" className="block py-2 text-white hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">News</a>
            <a href="#" className="block py-2 text-white hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">Blog</a>
            <div className='flex bg-slate-200 p-auto items-center rounded-md '>
            <div>
            <HiSearch className='text-gray-500 ml-2 ' /> 
              <button className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                Submit
              </button>
            </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
