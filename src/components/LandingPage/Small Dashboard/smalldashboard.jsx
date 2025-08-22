/* eslint-disable no-unused-vars */
import smheroImg from "../../../assets/svgviewer-png-output.png";
import smDash from "../../../assets/small-dashboard.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight, faRotate } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SmallDashboard = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover max-w-[1200px] mx-auto bg-center mb-[250px] flex items-center rounded-3xl justify-between relative  smDashboard1150 "
        style={{ backgroundImage: `url(${smheroImg})`, height: "450px", backgroundColor:'' }}
      >
        {/* text part left */}
        <div className="max-w-[650px] w-full pl-[100px] z-10 child WidthIncrease smDashTextDiv">
          <h3 className="sm:text-5xl text-3xl text-white font-semibold tracking-wider mb-4">
            Start building today.
          </h3>
          <p className="sm:text-[18px] text-[14px] text-[#A0AEC0] mb-5 max-w-[500px] WidthIncrease">
            Our app eliminates the need for complex spreadsheets, endless email
            threads, empowering businesses to achieve greater efficiency.
          </p>
          {/* btn div */}
          <div className="flex sm:flex-row flex-col gap-5 sm:gap-0 pr-5 sm:pr-0">
          <input
  type="email"
  className="h-[56px] bg-gray-700 rounded-3xl py-4 px-8 text-white placeholder-white sm:w-[340px] mr-1 border border-transparent focus:border-blue-500 focus:outline-none"
  placeholder="your@gmail.com"
/>


            <button className="text-black bg-white py-4 px-8 rounded-3xl border cursor-pointer hover:bg-white/80">
              Join waitlist
            </button>
          </div>
        </div>

        {/* img part right */}
        <img
          src={smDash}
          className="absolute sm:bottom-0  right-[0px]  max-w-[500px] w-full smDashboardImg1150 smDashboardImg370 smDashboardImg540"
          alt="dashboard"
        />
         <div className="smDashboardBgExpand1150 smDashboardexpand540 smDashboardexpand370"></div>
      </div>
     
    </>
  );
};

export default SmallDashboard;
