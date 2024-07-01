import LoginForm from "./LoginForm";

export const Login = () => {
  return (
    <div className="lg:grid grid-cols-2 flex justify-center items-center h-screen">
      <div className="hidden lg:block">
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="login Image"
          className="h-screen object-cover rounded-xl"
        />
      </div>
      <LoginForm />
    </div>
  );
};
