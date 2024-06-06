import RegisterForm from "./RegisterForm";

export const Register = () => {
  return (
    <div className="lg:grid grid-cols-2 flex justify-center items-center h-screen">
      <div className="hidden lg:flex items-center h-screen justify-center">
        <img
          loading="lazy"
          src="/welcome.webp"
          alt="image 1"
          className="h-screen object-cover rounded-xl w-full"
        />
      </div>
      <RegisterForm />
    </div>
  );
};
