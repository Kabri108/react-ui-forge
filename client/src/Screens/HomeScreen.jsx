import React, { useEffect, useState } from 'react';
import Sidebar from '../Component/Sidebar';
import Axios from '../APIs/Axios';
import { useParams } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import MainContent from '../Component/MainContent';

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
    <>
    <Navbar/>
      <div className="flex bg-light-gradient dark:bg-dark-gradient h-full w-full">
        {/* Sidebar */}
        <Sidebar components={allCompo} />

        {/* Main content */}
        <div className="flex-1 md:ml-64 sm:ml-0 ">
          <h2 className="mt-24 items-center justify-center flex text-rose-500 text-3xl font-bold">
            {categoryId
              ? `"✨ Check out the ${filteredComponents.length} different types of ${categoryId} below! 😍"`
              : '"😎 Explore All the Components below! 🚀"'}
          </h2>
          <div className="w-full">
            {/* Render filtered components if a category is selected */}
            {(categoryId ? filteredComponents : allCompo).map((component) => (
              <MainContent
                key={component._id}
                compoName={component.name}
                compoCode={component.code}
                reactCode={component.reactCode}
                compoDesc={component.description}
              />
            ))}
          </div>
        </div>
      </div>
      </>
  );
}

export default HomeScreen;
