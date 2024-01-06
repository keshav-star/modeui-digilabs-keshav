
const Header = () => {
  return (
    <div className="header flex justify-center py-2
    items-center border-b-2 border-b-gray-200">
      <button className="bg-gray-100 hover:bg-gray-200 p-1 px-2 mx-2 md:px-3 md:mx-3 rounded-md text-xs md:text-md lg:text-lg">Announcement</button>
      <h3 className="text-xs font-medium md:text-md lg:text-lg">We are happy to announce that we raise $2 Million in Seed Funding</h3>
    </div>
  );
};

export default Header;
