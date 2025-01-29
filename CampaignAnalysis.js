// Next.js App for Campaign Analysis UI

import Head from 'next/head';
import { useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

export default function CampaignAnalysis() {
  const [data, setData] = useState({
    barChartData: {
      labels: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'],
      datasets: [
        {
          label: 'React',
          data: [500, 800, 1200, 1000, 1500, 1700, 1600, 1900, 2000, 2200],
          backgroundColor: '#00A65A',
        },
        {
          label: 'Read',
          data: [300, 500, 700, 800, 1000, 1200, 1100, 1300, 1500, 1700],
          backgroundColor: '#F39C12',
        },
        {
          label: 'Delivered',
          data: [200, 400, 500, 600, 700, 800, 900, 1000, 1200, 1300],
          backgroundColor: '#3C8DBC',
        },
      ],
    },
    doughnutData: {
      labels: ['React', 'Read', 'Delivered'],
      datasets: [
        {
          data: [43, 32, 25],
          backgroundColor: ['#00A65A', '#F39C12', '#3C8DBC'],
        },
      ],
    },
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Campaign Analysis</title>
      </Head>
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-black text-white flex flex-col justify-between p-4">
          <div>
            <h1 className="text-2xl font-bold mb-6">Awqaf Dubai</h1>
            <nav className="space-y-4">
              <a href="#" className="flex items-center gap-3 text-yellow-400">
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center gap-3">
                Income
              </a>
              <a href="#" className="flex items-center gap-3">
                Projects & Keywords
              </a>
              <a href="#" className="flex items-center gap-3">
                Groups & Contacts
              </a>
              <a href="#" className="flex items-center gap-3">
                SMS
              </a>
              <a href="#" className="flex items-center gap-3">
                WhatsApp
              </a>
              <a href="#" className="flex items-center gap-3">
                Screens
              </a>
              <a href="#" className="flex items-center gap-3">
                Reports
              </a>
              <a href="#" className="flex items-center gap-3">
                Security
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="rounded-full"
            />
            <div>
              <p className="text-sm">Mohamed Ali</p>
              <p className="text-xs text-gray-400">العربية</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <header className="mb-8">
            <h2 className="text-2xl font-bold">Campaign Analysis</h2>
            <p className="text-gray-500">Campaign Name: <span className="font-bold">Sadaga Campaign</span></p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white shadow-md p-4 rounded-md">
              <h3 className="font-bold mb-2">Delivered</h3>
              <p>2000</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md">
              <h3 className="font-bold mb-2">Read</h3>
              <p>1500</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md">
              <h3 className="font-bold mb-2">React</h3>
              <p>1200</p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md p-4 rounded-md">
              <Bar data={data.barChartData} />
            </div>
            <div className="bg-white shadow-md p-4 rounded-md">
              <Doughnut data={data.doughnutData} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
