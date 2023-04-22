const Modal = ({
  isShowForm,
  reset,
  setIsShowForm,
  handleSubmit,
  register,
  submit,
  setIsUserIdToEdit,
  isUserIdToEdit,
  errors,
}) => {
  const handleClickCloseModal = () => {
    setIsShowForm((prevState) => !prevState);
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
      image_url: "",
    });
    setIsUserIdToEdit(null);
  };
  return (
    <section
      className={`fixed z-10 flex justify-center items-center  top-0 left-0 bottom-0 right-0 bg-black/40 transition-opacity ${
        isShowForm ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="relative bg-white p-4 grid gap-4 w-[300px]"
      >
        <h3 className="text-2xl font-bold">
          {isUserIdToEdit === null ? "New User" : "Edit User"}
        </h3>
        <div className="grid gap-1 ">
          <label className="text-xs font-semibold" htmlFor="first_name">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            type="text"
            id="first_name"
            {...register("first_name", {
              required: "This field is required",
              maxLength: { value: 25, message: "The max lenght is 25" },
              minLength: { value: 3, message: "The min lenght is 3" },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "This field only accept letters",
              },
            })}
          />
          <span className="text-red-500 text-sm">
            {errors.first_name && errors.first_name.message}{" "}
          </span>
        </div>
        <div className="grid gap-1 ">
          <label className="text-xs font-semibold" htmlFor="last_name">
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            type="text"
            id="last_name"
            {...register("last_name", {
              required: "This field is required",
              maxLength: { value: 25, message: "The max lenght is 25" },
              minLength: { value: 3, message: "The min lenght is 3" },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "This field only accept letters",
              },
            })}
          />
          <span className="text-red-500 text-sm">
            {errors.last_name && errors.last_name.message}{" "}
          </span>
        </div>
        <div className="grid gap-1 ">
          <label className="text-xs font-semibold" htmlFor="email">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            type="email"
            id="email"
            {...register("email", {
              required: "This field is required",
              maxLength: { value: 150, message: "The max lenght for email is 150" },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email",
              },
            })}
          />
          <span className="text-red-500 text-sm">
            {errors.email && errors.email.message}
          </span>
        </div>
        <div className="grid gap-1 ">
          <label className="text-xs font-semibold" htmlFor="password">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            type="password"
            id="password"
            {...register("password",{
              required: "This field is required",
              maxLength: { value: 25, message: "The max lenght for passwords is 25" },
              minLength: { value: 6, message: "The min lenght for passwords is 6" },
            })}
          />
        </div>
        <div className="grid gap-1 ">
          <label className="text-xs font-semibold" htmlFor="birthday">
            Birthday
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            type="date"
            id="birthday"
            {...register("birthday")}
          />
        </div>
        <div className="grid gap-1 ">
          <label className="text-xs font-semibold" htmlFor="image_url">
            Image Url
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            type="text"
            id="image_url"
            {...register("image_url", {
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/,
                message: "Invalid image url",
              },
            })}
          />
          <span className="text-red-500 text-sm">
            {errors.image_url && errors.image_url.message}
          </span>
        </div>
        <i
          onClick={handleClickCloseModal}
          className="bx bx-x absolute top-2 right-2 text-2xl hover:text-red-500  transition-colors "
        ></i>
        <button className="bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-sm">
          {isUserIdToEdit === null ? "Add new user" : "Edit user"}
        </button>
      </form>
    </section>
  );
};

export default Modal;
