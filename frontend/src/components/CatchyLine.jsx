import React from "react";

export const CatchyLine = () => {
  return (
    <div className="mx-auto lg:p-10">
    <div className="flex relative w-full h-[60vh] min-[450px]:h-[90vh] justify-center items-center ">
      <div className="flex justify-center items-center min-[450px]:blur-[2px] brightness-50 p-5 shadow-xl">
        <img
          src="https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="img"
          className="w-[33%] h-full overflow-hidden"
        />
        <img
          src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="img"
          className="w-[33%] h-full overflow-hidden"
        />
        <img
          src="https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="img"
          className="w-[33%] h-full overflow-hidden"
        />
      </div>
      <div className="absolute flex flex-col text-center  max-md:text-xl font-semibold">
        <span className="text-white text-[18px] min-[450px]:text-2xl sm:text-4xl lg:text-6xl">
          Embark on a culinary journey with us
        </span>
        <span className="text-white text-[12px] min-[450px]:text-[15px] md:text-2xl lg:text-4xl">
          Explore, Create, and Savor
        </span>
        <span className="text-white text-[10px] min-[450px]:text-[12px] md:text-[15px] lg:text-lg">
          Delicious recipes tailored to your taste buds!
        </span>
      </div>
    </div>
    </div>
  );
};
