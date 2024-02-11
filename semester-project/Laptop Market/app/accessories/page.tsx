import Navigation_Bar from "../components/navigation_bar";
import Mobile_Navigation_Bar from "../components/mobile_navigation_bar";

function Accessories_Page()
{
    return(
        <main>
            <Navigation_Bar page_name="Accessories"></Navigation_Bar>
            <Mobile_Navigation_Bar page_name="Accessories"></Mobile_Navigation_Bar>
            <div className="izrada">U Izradi...</div>
        </main>
    );
}

export default Accessories_Page;