import React from "react";
import profileImage from "../assets/profile.jpg";
import "../assets/DescSection.css";

const DescSection = () => {
  return (
    <div className="relative bg-[#758694] grid grid-cols-2">
      {/* <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div> */}
      <div className="flex mx-auto max-w-2xl py-32 col-span-1 sm:py-48 lg:py-72 items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#FFF8F3] sm:text-4.5xl font-merri tracking-wide">
            <span className="text-[#F7E7DC] font-merri tracking-wide">
              I'M HANDHYKA PRAYOGA.
            </span>
            <br />
            CIVIL ENGINEER
          </h1>
          <p className="mt-6 mb-6 text-lg leading-8 text-[#FFF8F3]">
            I am a fresh graduated from University of Riau, age 23 years have 1
            year work experience have a good personality and very quickly adapt
            to new environment. I have many soft skills related to civil
            engineering.
          </p>
          <div className="flex justify-center">
            <div className="relative max-w-96 rounded-full px-3 py-1 text-sm leading-6 text-[#F7E7DC] ring-1 ring-[#F7E7DC] hover:ring-[#FFF8F3]">
              <a href="#" className="font-semibold text-[#F7E7DC]">
                <span aria-hidden="true" className="absolute inset-0" />
                More About Me <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center image-section col-span-1">
        <div>
          <img
            class="max-w-lg rounded-xl"
            src={profileImage}
            alt="image description"
          />
        </div>
      </div>
      {/* <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div> */}
    </div>
  );
};

export default DescSection;
