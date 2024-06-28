import React from "react";

function Benifits() {
  const benifitContent = [
    {
      title: "Pesticides & chemicals free",
      description:
        " At Farm Naturelle, we believe in purity from seed to harvest. Pesticide-free, chemical-free. Experience nature'strue taste, no harmful residues. Your well-being, as pure as our products.",
      border: true,
    },
    {
      title: "Better for your Health & Planet",
      description:
        "At Farm Naturelle, we prioritize well-being and the planet. All-natural, chemical-free products for a healthier you and a greener Earth.",
      border: true,
    },
    {
      title: "Eat Local, Eat Indian",
      description: `Savor India's rich flavors at Farm Naturelle, celebrating "Eat local, eat Indian." We source locally for sustainable, traditional agriculture, promoting community support.`,
      border: false,
    },
  ];
  return (
    <div>
      <div className="benifits">
        <div className="lg:container">
          <div className="benifit-container flex  flex-col items-center">
            <p className="text-gray-800 text-sm font-semibold -tracking-tighter mb-5">
              WHY FARM NATURELLE
            </p>
            <h2 className="text-2xl lg:text-4xl text-black font-semibold mb-5">
              We are Organic & Natural
            </h2>
            <div className="benifit-container-content relative w-full">
              <img
                src="https://farmnaturelle.com/cdn/shop/files/Group_14856958.jpg?v=1703231499"
                alt=""
                className="hidden lg:block"
              />
              <img
                src="https://farmnaturelle.com/cdn/shop/files/farm_2.png?v=1703231517"
                alt=""
                className="lg:hidden w-full"
              />
              <div className="flex gap-10 lg:gap-3 flex-col lg:flex-row absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full p-4 lg:px-10 text-white">
                {benifitContent.map((item, index) => (
                  <div
                    className={`px-7  ${item.border && "lg:border-r"} `}
                    key={index}
                  >
                    <p className="text-white md:text-lg lg:text-base font-bold text-xl mb-3">
                      {item.title}
                    </p>
                    <p className="text-sm md:text-lg lg:text-sm text-gray-300 ">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benifits;
