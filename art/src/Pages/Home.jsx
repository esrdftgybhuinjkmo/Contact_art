import { Banner } from "../components/Home/Banner/Banner";
import { Us } from "../components/Home/Banner/Us";
import { Brands } from "../components/Home/Greate/Brands";
import { Greate } from "../components/Home/Greate/Greate";
import { Interno } from "../components/Home/Interno/Interno";
import { News } from "../components/Home/News/News";
import { Number } from "../components/Home/News/Number";
import { Kichan } from "../components/Home/Plan/Kichan";
import {Plan} from "../components/Home/Plan/Plan";



export const Home = () => {
    return (
        <div>
           
            <Banner/>
            <Plan/>
            <Greate/>
            <Us/>
            <Brands/>
            <Kichan/>
            <Number/>
            <News/>
            <Interno/>
           
           
        </div>
    );
}

