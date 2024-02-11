import Navigation_Bar from '../components/navigation_bar';
import Mobile_Navigation_Bar from '../components/mobile_navigation_bar';
import { Get_All_Trade_In_Laptops } from '../CMS';
import Price_Estimator from '../components/price_estimator';

async function Trade_In_Page()
{
    const all_trade_in_laptops = await Get_All_Trade_In_Laptops();
    return(
        <main>
            <Navigation_Bar page_name="Trade-In"></Navigation_Bar>
            <Mobile_Navigation_Bar page_name="Trade-In"></Mobile_Navigation_Bar>
            <Price_Estimator all_trade_in_laptops={all_trade_in_laptops}></Price_Estimator>
        </main>
    );
}

export default Trade_In_Page;