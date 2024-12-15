import React, { useEffect, useState } from 'react';
import Sidebar from '../Component/Sidebar';
import Axios from '../APIs/Axios';
import { useParams } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import MainContent from '../Component/MainContent';
import { FaReact } from 'react-icons/fa';
import Footer from '../Component/Footer';

function HomeScreen() {
  const [allCompo, setAllCompo] = useState([]); // All components
  const [filteredComponents, setFilteredComponents] = useState([]); // Components filtered by category
  const { categoryId } = useParams(); // Get category from URL
  const [loading, setLoading] = useState(true);

  // Fetch all components on mount
  useEffect(() => {
    const fetchAllComponents = async () => {
      try {
        const res = await Axios.get('/components');
        setAllCompo(res.data);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching components:', error);
        setLoading(false);
      }
    };

    fetchAllComponents();
  }, []);

  // Fetch components based on the selected category from URL
  useEffect(() => {
    const fetchCompoByCategory = async () => {
      if (categoryId) {
        try {
          const res = await Axios.get('/components', {
            params: { category: categoryId },
          });
          setFilteredComponents(res.data); // Update filtered components
        } catch (error) {
          console.log('Error fetching components by category:', error);
        }
      } else {
        setFilteredComponents([]); // Clear filtered components if no category
      }
    };

    fetchCompoByCategory();
  }, [categoryId]); // Re-run when categoryId changes

  return (
    <div className="flex flex-col bg-light-gradient dark:bg-dark-gradient min-h-screen w-full">
      <Navbar />
      {/* Sidebar */}
      <Sidebar components={allCompo} />

      {/* Main Content */}
      <div className="flex-1 md:ml-64 sm:ml-0">
        <h2 className="mt-24 flex items-center justify-center text-rose-500 text-3xl font-bold">
          {categoryId
            ? `✨ Check out the ${filteredComponents.length} different types of ${categoryId} below! 😍`
            : '😎 Explore All the Components below! 🚀'}
        </h2>

        {/* Spinner or Content */}
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <FaReact className="text-rose-500 animate-spin-slow w-32 h-32" />
          </div>
        ) : (
          <div className="w-full h-full">
            {(categoryId ? filteredComponents : allCompo).length === 0 ? (
              <div className="text-center">No components available!</div>
            ) : (
              (categoryId ? filteredComponents : allCompo).map((component) => (
                <MainContent
                  key={component._id}
                  compoName={component.name}
                  compoCode={component.code}
                  reactCode={component.reactCode}
                  compoDesc={component.description}
                />
              ))
            )}
          </div>
        )}
        <Footer/>
      </div>
    </div>
  );
}

export default HomeScreen;
