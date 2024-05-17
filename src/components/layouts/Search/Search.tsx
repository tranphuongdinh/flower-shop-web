const Search = () => {
  return (
    <div className="w-full px-4 py-3 mb-2 relative">
      <input className="border  rounded-lg bg-white  border-primary-light w-full p-3 pb-2 pl-9 text-sm" />
      <img src="/icons/search.svg" width={20} height={20} className="w-5 h-5 absolute top-6 left-7" />
    </div>
  );
};
export default Search;
