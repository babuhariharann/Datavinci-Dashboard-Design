const Navbar = ({
  navbar: { icon, placeholder, inbox, notification },
  profile,
}) => {
  return (
    <>
      <div className="flex items-center mt-8 mx-10 w-auto justify-between">
        {/* Navbar left side*/}
        <div className="flex items-center bg-gray-200 pl-8 gap-1 rounded-full py-2 w-96">
          {/* Search Icon and Placeholder */}
          <button className="text-gray-400 text-2xl">{icon}</button>
          <input
            type="text"
            className="text-gray-400 text-sm bg-transparent px-5 w-full focus:outline-none"
            placeholder={placeholder}
          />
        </div>
        {/* Navbar right side */}
        <div className="flex items-center gap-8">
          <div className="bg-gray-200 w-10 h-10 rounded-full relative">
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-gray-500 hover:scale-105  transitionl-all duration-700 ease-in-out">
              {inbox}
            </button>
          </div>
          <div className="bg-gray-200 w-10 h-10 rounded-full relative">
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-gray-500 transitionl-all duration-700 ease-in-out">
              {notification}
            </button>
          </div>
          <div className="w-10 h-10 ">
            <img className="rounded-full " src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
