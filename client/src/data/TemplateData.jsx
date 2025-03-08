const templates = [
  {
    name: 'Admin Dashboard',
    img: 'ph.png',
    desc: 'An interactive admin dashboard with side navigation and analytics cards.',
    code: ` import React from "react";
import { FiHome, FiUsers, FiSettings, FiBarChart2 } from "react-icons/fi";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5">
        <h2 className="text-xl font-bold mb-6">📊 Admin Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FiHome size={20} />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FiUsers size={20} />
              <span>Users</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FiBarChart2 size={20} />
              <span>Analytics</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FiSettings size={20} />
              <span>Settings</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Navbar */}
        <header className="flex justify-between items-center bg-white p-4 shadow rounded-lg">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Logout
          </button>
        </header>

        {/* Analytics Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-2xl font-bold">12,345</p>
            </div>
            <FiUsers size={30} className="text-blue-500" />
          </div>

          <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Revenue</h3>
              <p className="text-2xl font-bold">$23,567</p>
            </div>
            <FiBarChart2 size={30} className="text-green-500" />
          </div>

          <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Active Sessions</h3>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            <FiHome size={30} className="text-purple-500" />
          </div>
        </section>

        {/* Placeholder Chart Section */}
        <section className="mt-6 bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-lg font-semibold">📊 Chart Placeholder</h3>
          <p className="text-gray-500">You can integrate a chart library like Recharts or Chart.js here.</p>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
`,
  },
  {
    name: 'Minimal Dashboard',
    img: 'ph.png',
    code: `<div className="p-4 bg-gray-200">This is Template A</div>`,
  },
  {
    name: 'E-Com Admin Dashboard',
    img: 'eadmindas.png',
    desc: 'Sidebar with navigation, Top navbar with a greeting, Analytics Cards for total sales, orders, revenue, and customers,Order list section  Sales chart placeholder (You can integrate Chart.js or Recharts later)',
    code: `import React from "react";
import { FiShoppingCart, FiUsers, FiDollarSign, FiTrendingUp, FiPackage, FiBarChart2 } from "react-icons/fi";

const EcomDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5">
        <h2 className="text-xl font-bold mb-6">🛒 E-commerce Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FiBarChart2 size={20} />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FiShoppingCart size={20} />
              <span>Orders</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FiPackage size={20} />
              <span>Products</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FiUsers size={20} />
              <span>Customers</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FiDollarSign size={20} />
              <span>Revenue</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Navbar */}
        <header className="flex justify-between items-center bg-white p-4 shadow rounded-lg">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Logout
          </button>
        </header>

        {/* Analytics Cards */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Total Sales</h3>
              <p className="text-2xl font-bold">$125,456</p>
            </div>
            <FiDollarSign size={30} className="text-green-500" />
          </div>

          <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Orders</h3>
              <p className="text-2xl font-bold">8,340</p>
            </div>
            <FiShoppingCart size={30} className="text-blue-500" />
          </div>

          <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Revenue</h3>
              <p className="text-2xl font-bold">$543,210</p>
            </div>
            <FiTrendingUp size={30} className="text-purple-500" />
          </div>

          <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Customers</h3>
              <p className="text-2xl font-bold">15,678</p>
            </div>
            <FiUsers size={30} className="text-orange-500" />
          </div>
        </section>

        {/* Recent Orders */}
        <section className="mt-6 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">📦 Recent Orders</h3>
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="p-2">Order ID</th>
                <th className="p-2">Customer</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">#1234</td>
                <td className="p-2">John Doe</td>
                <td className="p-2">$120</td>
                <td className="p-2 text-green-500">Completed</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">#1235</td>
                <td className="p-2">Jane Smith</td>
                <td className="p-2">$95</td>
                <td className="p-2 text-yellow-500">Pending</td>
              </tr>
              <tr>
                <td className="p-2">#1236</td>
                <td className="p-2">Mike Johnson</td>
                <td className="p-2">$210</td>
                <td className="p-2 text-red-500">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Sales Chart Placeholder */}
        <section className="mt-6 bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-lg font-semibold">📊 Sales Chart</h3>
          <p className="text-gray-500">You can integrate a chart library like Recharts or Chart.js here.</p>
        </section>
      </main>
    </div>
  );
};

export default EcomDashboard;
`,
  },
  {
    name: 'Order Page for E-com',
    img: 'order.png',
    desc: 'Here’s a modern Order Page for your E-commerce Dashboard built with React + Tailwind CSS.,Order List with Status (Pending, Shipped, Delivered) Search Bar to filter orders,Responsive Table',
    code: `import React, { useState } from "react";
import { FiSearch, FiTruck, FiCheckCircle, FiClock } from "react-icons/fi";

const ordersData = [
  { id: "#001", customer: "John Doe", date: "2025-03-01", total: "$120.00", status: "Pending" },
  { id: "#002", customer: "Jane Smith", date: "2025-03-02", total: "$75.50", status: "Shipped" },
  { id: "#003", customer: "Alex Johnson", date: "2025-03-03", total: "$220.99", status: "Delivered" },
  { id: "#004", customer: "Emily Davis", date: "2025-03-04", total: "$95.00", status: "Pending" },
  { id: "#005", customer: "Michael Brown", date: "2025-03-05", total: "$45.50", status: "Shipped" },
];

const statusIcons = {
  Pending: <FiClock className="text-yellow-500" />,
  Shipped: <FiTruck className="text-blue-500" />,
  Delivered: <FiCheckCircle className="text-green-500" />,
};

const OrderPage = () => {
  const [search, setSearch] = useState("");
  const filteredOrders = ordersData.filter((order) =>
    order.customer.toLowerCase().includes(search.toLowerCase()) ||
    order.id.includes(search)
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Page Header */}
      <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">📦 Orders</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search orders..."
            className="border rounded-lg py-2 pl-10 pr-4 focus:ring focus:ring-blue-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-4">Order ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Total</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">{order.id}</td>
                <td className="py-3 px-4">{order.customer}</td>
                <td className="py-3 px-4">{order.date}</td>
                <td className="py-3 px-4">{order.total}</td>
                <td className="py-3 px-4 flex items-center gap-2">
                  {statusIcons[order.status]} {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderPage;
`,
  },
  {
    name: 'E-Commerce UI',
    img: 'ph.png',
    code: `<div className="grid grid-cols-2 gap-4">Product Cards</div>`,
  },
];

export default templates;
