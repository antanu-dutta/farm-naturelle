import React from "react";

function AboutFarm() {
  const aboutFarmImages = [
    {
      url: "https://farmnaturelle.com/cdn/shop/files/Rectangle_8582.png?v=1697704445",
      text: "HONEY COLLECTION",
    },
    {
      url: "https://farmnaturelle.com/cdn/shop/files/Group_28816.jpg?v=1698756507",
      text: "A2 GHEE DAIRY FARM",
    },
    {
      url: "https://farmnaturelle.com/cdn/shop/files/Rectangle_8584.png?v=1697704445",
      text: "HERBS GARDEN",
    },
    {
      url: "https://farmnaturelle.com/cdn/shop/files/Rectangle_8585.png?v=1697704445",
      text: "FRUIT FARM",
    },
  ];
  return (
    <div className="py-10">
      <div className="container">
        <div className="flex flex-col items-center">
          <span className="text-gray-800 block mb-4 text-sm uppercase tracking-wider font-bold">
            OUR FARMS
          </span>
          <h2 className="text-black text-4xl mb-4 font-semibold text-center">
            <span className="text-primary">"From Our Farm</span> to Your Table"
          </h2>
          <p className="text-center text-sm text-gray-800 font-[300] mb-4">
            At Farm Naturelle, we've cultivated our own slice of paradise in Ram
            Nagar, where every sunrise brings a new promise of sustainable
            farming and organic beekeeping, ensuring that every product we offer
            is a testament to the purity of nature's gifts.{" "}
          </p>
          <button className="rounded text-white bg-primary mb-7 uppercase py-3 px-12">
            BOOK A VISIT
          </button>
        </div>
        <div className="grid  md:grid-cols-2 gap-5">
          {aboutFarmImages.map((item, index) => (
            <div className="relative" key={index}>
              <img src={item.url} alt="" className="w-full" />
              <p className="absolute bottom-6 text-center w-full text-white text-3xl">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <h1 className="text-center text-5xl leading-relaxed py-[80px] font-playwrite">
          "Organic farming anchors Farm Natural, nurturing the land today for a
          sustainable tomorrow."
        </h1>
      </div>
    </div>
  );
}

export default AboutFarm;
