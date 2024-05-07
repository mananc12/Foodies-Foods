import React from "react";
import AllItems from "./AllItems";
import { CatchyLine } from "./CatchyLine";
import Footer from "./Footer";
import NavBar from "./NavBar";
import App from "./tab-card/App";
import { initialTabs1 as tabs1 } from "./tab-card/ingredients";
import { initialTabs2 as tabs2 } from "./tab-card/ingredients";
import { initialTabs3 as tabs3 } from "./tab-card/ingredients";
import { lines } from "./tab-card/ingredients";
import Run from "./running-words/App";
const Home = () => {
  return (
    <div id="home">
      <NavBar />
      <CatchyLine/>

      {/* ---------------------------------horizontal-line-------------------------------------------------- */}

      <div className="flex mt-8 mb-20 pt-20 pb-5 justify-center text-center items-center">
        <div className="w-24 border-dotted border-black border-t-8"></div>
      </div>

      {/* -------------------------------------tabs------------------------------------------------------ */}

      <div className="flex flex-col justify-center gap-4 items-center max-lg:flex-col mt-16">
        <App tabs={tabs1} desc={lines.desc1} width={{ width: "40%" }} />

        <div className="flex justify-between items-center w-full">
          <div className="w-[40%] mx-auto text-center text-xl font-bold text-gray-500 max-sm:hidden">
            {lines.desc2}
          </div>
          <div className="window mx-auto">
            <App tabs={tabs2} />
          </div>
        </div>

        <App tabs={tabs3} desc={lines.desc3} width={{ width: "40%" }} />
      </div>

      {/* -----------------------------------------horizontal-line------------------------------------------------------ */}

      <div className="flex mt-24 mb-24 justify-center text-center items-center">
        <div className="w-24 border-dotted border-black border-t-8"></div>
      </div>

      {/* -------------------------------------------------------------------------------------------------------------- */}
      <div className="flex flex-col justify-center gap-10 items-center">
        <div className="text-gray-600 font-semibold text-4xl text-center">
          Are you ready to...
        </div>
        <span className="text-gray-500 font-semibold text-2xl text-center">
          Unleash your inner chef with our curated collection of mouth-watering
          recipes!
        </span>
      </div>

      {/* ----------------------------------------running-items------------------------------------------------------- */}

      <div className="flex pt-2 mb-10 justify-center items-center">
        <Run />
      </div>

      {/* -----------------------------------------horizontal-line------------------------------------------------------ */}

      <div className="flex mt-24 mb-24 justify-center text-center items-center">
        <div className="w-24 border-dotted border-black border-t-8"></div>
      </div>

      {/* --------------------------------------------all-items---------------------------------------------------- */}
      <div id="allRecipe">
        <AllItems />
      </div>

      {/* ------------------------------------------horizontal-line------------------------------------------------------ */}

      <div className="flex pt-5 pb-5 justify-center text-center items-center">
        <div className="w-24 border-dotted border-black border-t-8"></div>
      </div>

      {/* --------------------------------------------footer----------------------------------------------------- */}

      <Footer />
    </div>
  );
};

export default Home;
