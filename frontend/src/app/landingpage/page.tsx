import Header from "./components/Header";
import ShopBySection from "./components/ShopBySection";
import ShopByCategory from "./components/ShopByCategory";
import Description from "./components/Description";
import ExploreCollections from "./components/Collections";
import Enquiry from "./components/Enquiry";
import ShopByPrice from "./components/ShopByPrice";
import EssentialsSection from "./components/EssentialsSection";
import ShopNow from "./components/ShopNow";
import CustomerReviews from "./components/Review";
import Guide from "./components/Guide";
import FAQSection from "./components/AskedQuestions";
import Footer from "./components/Footer"
import LandingVideoPage from "./components/LandingVideoPage";


export default function  LadningPage(){
    return(
        <div>
            <LandingVideoPage/>
            <ShopBySection/>
            <ShopByCategory/>
            <Description/>
            <ExploreCollections/>
            <Enquiry/>
            <ShopByPrice/>
            <EssentialsSection/>
            <ShopNow/>
            <CustomerReviews/>
            <Guide/>
            <FAQSection/>
            <Footer/>
        </div>
    )
}