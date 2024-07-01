import Grt from "../assets/Icon.png";
import Lst from "../assets/Icon2.png";
import Atire1 from "../assets/adire1.png";
import Atire2 from "../assets/adire2.png";
import Atire3 from "../assets/adire3.png";
import Atire4 from "../assets/adire4.png";
import Atire5 from "../assets/adire5.png";
import Lock from "../assets/Lock.png";

const Items = [
  {
    pic: Atire1,
    details: "Authentic African Batik Tie and Dye short sleeve Unisex",
  },
  {
    pic: Atire2,
    details:
      "VintlyeOrigin: CN(Origin)Material: CottonType: DashikiGender: MENModel Number: wyn1640Item Type 1: African boubou menItem Type 2: Nigerian agbada robe suitsItem",
  },
  {
    pic: Atire3,
    details:
      "This is a beautiful dashiki dress that is very roomy and is fit for all occasions. It is light weight blue cotton denim and dashiki print. 100% cotton exclusive of decoration. Scarf included One size Color: blue denim Ankle length. Two side pockets.",
  },
  {
    pic: Atire4,
    details:
      "VintlyeOrigin: CN(Origin)Material: CottonType: DashikiGender: Men. Type 1: Nigerian agbada robe suitsItem",
  },
  {
    pic: Atire5,
    details: "African Fabric Kimonos",
  },
];

const PriceRange = () => {
  return (
    <>
      <div className="px-14 font-montserrat">
        <div className="my-6">
          <p className="bg-[#663399] w-full h-[10px]"></p>
          <div className="flex justify-between items-center px-10 text-[20px] font-[600] border-[4px] border-[#f5f5f5] my-1 h-[107px]">
            <h1 className="text-[#663399]">PRICE RANGE</h1>
            <div className="flex items-center gap-4">
              <img src={Lst} alt="" />
              <img src={Grt} alt="" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-6">
          {Items.map((item, i) => (
            <div key={i} className="flex flex-col justify-between">
              <div className="cart-pic w-[326px] h-[299px]">
                <img src={item.pic} alt="" />
              </div>
              <p className="text-[12px] my-6">{item.details}</p>
              <div className="flex gap-4 my-2 items-center">
                <p className="font-[14px] text-[#4a4a4a]">Qty</p>
                <select className="bg-transparent border-2 rounded-lg py-3 px-6">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                </select>
                <img
                  className="border-2 py-3 px-6 rounded-lg"
                  src={Lock}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        <p className="bg-[#c1c1c1] w-full h-[2px] my-6"></p>
      </div>
      <div className="px-14 font-montserrat">
        <div className="my-6">
          <p className="bg-[#663399] w-full h-[10px]"></p>
          <div className="flex justify-between items-center px-10 text-[20px] font-[600] border-[4px] border-[#f5f5f5] my-1 h-[107px]">
            <h1 className="text-[#663399]">YOU MAY ALSO LIKE</h1>
            <div className="flex items-center gap-4">
              <img src={Lst} alt="" />
              <img src={Grt} alt="" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-6">
          {Items.map((item, i) => (
            <div key={i} className="flex flex-col justify-between">
              <div className="cart-pic w-[326px] h-[299px]">
                <img src={item.pic} alt="" />
              </div>
              <p className="text-[12px] my-6">{item.details}</p>
              <div className="flex gap-4 my-2 items-center">
                <p className="font-[14px] text-[#4a4a4a]">Qty</p>
                <select className="bg-transparent border-2 rounded-lg py-3 px-6">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                </select>
                <img
                  className="border-2 py-3 px-6 rounded-lg"
                  src={Lock}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        <p className="bg-[#c1c1c1] w-full h-[2px] my-8"></p>
      </div>
    </>
  );
};

export default PriceRange;
