import Youtube from "../assets/youtube-tv 3.png";
import Insta from "../assets/Group.png";
import Facebook from "../assets/Vector (2).png";
import X from "../assets/Vector (1).png";

const Footer = () => {
  return (
    <div className="bg-[#7D51AA] px-8 text-white font-montserrat text-[20px]">
      <div className="grid grid-cols-5 gap-12 py-12">
        <div>
          <h1 className="font-[700] mb-6">CONTACT US</h1>
          <ul className="flex flex-col gap-2">
            <li className="pb-2" role="button">
              Ikeja Lahos
            </li>
            <li className="pb-2" role="button">
              SHAKARAHUBS.com
            </li>
            <li className="pb-2" role="button">
              +234 909 385 3952
            </li>
            <li className="pb-2" role="button">
              fax@company.com
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-[700] mb-6">EXTRA</h1>
          <ul className="flex flex-col gap-2">
            <li className="border-b-2 pb-2" role="button">
              Brands
            </li>
            <li className="border-b-2 pb-2" role="button">
              Gift Certificate
            </li>
            <li className="border-b-2 pb-2" role="button">
              Affliate
            </li>
            <li className="border-b-2 pb-2" role="button">
              Specials
            </li>
            <li className="border-b-2 pb-2" role="button">
              Contact Us
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-[700] mb-6">INFORMATION</h1>
          <ul className="flex flex-col gap-2">
            <li className="border-b-2 pb-2" role="button">
              About Us
            </li>
            <li className="border-b-2 pb-2" role="button">
              Delivery Information
            </li>
            <li className="border-b-2 pb-2" role="button">
              Privacy Policy
            </li>
            <li className="border-b-2 pb-2" role="button">
              Terms & Conditions
            </li>
            <li className="border-b-2 pb-2" role="button">
              Contact Us
            </li>
            <li className="border-b-2 pb-2" role="button">
              Site Map
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-[700] mb-6">MY ACCOUNT</h1>
          <ul className="flex flex-col gap-2">
            <li className="border-b-2 pb-2" role="button">
              My Account
            </li>
            <li className="border-b-2 pb-2" role="button">
              Order History
            </li>
            <li className="border-b-2 pb-2" role="button">
              Wish List
            </li>
            <li className="border-b-2 pb-2" role="button">
              News Letter
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-[700] mb-6">LINKS</h1>
          <ul className="flex justify-between">
            <li role="button">
              <img src={X} alt="" />
            </li>
            <li role="button">
              <img src={Facebook} alt="" />
            </li>
            <li role="button">
              <img src={Insta} alt="" />
            </li>
            <li role="button">
              <img src={Youtube} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
