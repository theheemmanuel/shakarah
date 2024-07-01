const ProdDetails = () => {
  return (
    <div className="px-14 font-montserrat">
      <div className="flex gap-8 font-[700] text-[40px] text-[#663399]">
        <h1 className="border-b-4 border-[#663399]">Product details</h1>
        <h1>Specifications</h1>
        <h1>Comments</h1>
      </div>
      <p className="bg-[#f8f8f8] w-full h-[5px]"></p>

      <div className="bg-[#EEE7F5] w-full h-[383px] rounded-[6px] my-8">
        <p className="font-[700] text-[24px] leading-[29.05px] flex items-center px-14 h-full">
          Adire/Kampala Tye & Dye Bubu, women bubu, one size fits all, <br />
          African Kaftan, Long African women bubu, Handmade with Aso <br /> Oke.
        </p>
      </div>
    </div>
  );
};

export default ProdDetails;
