const ImageLinkForm = () => {
  return (
    <div className="m-2 my-4 py-4 rounded-lg shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <p className="p-2">Face detection App</p>
      <div className="p-2 ">
        <input type="text" className="w-4/5 p-1 rounded my-2" />
        <button className="relative inline-flex items-center justify-center p-1 px-4 m-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 active:scale-95">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-3 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white">Button Text</span>
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
