import React from "react";
import UserCard from "./UserCard";

const UsersList = ({
  setUserDeleted,
  users,
  setIsShowDeleteModal,
  deleteUser,
  handleClickEdit
}) => {
  return (
    <section className="grid gap-10 auto-rows-auto grid-cols-[repeat(auto-fill,_250px)] justify-center">
      {users.map((user) => (
        <UserCard
          key={user.id}
          setUserDeleted={setUserDeleted}
          user={user}
          setIsShowDeleteModal={setIsShowDeleteModal}
          deleteUser={deleteUser}
          handleClickEdit={handleClickEdit}

        />
      ))} 
    </section>
  );
};

export default UsersList;
