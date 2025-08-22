import DashboardPic from "../../../assets/dashbard-img.webp"
import AnalyticPic from '../../../assets/ai-line.webp'
const AnalyticalFeature = () => {
  return (
    <div className="px-5 sm:mb-[284px] mb-[200px] bg-[#101010] text-white">
      {/* Text content */}
      <div className="text-center mb-[80px] max-w-[720px] mx-auto flex flex-col items-center">
        <div className="flex justify-center mb-6 items-center gap-[5px] border border-teal-400/60 w-[100px] rounded-full px-[5px] py-[3px] bg-teal-400/10 text-teal-400">
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 256 256"
            height="1rem"
            width="1rem"
            xmlns="http://www.w3.org/2000/svg"
            className="text-teal-400"
          >
            <path d="M219.68,117.26a12,12,0,0,0-7.47-8.5L157.77,88.35l14-70A12,12,0,0,0,151.23,7.81l-112,120a12,12,0,0,0,4.56,19.43l54.44,20.41-14,70a12,12,0,0,0,20.54,10.54l112-120A12,12,0,0,0,219.68,117.26ZM116.05,200.93l7.72-38.58a12,12,0,0,0-7.56-13.59L69,131.07l70.93-76-7.72,38.58a12,12,0,0,0,7.56,13.59L187,124.93Z" />
          </svg>
          <span>Feature</span>
        </div>
        <h3 className="sm:text-5xl text-[28px] font-bold mb-4 tracking-wider ">And many other features</h3>
        <p className="text-gray-400 text-[14px] sm:text-[18px] max-w-[750px]">
        We take immense pride in presenting you with a comprehensive array of powerful tools and capabilities that are designed to elevate your experience and help you achieve more.        </p>
      </div>

      {/* Card container */}
      <div className="grid grid-cols-3 gap-5 max-w-[1280px] px-[30px] mx-auto space-y-4 graphCards1050 graphCards850 graphCardsCont900 overflow-x-hidden" >
        {/* col span 2 card */}
        <div className="bg-[#171923] md:p-[40px] p-[20px] border border-[#2D3748] rounded-3xl max-w-[790px] col-span-2 graphDash1050">
            <div className="bg-gray-800 md:p-[40px] p-[20px] rounded-[24px] pb-0 overflow-hidden md:h-[300px] sm:h-[300px] ">
                <img src={DashboardPic} alt="" />
            </div>
            {/* text div */}
            <div className="mt-[20px]">
                <h4 className="text-[18px] font-semibold">Dashboard</h4>
                <p className="text-gray-400">Our interactive dashboard provides an all-encompassing view of your projects, tasks, and collaborations. Monitor deadlines, track milestones, and stay updated on team activities.</p>
            </div>

        </div>
        {/* small card */}

        <div className="bg-[#171923] p-[20px] sm:p-[40px] rounded-3xl border border-[#2D3748] w-full">
          <div className="bg-gray-800 overflow-hidden rounded-3xl group mx-auto w-full max-w-[288px]">
            <div className="p-5 text-[14px] text-teal-400 ">
              <h6 className="absolute transition-opacity group-hover:opacity-0 ">14.21%</h6>
              <h6 className="absolute opacity-0 transition-opacity group-hover:opacity-100">21.22%</h6>
            </div>
            <div className="relative w-[500px] h-[260px] transition-transform duration-700 ease-in-out group-hover:-translate-x-[212px]">
              <img src={AnalyticPic} alt="Analytics" className="w-full object-cover" />
            </div>
          </div>
          <div className="mt-[20px] sm:text-start text-center">
            <h4 className="text-[18px] font-semibold">Simple analytics</h4>
            <p className="text-gray-400">Make informed decisions backed by data through our analytics tools.</p>
          </div>
        </div>



        <div className="bg-[#171923] p-[20px] sm:p-[40px] rounded-3xl border border-[#2D3748] w-full">
          <div className="bg-gray-800 overflow-hidden rounded-3xl group mx-auto w-full max-w-[288px]">
            <div className="p-5 text-[14px] text-teal-400 ">
              <h6 className="absolute transition-opacity group-hover:opacity-0 ">14.21%</h6>
              <h6 className="absolute opacity-0 transition-opacity group-hover:opacity-100">21.22%</h6>
            </div>
            <div className="relative w-[500px] h-[260px] transition-transform duration-700 ease-in-out group-hover:-translate-x-[212px]">
              <img src={AnalyticPic} alt="Analytics" className="w-full object-cover" />
            </div>
          </div>
          <div className="mt-[20px] sm:text-start text-center">
            <h4 className="text-[18px] font-semibold">Simple analytics</h4>
            <p className="text-gray-400">Make informed decisions backed by data through our analytics tools.</p>
          </div>
        </div>


        <div className="bg-[#171923] p-[20px] sm:p-[40px] rounded-3xl border border-[#2D3748] w-full">
          <div className="bg-gray-800 overflow-hidden rounded-3xl group mx-auto w-full max-w-[288px]">
            <div className="p-5 text-[14px] text-teal-400 ">
              <h6 className="absolute transition-opacity group-hover:opacity-0 ">14.21%</h6>
              <h6 className="absolute opacity-0 transition-opacity group-hover:opacity-100">21.22%</h6>
            </div>
            <div className="relative w-[500px] h-[260px] transition-transform duration-700 ease-in-out group-hover:-translate-x-[212px]">
              <img src={AnalyticPic} alt="Analytics" className="w-full object-cover" />
            </div>
          </div>
          <div className="mt-[20px] sm:text-start text-center">
            <h4 className="text-[18px] font-semibold">Simple analytics</h4>
            <p className="text-gray-400">Make informed decisions backed by data through our analytics tools.</p>
          </div>
        </div>


        <div className="bg-[#171923] p-[20px] sm:p-[40px] rounded-3xl border border-[#2D3748] w-full">
          <div className="bg-gray-800 overflow-hidden rounded-3xl group mx-auto w-full max-w-[288px]">
            <div className="p-5 text-[14px] text-teal-400 ">
              <h6 className="absolute transition-opacity group-hover:opacity-0 ">14.21%</h6>
              <h6 className="absolute opacity-0 transition-opacity group-hover:opacity-100">21.22%</h6>
            </div>
            <div className="relative w-[500px] h-[260px] transition-transform duration-700 ease-in-out group-hover:-translate-x-[212px]">
              <img src={AnalyticPic} alt="Analytics" className="w-full object-cover" />
            </div>
          </div>
          <div className="mt-[20px] sm:text-start text-center">
            <h4 className="text-[18px] font-semibold">Simple analytics</h4>
            <p className="text-gray-400">Make informed decisions backed by data through our analytics tools.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AnalyticalFeature;
