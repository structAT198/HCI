"use client"
import Navigation_Bar from './components/navigation_bar'
import Mobile_Navigation_Bar from './components/mobile_navigation_bar'
import "@fontsource/inter/600.css";
import "@fontsource/inter";

function Home_Page()
{
    return(
        <main>
            <Navigation_Bar page_name="Home"></Navigation_Bar>
            <Mobile_Navigation_Bar page_name="Home"></Mobile_Navigation_Bar>
            <div className="big_section">
                <div className="left_side">
                    <div>
                        <h1 className="left_side_title">Laptop Market</h1>
                        <h1 className="left_side_slogan">Powered by enthusiasts</h1>
                        <input type="text" placeholder="I want to buy..." className="left_side_input"></input>
                    </div>
                </div>
                <div className="right_side">
                    <img src="home_main_image.png" className="right_side_image"></img>
                </div>
            </div>
        </main>
    )
}

export default Home_Page;