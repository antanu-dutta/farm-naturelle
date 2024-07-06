import React from "react";
import styles from "../css/AboutUsFounder.module.css";

function AboutusFounder() {
  return (
    <div className={`${styles["about-us-founder"]}`}>
      <div className="container">
        <div className="flex flex-col laptop:flex-row gap-10 items-center">
          <div className="flex-1  p-6 bg-white rounded-lg">
            <span className="text-normal tracking-widest text-gray-700 font-semibold block mb-4">
              OUR FOUNDER
            </span>
            <h2 className="text-black text-3xl font-semibold leading-snug mb-4">
              Meet Our Visionary Founder <br />
              <span className="text-primary">Rajneesh Chawla</span>
            </h2>
            <p className="text-xl text-black font-medium mb-4">
              He is the Visionary Behind Our Farm Naturelle
            </p>
            <p className="text-sm leading-snug text-gray-800 tracking-wider mb-4">
              Mr. Rajneesh Chawla, our seasoned entrepreneur and the driving
              force behind Farm Naturelle, brings three decades of experience to
              our journey. His unwavering dedication to organic practices,
              sustainability, and community well-being defines Farm Naturelle's
              ethos. Inspired by a visit to a farm in Ram Nagar, the seeds of
              our mission were sown. Today, Mr. Chawla leads us toward a
              healthier, happier, and more sustainable future, offering products
              that reflect his passion for organic living and a better world for
              all. Join us on this natural journey, guided by our founder's
              vision.
            </p>
            <button className="primary-btn">LISTEN RAJNEESH JI STORY</button>
          </div>
          <div className="flex-1">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://farmnaturelle.com/cdn/shop/files/image_12445.jpg?v=1697614609"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutusFounder;
