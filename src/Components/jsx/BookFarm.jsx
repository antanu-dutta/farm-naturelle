import React from "react";
import styles from "../css/BookFarm.module.css";

function BookFarm() {
  const text = [
    "The farms have over 5000+ fruit trees, several vegetables and also cash crop. Morning Evening one can see thousands of birds of different species chirping and these tree tops are creating an amazingly beautiful environment.",
    "Witness humans, birds, and lush greens in perfect harmony, a model of sustainable living.",
    "Engage with farmers and beekeepers, uncovering ethical and sustainable practices.",
  ];
  const inputField = [
    { type: "text", placeholder: "First Name" },
    { type: "email", placeholder: "Enter Your Email Address" },
    { type: "number", placeholder: "Contact Number" },
    { type: "date", placeholder: "dd-mm-yyyy" },
  ];
  const bookingDetails = [
    {
      firstText: "2 Hour Day Visit",
      secondText: "",
      price: "599",
      radioName: "select",
    },
    {
      firstText: "Stay at Resort Room 1",
      secondText: "(1 King Size Bed)",
      price: "3500 Per Night",
      radioName: "select",
    },
    {
      firstText: "Stay at Resort",
      secondText: "Room 1 (2 King Size Bed)",
      price: "5500 Per Night",
      radioName: "select",
    },
  ];

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`pt-[347px] pb-[67px] ${styles["book-farm"]}`}>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <span className="text-[#cbd82d] block mb-3 text-sm font-semibold tracking-wider">
              EXPERIENCE THE BEAUTY OF NATURE
            </span>
            <h2 className="text-white text-4xl font-semibold mb-3">
              Book Your Farm Visit
            </h2>
            <span className="text-xl text-gray-500 block mb-3">
              During the Visit
            </span>
            {text.map((item, index) => (
              <p
                key={index}
                className="mb-5 text-[15px] text-gray-200 font-medium"
              >
                {item}
              </p>
            ))}
          </div>
          <div className="flex-1 border border-white p-6">
            <form className="flex gap-5 flex-col" onSubmit={handleOnSubmit}>
              {inputField.map((item, index) => (
                <input
                  key={index}
                  type={item.type}
                  className="py-3 px-6 border bg-transparent text-white font-medium border-white outline-none"
                  placeholder={item.placeholder}
                />
              ))}
              {bookingDetails.map((item, index) => (
                <div
                  key={index}
                  className="py-3 px-6  text-white font-medium border-white  border bg-transparent flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="me-4"
                      name={item.radioName}
                    />
                    <span>
                      {item.firstText} <br /> {item.secondText}
                    </span>
                  </div>
                  <p className="text-white text-base">
                    &#8377; {item.price}{" "}
                    <span className="text-[#95bd58] text-lg"></span>
                  </p>
                </div>
              ))}
              <button
                type="submit"
                className="w-full rounded py-3 bg-primary text-white font-semibold"
              >
                BOOK A FREE VISIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookFarm;
