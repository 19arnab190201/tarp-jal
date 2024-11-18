import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [selectedAlert, setSelectedAlert] = useState(null);

  const statCards = [
    { 
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ef42f5eed3ee7bd7c76256caafa4919807dae94b791f072061cfcb2ebc5a85b?placeholderIfAbsent=true&apiKey=b4cf0f81a72b41cca154412604e23726", 
      title: "Total Assets", 
      value: "10,678", 
      change: 15, 
      isPositive: true,
      link: "/assets"  // Added link property
    },
    { 
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f03254f7892386cdb2df4b1541550c62f1030165a5f34a482ec2990310ec511?placeholderIfAbsent=true&apiKey=b4cf0f81a72b41cca154412604e23726", 
      title: "Total Inventory", 
      value: "24664", 
      change: 9, 
      isPositive: true 
    },
    { 
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6027bdd8b9a884fcae024728e07614e7e1c4facb6abafc16baa57210c9dcffb8?placeholderIfAbsent=true&apiKey=b4cf0f81a72b41cca154412604e23726", 
      title: "Financial Overview", 
      value: "₹ 2,60,900", 
      change: 8, 
      isPositive: false 
    }
  ];

  const alerts = [
    { severity: 'red', title: 'Critical Equipment Failure', description: 'Immediate repair or replacement of essential equipment like pumps, valves, or treatment plants.' },
    { severity: 'red', title: 'Water Contamination Alert', description: 'Immediate investigation and resolution, including isolating contaminated areas.' },
    { severity: 'sky', title: 'Water Quality Testing Due', description: 'Conduct scheduled water quality tests to ensure compliance with safety standards.' },
    { severity: 'green', title: 'Inventory Replenishment Reminder', description: 'Review and reorder non-critical inventory items that are low.' },
  ];

  return (
    <div className="flex overflow-hidden bg-white rounded-[48px]">
      <Sidebar />
      <main className="flex flex-col grow p-8">
        <header className="flex justify-between items-center mb-14">
          <h1 className="text-3xl font-medium text-black">Dashboard</h1>
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2 py-2.5 px-5 border border-slate-800 rounded-[48px] text-2xl text-stone-400">
              <span>English</span>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d574235373281dc79554c1999deac8f175233d728c23ba99691a5a8c56c8c6ca?placeholderIfAbsent=true&apiKey=b4cf0f81a72b41cca154412604e23726" alt="Language selector" className="w-5 h-5" />
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-800 text-2xl text-zinc-100 flex items-center justify-center">
              A
            </div>
          </div>
        </header>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <div className="flex flex-wrap gap-8 mb-7 animate-fade-in">
              {statCards.map((card, index) => (
                <div key={index} className="flex-1 min-w-[140px] bg-zinc-100 rounded-xl p-4">
                  <div className="w-[43px] h-[43px] bg-white rounded-3xl flex items-center justify-center mb-3">
                    <img src={card.icon} alt={`${card.title} icon`} className="w-7 h-7" />
                  </div>
                  <div className="text-lg font-medium text-stone-400">{card.title}</div>
                  {card.link ? (
                    <Link to={card.link} className="block">
                      <div className="text-2xl font-extrabold text-slate-800">{card.value}</div>
                    </Link>
                  ) : (
                    <div className="text-2xl font-extrabold text-slate-800">{card.value}</div>
                  )}
                  <div className={`inline-flex items-center gap-0.5 px-1 py-1 mt-3 text-xs font-medium rounded-2xl ${card.isPositive ? 'bg-green-500' : 'bg-rose-500'} text-zinc-100`}>
                    <img src={card.isPositive ? "https://cdn.builder.io/api/v1/image/assets/TEMP/e4239ad3527614fa85aa9d3fb1bd1669dc9ecb6c8266cc3da4ed20bdc25f49f6?placeholderIfAbsent=true&apiKey=b4cf0f81a72b41cca154412604e23726" : "https://cdn.builder.io/api/v1/image/assets/TEMP/93dfd85b6d7b2a6bb8ec632446281714cddcbb2a2f9df837ca64451dc97ba330?placeholderIfAbsent=true&apiKey=b4cf0f81a72b41cca154412604e23726"} alt={card.isPositive ? "Increase icon" : "Decrease icon"} className="w-3 h-3" />
                    <span>{card.change}%</span>
                  </div>
                </div>
              ))}
            </div>
            <section className="mt-7">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6264698cd4d0b62bf4121afae0c53d7d1df79ddf5527e2c611f0081a63029446?placeholderIfAbsent=true&apiKey=b4cf0f81a72b41cca154412604e23726"
                alt=""
                className="object-contain w-full rounded-none aspect-[2.24] max-md:max-w-full"
                loading="lazy"
              />
            </section>
          </div>
          <div className="relative">
            <MapContainer center={[10.9600, 78.1462]} zoom={14} className="h-full w-600 rounded-xl">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {alerts.map((alert, index) => (
                <Marker key={index} position={[10.9600, 78.1462]}>
                  <Popup>
                    <h3 className="text-xl font-medium text-black">{alert.title}</h3>
                    <p className="text-neutral-400 mt-1.5">{alert.description}</p>
                    <button
                      className={`mt-4 px-4 py-2 rounded-md text-white font-medium ${alert.severity === 'red' ? 'bg-red-400' : alert.severity === 'sky' ? 'bg-sky-400' : 'bg-green-600'}`}
                      onClick={() => setSelectedAlert(alert)}
                    >
                      View Details
                    </button>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>

            {selectedAlert && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 shadow-lg w-[400px] animate-fade-in">
                <h3 className="text-xl font-medium text-black">{selectedAlert.title}</h3>
                <p className="text-neutral-400 mt-1.5">{selectedAlert.description}</p>
                <button
                  className={`mt-4 px-4 py-2 rounded-md text-white font-medium ${selectedAlert.severity === 'red' ? 'bg-red-400' : selectedAlert.severity === 'sky' ? 'bg-sky-400' : 'bg-green-600'}`}
                  onClick={() => setSelectedAlert(null)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="bg-zinc-100 rounded-xl p-6 animate-fade-in">
            <img
              src="./src/assets/asd.png"
              alt="Data visualization"
              className="w-600 h-auto rounded-xl"
            />
          </div>

          <div className="bg-white rounded-xl p-6 mt-5 animate-fade-in">
            <h2 className="text-3xl font-medium text-slate-800 mb-7">Alerts & Notifications</h2>
            <div className="flex mb-4">
              <div className="h-[15px] bg-red-400 rounded-lg w-1/3"></div>
              <div className="h-[15px] bg-sky-400 rounded-lg w-1/3"></div>
              <div className="h-[15px] bg-green-600 rounded-lg w-1/3"></div>
            </div>
            <div className="flex justify-between text-base font-medium tracking-wider text-neutral-400 mb-8">
              <span>High</span>
              <span>Low</span>
            </div>
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-start gap-3.5 mb-6">
                <div className={`w-1.5 h-[75px] bg-${alert.severity}-400 rounded-lg flex-shrink-0`}></div>
                <div className="flex-grow">
                  <h3 className="text-xl font-medium text-black">{alert.title}</h3>
                  <p className="text-neutral-400 mt-1.5">{alert.description}</p>
                </div>
                <button
                  className={`px-4 py-2 rounded-md text-white font-medium ${alert.severity === 'red' ? 'bg-red-400' : alert.severity === 'sky' ? 'bg-sky-400' : 'bg-green-600'}`}
                  onClick={() => setSelectedAlert(alert)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
          <div className="bg-zinc-100 rounded-xl p-6 animate-fade-in">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-3xl font-medium text-slate-800">Total Budget (in lakhs)</h2>
              <div className="text-2xl text-center text-slate-500 tracking-[2.13px]">30/45</div>
            </div>
            <div className="relative h-6 bg-blue-600 rounded-xl w-[73%]">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full border-[13px] border-blue-600"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;