import React from "react";

const Header = ({ setIsShowForm }) => {
  const handleClickShowModal = () => {
    setIsShowForm((prevState) => !prevState);
  };
  return (
    <header className="flex justify-between pb-12">
      <h1 className="font-bold text-xl sm:text-2xl md:text-4xl ">Users</h1>
      <button onClick={handleClickShowModal} className="bg-purple-p text-white px-1 sm:p-2 hover:bg-purple-p/90 transition-colors text-xs sm:text-sm">
     
        <i className="bx bx-plus"></i> Create new user{" "}
      </button>
    </header>
  );
};

export default Header;
