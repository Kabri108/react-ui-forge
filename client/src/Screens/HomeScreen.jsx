import React, { useEffect, useState } from 'react';
import Sidebar from '../Component/Sidebar';
import Axios from '../APIs/Axios';
import { useParams } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import MainContent from '../Component/MainContent';
import Footer from '../Component/Footer';
import { FaReact } from 'react-icons/fa';

function HomeScreen() {
  const [allCompo, setAllCompo] = useState([]); // All components
  const [filteredComponents, setFilteredComponents] = useState([]); // Components filtered by category
  const { categoryId } = useParams(); // Get category from URL

  // Fetch all components on mount
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

  // Fetch components based on the selected category from URL
  useEffect(() => {
    const fetchCompoByCategory = async () => {
      if (categoryId) {
        try {
          const res = await Axios.get('/components', {
            params: { category: categoryId },
          });
          setFilteredComponents(res.data);
        } catch (error) {
          console.log('Error fetching components by category:', error);
        }
      } else {
        setFilteredComponents([]);
      }
    };

    fetchCompoByCategory();
  }, [categoryId]);

  return (
    <div className="flex flex-col bg-light-gradient dark:bg-dark-gradient min-h-screen w-full">
      <Navbar />
      <Sidebar components={allCompo} />

      <div className="flex-1 md:ml-64 sm:ml-0 mt-24">
        <h2 className="flex items-center justify-center text-rose-500 text-3xl font-bold">
          {categoryId
            ? `✨ Check out the ${filteredComponents.length} different types of ${categoryId} below! 😍`
            : '🚀 Explore All Components Below!'}
        </h2>
        <div className="w-full h-full">
          {(categoryId ? filteredComponents : allCompo).length === 0 ? (
            <div className="text-center p-24 text-white text-xl  flex justify-center"><FaReact className="w-8 h-8 text-rose-500 animate-spin-slow"/>Loading...</div>
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
        <Footer />
      </div>
    </div>
  );
}

export default HomeScreen;
