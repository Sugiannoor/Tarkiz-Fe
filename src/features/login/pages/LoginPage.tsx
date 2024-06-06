import LoginForm from "./LoginForm";

export const Login = () => {
  return (
    <div className="lg:grid grid-cols-2 flex justify-center items-center h-screen">
      <div className="hidden lg:block">
        <img
          loading="lazy"
          src="/welcome.webp"
          alt="login Image"
          className="h-screen object-cover rounded-xl"
        />
      </div>
      <LoginForm />
    </div>
  );
};
