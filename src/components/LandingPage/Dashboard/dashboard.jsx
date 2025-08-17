import DashboardPic from "../../../assets/dashbard-img.webp"
import person1 from '../../../assets/segun_adebayo.jpg'
import person2 from '../../../assets/1500684.jpeg'
import person3 from '../../../assets/1_tv9pIQPhwumDnYBfCoapYg.jpg'
import person4 from '../../../assets/100200.jpeg'
const Dashboard = () => {
    return <>
    <div className="flex items-center justify-center relative px-5 md:px-5">      
        <img src={DashboardPic} alt="Dashboard" className="md:w-[1210px] h-auto" />

        <div className="flex absolute top-[10px] sm:top-[40px] ">
            <img
              className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] border-2 border-white rounded-full object-cover z-10"
              src={person1}
              alt=""
            />
            <img
              className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] m border-2 border-white rounded-full object-cover -ml-2 z-20"
              src={person2}
              alt=""
            />
            <img
              className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] border-2 border-white rounded-full object-cover -ml-2 z-30"
              src={person3}
              alt=""
            />
            <img
              className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] border-2 border-white rounded-full object-cover -ml-2 z-40"
              src={person4}
              alt=""
            />
        </div>

    </div>

    </>
}

export default Dashboard

