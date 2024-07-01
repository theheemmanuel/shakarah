import mail from "../assets/email 3.png";
import Check from "../assets/Vector 38.png";
import Vec from "../assets/Vector 39.png";
import Logo from "../assets/3-removebg-preview 3.png";
import Search from "../assets/search.png";
import User from "../assets/user 2.png";
import Cart from "../assets/Vector.png";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#663399]">
        <div className="mx-auto flex justify-between items-center h-[77px] text-white px-14 font-montserrat">
          <div className="flex items-center gap-2 text-[20px]">
            <img src={mail} alt="" /> <span>SHAKARAHUBS.com</span>
          </div>
          <div className="flex items-center gap-2 text-[18px]">
            <select role="button" className="bg-[#663399]">
              <option value="">NGN</option>
              <option value="">EUR</option>
              <option value="">USD</option>
              <option value="">YEN</option>
            </select>
            <img src={Vec} alt="" />
            <select role="button" className="bg-[#663399]">
              <option value="">English</option>
              <option value="">Spanish</option>
              <option value="">Yoruba</option>
              <option value="">French</option>
            </select>
            <img src={Vec} alt="" />
            <div className="flex items-center gap-1">
              <img src={Check} alt="" />
              <span>Checkout</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex items-center justify-between px-16 py-4 gap-10">
        <img src={Logo} alt="" />
        <div className="h-[76px] border-2 border-[#663399] rounded-[12px] flex items-center flex-1">
          <select
            role="button"
            className="bg-[#663399] h-[100%] text-white rounded-tl-[12px] rounded-bl-[12px] p-6 text-[20px] font-[600]"
          >
            <option value="">All</option>
          </select>
          <div
            role="button"
            className="flex items-center gap-2 justify-between w-full px-8"
          >
            <input
              type="text"
              placeholder="Search for products, brands and categories"
              className="placeholder:italic w-full border-none outline-none"
            />
            <img src={Search} alt="" />
          </div>
        </div>
        <div className="flex items-center gap-4 font-montserrat text-[18px]">
          <div className="flex items-baseline gap-2 relative">
            <img src={Cart} alt="" />
            <p className="absolute top-[-15px] left-[17px] bg-[#663399] border-white border-2 rounded-full px-2 py-1 text-white text-[10px]">
              2
            </p>
            <p>CART-₦12000.00</p>
          </div>
          <div className="flex items-baseline gap-2">
            <img src={User} alt="" />
            <p>Login/Create Account</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
