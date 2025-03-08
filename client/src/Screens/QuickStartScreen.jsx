import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import QuickStart from '../Component/QuickStart';
import Footer from '../Component/Footer';
import Sidebar from '../Component/Sidebar';
import Axios from '../APIs/Axios';
import { useEffect, useState } from 'react';

function QuickStartScreen() {
  const [allCompo, setAllCompo] = useState([]);

  // Fetch all components for the sidebar
  useEffect(() => {
    const fetchAllComponents = async () => {
      try {
        const res = await Axios.get('/components');
        setAllCompo(res.data);
      } catch (error) {
        console.log('Error fetching components:', error);
      }
    };
    fetchAllComponents();
  }, []);

  return (
    <div className="flex flex-col bg-light-gradient dark:bg-dark-gradient min-h-screen w-full">
      <Navbar />
      <Sidebar components={allCompo} />

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 sm:ml-0 mt-24">
        <QuickStart />

        {/* "Next" Button to navigate to HomeScreen (All Components) */}
        <div className="flex justify-center my-6">
          <Link
            to="/components"
            className="bg-rose-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-rose-600 transition"
          >
            Next → View All Components
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default QuickStartScreen;
