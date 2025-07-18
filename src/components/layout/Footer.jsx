const Footer = () => {
  return (
    <footer className="bg-gray-900 mb-0 p-0 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-sm">&copy; {new Date().getFullYear()} MovieMania. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
          <a href="/privacy" className="hover:text-gray-400">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

