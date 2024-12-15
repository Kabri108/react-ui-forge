const Footer = () => {
  return (
    <footer className="bg-white text-black dark:text-gray-300 dark:bg-dark-primary py-4 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} React-UI-Forge. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
