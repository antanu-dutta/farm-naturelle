import React from "react";

function AboutTimeLine() {
  const aboutTimeLineContent = [
    {
      year: "2012",
      title: "Seeds of Inspiration",
      text: "Rajneesh Chawla's visit to Ramnagar sparks the vision of Farm Naturelle, an idea rooted in organic farming.",
    },
    {
      year: "2014",
      title: "The Birth of Farm Naturelle",
      text: "Orchards are thoughtfully cultivated, the brand takes vibrant shape, and natural products find their way into homes.",
    },
    {
      year: "2018",
      title: "Community Grows",
      text: "Over 400 farmer families and beekeepers unite with Farm Naturelle, achieving Sedex certification for ethical practices.",
    },
    {
      year: "Present",
      title: "Health and Happiness",
      text: "Farm Naturelle's legacy of quality, care, and customer satisfaction continues to flourish, fostering well-being and harmony with nature.",
    },
  ];
  return (
    <div className="p-16">
      <div className="container">
        <div className="flex flex-col laptop:flex-row  gap-4">
          {aboutTimeLineContent.map((item, index) => (
            <div
              className="flex flex-1 items-center justify-center flex-col"
              key={index}
            >
              <h2 className="text-5xl text-primary mb-4">{item.year}</h2>
              <div className="w-[25px] h-[25px] rounded-full bg-primary mb-4"></div>
              <div className="p-4 min-h-[150px] border border-primary rounded-lg">
                <span className="text-primary text-base font-semibold underline block text-center mb-3">
                  {item.title}
                </span>
                <p className="text-center text-gray-700 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutTimeLine;
