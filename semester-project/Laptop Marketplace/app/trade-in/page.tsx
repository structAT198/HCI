import Navigation_Bar from '../components/navigation_bar';
import Mobile_Navigation_Bar from '../components/mobile_navigation_bar';

function Trade_In_Page()
{
    return(
        <main>
            <Navigation_Bar page_name="Trade-In"></Navigation_Bar>
            <Mobile_Navigation_Bar page_name="Trade-In"></Mobile_Navigation_Bar>
            <div className="izrada">U Izradi...</div>
        </main>
    );
}

export default Trade_In_Page;