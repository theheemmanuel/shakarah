/* eslint-disable react/no-unescaped-entities */
import Menu from "../assets/Menu Button.png";
import Cart from "../assets/Cart11.png";
import DStar from "../assets/Star 4.png";
import SStar from "../assets/Star 3.png";

const Hero = () => {
  return (
    <>
      <div className="bg-[#663399] h-[76px] flex items-center px-12 text-white font-montserrat text-[20px] gap-16 font-[700]">
        <div className="flex gap-2 items-center">
          <img src={Menu} alt="" />
          ALL CATEGORIES
        </div>
        <div className="flex gap-12 list-none items-center flex-1">
          <li role="button">HOME</li>
          <li role="button">TODAY'S DEAL</li>
          <li role="button">CONTACT US</li>
          <li role="button">FAQ</li>
        </div>
        <button className="bg-[#AEA0BC] h-full w-[160px] text-black text-[20px]">
          BLOG
        </button>
      </div>
      <div className="px-14 py-6 font-montserrat text-[20px]">
        <p className="text-[#ACACAC]">
          <span className="text-[24px]">Home</span> &gt; Adire Products &gt;
          Adire Design &gt; <span className="text-[#663399]">Adire Styles</span>
        </p>
        <p className="bg-[#F7F7F7] w-full h-[2px] my-4"></p>
        <h1 className="text-[36px] text-[#4a4a4a] font-[700] my-8">
          ADIRE STYLES
        </h1>
        <p className="bg-[#663399] w-full h-[10px]"></p>
        <div>
          <>
            <div className="flex justify-between items-center px-10 text-[20px] font-[600] text-[#4A4A4A] border-[4px] border-[#f5f5f5] my-1 h-[107px]">
              <h1>PRODUCT</h1>
              <h1>TOTAL</h1>
            </div>
            <div>
              <div className="flex justify-between my-6">
                <div className="cart-pic h-[654px] w-[705px]">
                  <img src={Cart} alt="" />
                </div>
                <div className="flex-1 px-8 pt-8 text-[#4a4a4a] text-[25px]">
                  <div className="flex justify-between py-4 text-[30px] font-[500]">
                    <h1>Adire Styles</h1>
                    <h1 className="text-[#663399]">₦80,000.00</h1>
                  </div>
                  <h1 className="text-[25px] py-4 pb-12">Brand: Adire</h1>
                  <h1 className="flex items-center gap-2 my-4">
                    Reviews: <img src={SStar} alt="" />
                    <img src={SStar} alt="" />
                    <img src={SStar} alt="" />
                    <img src={DStar} alt="" />
                    <img src={DStar} alt="" />
                  </h1>
                  <div className="flex gap-2 my-4">
                    <h1>Quantity</h1>
                    <select className="bg-transparent border-2 rounded-lg px-4">
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                    </select>
                  </div>
                  <h1 className="text-[25px] my-4">Price: ₦40,000.00</h1>
                  <button className="my-4 w-full h-[70px] bg-[#663399] rounded-[6px] text-white">
                    Checkout
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Hero;
