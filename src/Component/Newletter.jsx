import Tel from "../assets/Vectorr.png";

const Newletter = () => {
  return (
    <div className="font-montserrat bg-[#663399]">
      <div className="px-14 flex justify-center items-center gap-6 h-[126px]">
        <h1 className="text-white text-[20px] font-[700] text-center">
          Subscribe to our <br />
          Newsletter
        </h1>
        <input
          className="w-[436px] h-[63px] px-6 rounded-[5px] outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          className="w-[436px] h-[63px] px-6 rounded-[5px] outline-none"
          type="email"
          placeholder="Email"
        />
        <div
          role="button"
          className=" flex border-2 border-white p-4 gap-4 rounded-[5px]"
        >
          <img src={Tel} alt="" />
          <p className="fint-[700] text-[20px] text-white">Subscribe</p>
        </div>
      </div>
    </div>
  );
};

export default Newletter;
