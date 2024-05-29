const Client = () => {
  return (
    <div id="client">
      <div className="font-poppins text-[#005697] text-center text-2xl lg:text-3xl mt-20 mb-2 font-semibold">
        Our Client
      </div>
      <div className="lg:text-4xl text-xl text-black text-center font-bold font-raleway mb-5">
        Jadilah Salah Satu Client Kami
      </div>
      <div className="border-t-[3.5px] w-1/12 border-[#005697] mx-auto mb-16 rounded-sm"></div>
      <div className="mb-40 flex justify-center">
        <img loading="lazy" src="/client.jpg" alt="client-logo" />
      </div>
    </div>
  );
};

export default Client;
