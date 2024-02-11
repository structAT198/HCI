"use client"
import Navigation_Bar from './components/navigation_bar'
import Mobile_Navigation_Bar from './components/mobile_navigation_bar'
import { useRouter } from 'next/navigation';

function Home_Page()
{
    const router = useRouter();
    function Handle_Search_Enter(event : EventTarget)
    {
        let search_value : string = (event as HTMLInputElement).value;
        router.push("./search?search=" + search_value);
    }

    return(
        <main>
            <Navigation_Bar page_name="Home"></Navigation_Bar>
            <Mobile_Navigation_Bar page_name="Home"></Mobile_Navigation_Bar>
            <div className="big_section">
                <div className="left_side">
                    <div>
                        <h1 className="left_side_title">Laptop Market</h1>
                        <h1 className="left_side_slogan">Powered by enthusiasts</h1>
                        <input type="text" placeholder="I want to buy..." className="left_side_input" onKeyDown={ event => { if(event.key == "Enter") { Handle_Search_Enter(event.target); } } }></input>
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