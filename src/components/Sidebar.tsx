import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Library, PlusCircle, Heart } from 'lucide-react';
import { useAppContext } from '../context/AppProvider';

const Sidebar = () => {
  const { playlists } = useAppContext();

  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    `flex items-center gap-3 py-3 px-5 text-gray-400 hover:text-white transition-colors ${
      isActive ? 'text-white' : ''
    }`;

  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 overflow-hidden bg-black">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-2xl font-bold text-white">Spotify</span>
        </div>

        <nav className="mb-6">
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className={navLinkClass}>
                <Home size={24} />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" className={navLinkClass}>
                <Search size={24} />
                <span>Search</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/library" className={navLinkClass}>
                <Library size={24} />
                <span>Your Library</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="pt-6 space-y-4">
          <button className="flex items-center gap-3 py-2 px-4 text-gray-400 hover:text-white transition-colors w-full text-left bg-spotify-darkgray rounded-md">
            <PlusCircle size={20} />
            <span>Create Playlist</span>
          </button>
          <button className="flex items-center gap-3 py-2 px-4 text-gray-400 hover:text-white transition-colors w-full text-left bg-spotify-darkgray rounded-md">
            <Heart size={20} />
            <span>Liked Songs</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-4 border-t border-spotify-lightgray mt-4">
        <ul className="space-y-1">
          {playlists.map((playlist) => (
            <li key={playlist.id}>
              <NavLink 
                to={`/playlist/${playlist.id}`} 
                className={({ isActive }) => 
                  `block py-2 px-3 rounded text-sm ${
                    isActive ? 'text-white bg-spotify-lightgray' : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                {playlist.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;