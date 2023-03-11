const Footer = () => {
  return (
    <footer className="p-4 shadow md:px-6 md:py-8 bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            SupplyAlly
          </span>
        </a>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex md:flex-row flex-col text-left md:space-x-4">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Version 1.0.0
        </span>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Last updated 20 Dec 2021
        </span>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022 Government of Singapore.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
