import React from 'react';
import Navbar from '../Component/Navbar';
import { FaHeart, FaPlus, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { Link } from 'react-router';
import Footer from '../Component/Footer';

function IntroScreen() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-light-gradient dark:bg-dark-gradient flex flex-col items-center justify-center px-6 py-24">
        {/* Hero Section */}
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6 items-center justify-center flex">
            <FaReact className="text-rose-500 mr-2 animate-spin-slow" />
            <span className="text-rose-500">React-UI-Forge</span>{' '}
            <span className="animate-rocket-launch inline-block">🚀</span>
          </h1>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Forge stunning user interfaces with our handpicked, responsive, and
            reusable <span className="text-rose-500 font-bold">React</span> +{' '}
            <span className="text-rose-500 font-bold">Tailwind CSS</span>{' '}
            components. Build smarter. Build faster. ⚡
          </p>
        {/* Call to Action */}
        <div className="mt-12">
  <Link
    to="/components"
    className="bg-rose-500 hover:bg-rose-700 text-white font-medium py-4 px-8 rounded-full shadow-lg transition duration-300 text-lg border border-b-2"
  >
    🚀 Start Forging Now
  </Link>
</div>
        </header>

        {/* Features Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-500 mb-8 animate">
            Why Choose Us? 🌟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="p-6 bg-white dark:bg-dark-secondary  dark shadow-lg rounded-xl">
              <h3 className="text-xl font-semibold text-rose-500 mb-2">
                🎨 Customizable
              </h3>
              <p className="text-gray-400">
                Adjust styles and layouts effortlessly to fit your needs.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-xl dark:bg-dark-secondary">
              <h3 className="text-xl font-semibold text-rose-500 mb-2">
                📱 Fully Responsive
              </h3>
              <p className="text-gray-400">
                Every component looks amazing on all devices.
              </p>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-xl dark:bg-dark-secondary">
              <h3 className="text-xl font-semibold text-rose-500 mb-2">
                🌈 Tailwind-Powered
              </h3>
              <p className="text-gray-400">
                Supercharge your workflow with Tailwind's flexibility.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-xl dark:bg-dark-secondary">
              <h3 className="text-xl font-semibold text-rose-500 mb-2">
                💡 Modern Design
              </h3>
              <p className="text-gray-400">
                Create sleek and professional UIs effortlessly.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="mt-16 text-center text-xl md:text-2xl text-gray-400 flex">
          Built with <FaHeart className="text-red-500 mx-2 animate-beat" />{' '}
          <span className="text-rose-500 mx-2 font-semibold">
            For Developers{' '}
          </span>
          like you by{' '}
          <span className="font-semibold mx-2 flex">React-UI-Forge</span>.
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default IntroScreen;
