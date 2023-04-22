import React from "react";
import DeleteModal from "./DeleteModal";

const UserCard = ({
  user,
  setIsShowDeleteModal,
  deleteUser,
  setUserDeleted,
  handleClickEdit,
}) => {
  const handleClickDeleteUser = () => {
    setUserDeleted(user.first_name + " " + user.last_name);
    setIsShowDeleteModal((prevState) => !prevState);
  };
  return (
    <article className="border rounded-md">
      <div className="relative border-b-4">
        <img
          className="w-full h-72  mx-auto rounded-md   object-fill "
          src={user.image_url === null ? "/images/default.png": user.image_url}
          alt="User-Image"
        />
      </div>
      <h3 className="font-bold pt-3 text-xl sm:text-2xl md:text-3xl text-center">
        {user.first_name} {user.last_name}
      </h3>
      <ul className="grid gap-3 pt-4 mx-6">
        <li>
          <h4 className="text-gray-300">Mail</h4>
          <span className="text-sm">{user.email}</span>
        </li>

        <li>
          <h4 className="text-gray-300">Birthdate</h4>
          <span className="flex gap-2 items-center text-sm">
            <i className="bx bx-gift"></i>
            {user.birthday === null ? "Not available" : `${String(new Date(user.birthday).getDate()).padStart(2, '0')}-${String(new Date(user.birthday).getMonth() + 1).padStart(2, '0')}-${new Date(user.birthday).getFullYear()}`}
          </span>
        </li>
      </ul>
      <div className="flex gap-x-3 justify-end m-4">
        <button className="border border-red-500 py-1 px-2 rounded-md text-xl text-white  bg-red-400" onClick={() => {deleteUser(user); handleClickDeleteUser}}>
          <i className="bx bxs-trash"></i>
        </button>
        <button className="border border-gray-300  py-1 px-2 rounded-md text-xl text-gray-300 " onClick={() => handleClickEdit(user)}>
          <i className="bx bxs-pencil"></i>
        </button>
      </div>
      <DeleteModal/>
    </article>
  );
};


export default UserCard;
