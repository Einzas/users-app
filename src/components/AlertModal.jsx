import React from "react";

const AlertModal = ({ message, isShowAlertModal,setIsShowAlertModal }) => {
  const handleClickCloseModal = () => {
    setIsShowAlertModal((prevState) => !prevState);
  };
  return (
    <section
      className={`flex justify-center items-center fixed top-0 left-0 bottom-0 right-0 bg-black/10 transition-opacity ${
        isShowAlertModal ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <article className="bg-white px-4 py-6 w-96 h-52 grid gap-3">
        <h1 className="font-bold text-3xl">{message.title}</h1>
        <p>{message.message}</p>
        <button
          className="bg-purple-p text-white p-2"
          onClick={handleClickCloseModal}
        >
          Confirm
        </button>
      </article>
    </section>
  );
};

export default AlertModal;
