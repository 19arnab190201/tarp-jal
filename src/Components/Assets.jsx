import React, { useState } from 'react';
import Sidebar from './Sidebar';

function Asset() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLanguageChange = () => {
    setSelectedLanguage(selectedLanguage === 'English' ? 'Other' : 'English');
  };

  const overviewData = [
    { title: "Total Assets Installed", value: "3,23,62,838", percentage: "5%", isPositive: true },
    { title: "Operational", value: "2,20,62,838", percentage: "5%", isPositive: true, className: "text-green-500" },
    { title: "Repair & Maintenance", value: "1,82,62,838", percentage: "5%", isPositive: true, className: "text-amber-300" }
  ];

  const statisticsData = [
    { title: "Operational Assets", chartType: "bar", data: [11, 85, 31, 98, 77, 40, 77, 40, 77, 54, 77, 36] },
    {
      title: "Asset Utilization",
      chartType: "pie",
      data: [
        { label: "Operational", value: 60, color: "blue-600" },
        { label: "Maintenance", value: 20, color: "red-300" },
        { label: "Requested", value: 20, color: "orange-400" }
      ]
    },
    {
      title: "Asset Distribution",
      chartType: "pie",
      data: [
        { label: "Pumps", value: 20, color: "blue-600" },
        { label: "Pipes", value: 30, color: "red-300" },
        { label: "Wells", value: 20, color: "green-500" },
        { label: "Tanks", value: 20, color: "rose-400" },
        { label: "Reservoirs", value: 20, color: "orange-400" }
      ]
    },
    {
      title: "Asset Efficiency",
      chartType: "bar",
      data: [
        { label: "Pumps", expected: 45, actual: 29 },
        { label: "Pipes", expected: 87, actual: 57 },
        { label: "Wells", expected: 57, actual: 37 },
        { label: "Tanks", expected: 74, actual: 48 },
        { label: "Reservoirs", expected: 52, actual: 43 }
      ]
    }
  ];

  const tableHeaders = ["ASSET ID", "ITEM", "TYPE", "DATE", "REMARKS", "STATUS", "VIEW"];
  const tableData = [
    { id: "PUMP-7898", item: "Community Hand..", type: "Pump", date: "11th Sept, 2024", remarks: "Slight delay due..", status: "Pending", statusColor: "red" },
    { id: "PUMP-7898", item: "Community Hand..", type: "Pump", date: "11th Sept, 2024", remarks: "Slight delay due..", status: "Completed", statusColor: "green" },
    { id: "PUMP-7898", item: "Community Hand..", type: "Pump", date: "11th Sept, 2024", remarks: "Slight delay due..", status: "Pending", statusColor: "red" },
    { id: "PUMP-7898", item: "Community Hand..", type: "Pump", date: "11th Sept, 2024", remarks: "Slight delay due..", status: "Completed", statusColor: "green" },
    { id: "PUMP-7898", item: "Community Hand..", type: "Pump", date: "11th Sept, 2024", remarks: "Slight delay due..", status: "Pending", statusColor: "red" },
    { id: "PUMP-7898", item: "Community Hand..", type: "Pump", date: "11th Sept, 2024", remarks: "Slight delay due..", status: "Completed", statusColor: "green" },
    { id: "PUMP-7898", item: "Community Hand..", type: "Pump", date: "11th Sept, 2024", remarks: "Slight delay due..", status: "Pending", statusColor: "red" }
  ];

  return (
    <main className="flex overflow-hidden flex-wrap gap-10 pr-9 bg-white rounded-[48px] max-md:pr-5">
      <Sidebar />
      <div className="flex flex-col grow shrink-0 self-start mt-6 basis-0 w-fit max-md:max-w-full">
      <header className="flex justify-between items-center p-4 bg-white shadow-sm">
      <div className="flex items-center space-x-6">
        <h1 className="text-3xl font-bold text-neutral-700">Asset Management</h1>
        
        <div className="relative">
          <div className="flex items-center bg-zinc-100 rounded-full px-3 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-full focus:outline-none text-sm text-neutral-700"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button 
          onClick={handleLanguageChange}
          className="flex items-center border border-slate-800 text-stone-400 rounded-full px-4 py-2 hover:bg-gray-50 transition"
        >
          {selectedLanguage}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div className="w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center text-2xl">
          A
        </div>
      </div>
    </header>
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col pt-24 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex z-10 flex-col mt-0 w-full max-md:max-w-full">
                  <div className="flex flex-wrap gap-3 items-center self-start text-3xl font-medium text-gray-600 max-md:max-w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/222614466bfa369457f653453d3fd5da223743012ea38e9a69574a725fcdd5b9?placeholderIfAbsent=true&apiKey=ef7b5d5447c6479dac0038316f4acf54" className="object-contain shrink-0 self-stretch my-auto aspect-[0.78] w-[25px]" alt="" />
                    <h2 className="self-stretch my-auto max-md:max-w-full">Vellore Institute of Technology, Vellore</h2>
                  </div>
                  <div className="flex flex-wrap gap-5 items-start mt-11 w-full max-md:mt-10 max-md:max-w-full">
                    {statisticsData.map((stat, index) => (
                      <div key={index} className="flex flex-col grow shrink rounded-none min-w-[240px] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] w-[393px] max-md:max-w-full">
                        <div className="flex flex-col px-4 pt-5 pb-14 w-full bg-white rounded-xl max-md:pr-5 max-md:max-w-full">
                          <h3 className="self-start text-base font-semibold text-zinc-800">{stat.title}</h3>
                          {stat.chartType === 'bar' && (
                            <div className="flex gap-2.5 mt-10 max-md:max-w-full">
                              <div className="flex flex-col justify-center items-center text-xs font-bold whitespace-nowrap text-neutral-500 max-md:hidden">
                                {[25, 20, 15, 10, 5, 0].map((value, i) => (
                                  <div key={i} className={i > 0 ? 'mt-4' : ''}>{value}</div>
                                ))}
                              </div>
                              <div className="flex flex-col grow shrink-0 self-end mt-10 basis-0 w-fit max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-2 items-end mr-2.5 ml-3 max-md:ml-2.5">
                                  {stat.data.map((value, i) => (
                                    <div key={i} className={`flex shrink-0 bg-blue-600 rounded-md h-[${value}px] w-[26px]`} />
                                  ))}
                                </div>
                                <div className="shrink-0 mt-1.5 h-0 border border-solid border-zinc-400 max-md:max-w-full" />
                              </div>
                            </div>
                          )}
                          {stat.chartType === 'pie' && (
                            <div className="self-end mt-10 max-w-full w-[406px]">
                              <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                  <div className="flex relative flex-col py-1.5 pr-1.5 pl-3 w-full text-xs font-bold text-black whitespace-nowrap aspect-[0.994] max-md:mt-9">
                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1a3c8cbed82f3575fecec858acd85913c98943a30b47af685c4cc97fd451ea0?placeholderIfAbsent=true&apiKey=ef7b5d5447c6479dac0038316f4acf54" className="object-cover absolute inset-0 size-full" alt="" />
                                    {stat.data.map((item, i) => (
                                      <div key={i} className={`px-1.5 ${i > 0 ? 'mt-2.5' : ''} w-8 h-8 bg-violet-100 rounded-full shadow-[0px_0px_2px_rgba(0,0,0,0.25)]`}>
                                        {item.value}%
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                  <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10">
                                    {stat.data.map((item, i) => (
                                      <div key={i} className={`flex gap-10 items-center ${i > 0 ? 'mt-4' : ''} w-full`}>
                                        <div className="flex gap-1.5 justify-center items-center self-stretch my-auto">
                                          <div className="flex flex-col self-stretch my-auto w-2.5">
                                            <div className={`flex shrink-0 w-2.5 h-2.5 bg-${item.color} rounded-full`} />
                                          </div>
                                          <div className="self-stretch my-auto text-xs font-bold text-neutral-500">{item.label}</div>
                                        </div>
                                        <div className="self-stretch my-auto text-xs font-bold text-neutral-700">{item.value}%</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
              <section className="flex flex-col pb-7 max-md:mt-10">
                <h2 className="text-3xl font-medium text-center text-gray-600">Overview</h2>
                <div className="flex flex-col items-end mt-11 w-full max-md:mt-10">
                  {overviewData.map((item, index) => (
                    <div key={index} className={`flex flex-col mt-4 max-w-full font-medium rounded-none w-[378px] ${index === 0 ? 'mt-0' : ''}`}>
                      <div className={`flex flex-col px-6 py-6 rounded-xl bg-zinc-100 max-md:px-5 ${item.className ? item.className : ''}`}>
                        <div className="flex flex-col">
                          <div className="flex flex-col max-w-full w-[308px]">
                            <div className="text-xl text-neutral-700 text-opacity-60">{item.title}</div>
                            <div className="mt-3 text-4xl font-bold text-neutral-700">{item.value}</div>
                            <div className="flex flex-col justify-center items-center px-1.5 py-1 mt-3 text-sm whitespace-nowrap bg-green-500 rounded-2xl min-h-[23px] text-zinc-100 w-[53px]">
                              <div className="flex gap-0.5 items-center">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9be66d21e987b57982421decfc2e700d1bee54edc3d88c88f5c5ca3e44dd0f35?placeholderIfAbsent=true&apiKey=ef7b5d5447c6479dac0038316f4acf54" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-[1.17]" alt="" />
                                <div className="self-stretch my-auto">{item.percentage}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
          <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <h2 className="text-xl font-bold">Asset Management</h2>
        <button className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition">
          Add Asset
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <tbody className="divide-y divide-gray-200">
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 whitespace-nowrap">{row.id}</td>
                <td className="px-4 py-3 whitespace-nowrap">{row.item}</td>
                <td className="px-4 py-3 whitespace-nowrap">{row.type}</td>
                <td className="px-4 py-3 whitespace-nowrap">{row.date}</td>
                <td className="px-4 py-3 whitespace-nowrap">{row.remarks}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span 
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      row.statusColor === 'red' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <button className="text-blue-600 hover:underline">
                    View Report
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
          </div>
        </div>
    </main>
  );
}

export default Asset;