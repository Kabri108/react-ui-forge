import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    

<footer class="bg-white dark:bg-dark-primary">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <Link href="/" class="flex items-center ">
                  <FaReact className="w-8 h-8 text-rose-500 animate-spin-slow"/>
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-rose-500 text-rose-500">React UI Forge</span>
              </Link>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <Link href="/" class="hover:underline"> React-UI-Forge</Link>
                      </li>
                      <li>
                          <Link href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <Link href="/" class="hover:underline ">Github</Link>
                      </li>
                      <li>
                          <a href="/">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <Link href="#" class="hover:underline">Privacy Policy</Link>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="max-w-6xl mx-auto px-4 text-center ">
        <p className="text-sm text-gray-300">
         &copy; {new Date().getFullYear()} React-UI-Forge. All Rights Reserved.
       </p>
     </div>
    </div>
</footer>

    // <footer className="bg-white text-black dark:text-gray-300 dark:bg-dark-primary py-4 ">
    //   <div className="max-w-6xl mx-auto px-4 text-center">
    //     <p className="text-sm">
    //       &copy; {new Date().getFullYear()} React-UI-Forge. All Rights Reserved.
    //     </p>
    //   </div>
    // </footer>
  );
};

export default Footer;
