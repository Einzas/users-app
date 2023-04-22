import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import { useForm } from "react-hook-form";
import UsersList from "./components/UsersList";
import DeleteModal from "./components/DeleteModal";
import AlertModal from "./components/AlertModal";

const URL_BASE = "http://users-crud.academlo.tech/";
const DEFAULT_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
  image_url: "",
};
const ALERT_MESSAGE = [
  {
    title: "Create User",
    message: "User created successfully",
  },
  {
    title: "Update User",
    message: "User updated successfully",
  },
];

function App() {
  const [isShowForm, setIsShowForm] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [isUserIdToEdit, setIsUserIdToEdit] = useState(null);
  const [userDeleted, setUserDeleted] = useState("");
  const [isShowAlertModal, setIsShowAlertModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const getAllUsers = () => {
    axios
      .get(`${URL_BASE}/users/`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createUser = (user) => {
    axios
      .post(`${URL_BASE}/users/`, user)

      .then(() => {
        getAllUsers();
        reset(DEFAULT_VALUES);
        setIsShowForm(!isShowForm);
        setAlertMessage(ALERT_MESSAGE[0]);
        setIsShowAlertModal(!isShowAlertModal);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateUser = (user) => {
    axios
      .patch(`${URL_BASE}users/${isUserIdToEdit}/`, user)
      .then(() => {
        getAllUsers();
        reset(DEFAULT_VALUES);
        setIsShowForm(!isShowForm);
        setIsUserIdToEdit(null);
        setAlertMessage(ALERT_MESSAGE[1]);
        setIsShowAlertModal(!isShowAlertModal);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = (user) => {
    axios
      .delete(`${URL_BASE}users/${user.id}`)
      .then(() => {
        getAllUsers();
        setUserDeleted(user.first_name + " " + user.last_name);
        setIsShowDeleteModal(!isShowDeleteModal);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submit = (data) => {
    if (!data.image_url) {
      data.image_url = null;
    }
    if (!data.birthday) {
      data.birthday = null;
    }
    if (isUserIdToEdit) {
      updateUser(data);
    } else {
      createUser(data);
    }
  };

  const handleClickEdit = (user) => {
    setIsShowForm(!isShowForm);
    reset({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      birthday: user.birthday,
      image_url: user.image_url,
    });
    setIsUserIdToEdit(user.id);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className="font-sans m-12">
      <Header setIsShowForm={setIsShowForm} />
      <Modal
        register={register}
        submit={submit}
        handleSubmit={handleSubmit}
        setIsShowForm={setIsShowForm}
        isShowForm={isShowForm}
        reset={reset}
        setIsUserIdToEdit={setIsUserIdToEdit}
        isUserIdToEdit={isUserIdToEdit}
        errors={errors}
      />

      <UsersList
        handleClickEdit={handleClickEdit}
        deleteUser={deleteUser}
        userDeleted={userDeleted}
        setUserDeleted={setUserDeleted}
        users={users}
      />
      {isShowDeleteModal && (
        <DeleteModal
          userDeleted={userDeleted}
          isShowDeleteModal={isShowDeleteModal}
          setIsShowDeleteModal={setIsShowDeleteModal}
        />
      )}
      {isShowAlertModal && (
        <AlertModal
          setIsShowAlertModal={setIsShowAlertModal}
          message={alertMessage}
          isShowAlertModal={isShowAlertModal}
        />
      )}
    </main>
  );
}

export default App;
