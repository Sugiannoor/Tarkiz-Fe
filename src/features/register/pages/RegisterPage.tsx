import RegisterForm from "./RegisterForm";

export const Register = () => {
  return (
    <div className="lg:grid grid-cols-2 flex justify-center items-center h-screen">
      <div className="hidden lg:flex items-center h-screen justify-center">
        <div className="absolute text-5 xl xl:text-6xl font-bold text-white font-poppins">
          SELAMAT DATANG
        </div>
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="object-cover rounded-xl text-center h-screen"
        />
      </div>
      <RegisterForm />
    </div>
  );
};
