import React, { useState } from 'react';

const Sidebar = () => {
  const [active, setActive] = useState('dashboard');
  
  const menuItems = [
    { 
      id: 'dashboard', 
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6701fb40f0cffb06d46fe9f45d19538b7e5c50b1ec055c9531fcc8d56006902f?apiKey=b4cf0f81a72b41cca154412604e23726', 
      label: 'Dashboard' 
    },
    { 
      id: 'navigation', 
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5bc73c12c23b5f2ce43d663a432cdb138e7fd27d186a3f8063da51325b71896c?apiKey=b4cf0f81a72b41cca154412604e23726', 
      label: 'Navigation' 
    },
    { 
      id: 'analytics', 
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1afb9546ef3f86da770b29de9a552166b320313a9b3bd2c2c2fc90eb1db5f875?apiKey=b4cf0f81a72b41cca154412604e23726', 
      label: 'Analytics' 
    },
    { 
      id: 'reports', 
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ee5a98ec9eb4258830243eba1d505ce9a2cb3c12847252d7c4003d96b89151f1?apiKey=b4cf0f81a72b41cca154412604e23726', 
      label: 'Reports' 
    }
  ];

  const bottomItems = [
    { 
      id: 'settings', 
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ca9106e0e61a19b9e3ac870df406b2f5a0ec57328a6707beae804d98f6f59510?apiKey=b4cf0f81a72b41cca154412604e23726', 
      label: 'Settings' 
    },
    { 
      id: 'logout', 
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3af9d3cc650365e18ea3a83d16924b340f3ec4e3673ab748600fa1258f710f3a?apiKey=b4cf0f81a72b41cca154412604e23726', 
      label: 'Logout' 
    }
  ];

  return (
    <div className="w-20 h-screen bg-white shadow-md flex flex-col">
      {/* Logo Area */}
      <div className="flex justify-center mb-6">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6216f119d13e44f992e2dc0ab74ddcbc10fb192379a5d6a7789d01cc8f69bb28?apiKey=b4cf0f81a72b41cca154412604e23726"
          alt="Logo"
          className="w-12 h-auto"
        />
      </div>
      {/* Main Navigation Items */}
      <div className="flex-grow">
        {menuItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`w-full p-4 flex flex-col items-center group 
              ${active === item.id ? 'text-blue-600' : 'text-gray-600'}
              hover:bg-gray-100 transition-colors`}
          >
            <img 
              src={item.icon} 
              alt={item.label} 
              className={`w-6 h-6 mb-2 
                ${active === item.id ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`} 
            />
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Bottom Navigation Items */}
      <div className="border-t">
        {bottomItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`w-full p-4 flex flex-col items-center group 
              ${active === item.id ? 'text-blue-600' : 'text-gray-600'}
              hover:bg-gray-100 transition-colors`}
          >
            <img 
              src={item.icon} 
              alt={item.label} 
              className={`w-6 h-6 mb-2 
                ${active === item.id ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`} 
            />
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="text-xs text-center text-gray-400 p-2">
        © 2024 Sidebar App
      </div>
    </div>
  );
};

export default Sidebar;