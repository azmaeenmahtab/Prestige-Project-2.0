import Hero from "./components/LandingPage/Hero/hero";
import Dashboard from "./components/LandingPage/Dashboard/dashboard";
import Framer from "./components/LandingPage/Framer/framer";
import ProductFeature from "./components/LandingPage/ProductFeature/productfeature";
import AnalyticalFeature from "./components/LandingPage/AnalyticalFeature/analyticalfeature";
import AnimatedFeature from "./components/LandingPage/AnimatedFeature/animatedfeature";
import StaticFeature from "./components/LandingPage/Static Feature/staticFeature";
import SpeedFeature from "./components/LandingPage/Speed Feature/speedFeature";
import Pricing from "./components/LandingPage/Pricing Cards/pricing";
import Review from "./components/LandingPage/Review Section/review";
import AccordionUsage from "./components/LandingPage/FAQ/accordion";
function App() {
 
  return (
    <>
       <Hero />
       <Dashboard />
       <Framer />
       <ProductFeature />
       <AnalyticalFeature />
       <AnimatedFeature />
       <StaticFeature />
       <SpeedFeature />
       <Pricing />
       <Review />
       <AccordionUsage />
    </>
  )
}

export default App
