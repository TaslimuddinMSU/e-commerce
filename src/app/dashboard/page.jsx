import Navbar from '@/adminComponent/Navbar'
import Sidebar from '@/adminComponent/Sidebar'
import DashboardCard from '@/adminComponent/DashboardCard'

import { FaDollarSign, FaShoppingCart, FaUsers } from 'react-icons/fa'
import { MdOutlineWeb } from 'react-icons/md'

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen pl-64">
      <Navbar />
      <Sidebar />

      <main className="p-6 space-y-6 pt-20">
        {/* Top Cards */}
        <div className="flex flex-wrap gap-4">
          <DashboardCard icon={<FaDollarSign />} label="Revenue" value="$23569" color="green" />
          <DashboardCard icon={<FaShoppingCart />} label="Sales" value="3435" color="purple" />
          <DashboardCard icon={<MdOutlineWeb />} label="Templates" value="349" color="blue" />
          <DashboardCard icon={<FaUsers />} label="Clients" value="2986" color="orange" />
          <DashboardCard icon={<FaUsers />} label="Clients" value="2986" color="orange" />
          <DashboardCard icon={<FaUsers />} label="Clients" value="2986" color="orange" />
          <DashboardCard icon={<FaUsers />} label="Clients" value="2986" color="orange" />
        </div>

        {/* Placeholder for TrafficChart */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Traffic</h2>
          {/* Insert your chart component here */}
          <p className="text-gray-500">[Chart will go here]</p>
        </div>
      </main>
    </div>
  );
}

export default Home
