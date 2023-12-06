"use client"
import Image from 'next/image'
import Navigation_Bar from './components/navigation_bar'
import "@fontsource/inter/600.css";
import "@fontsource/inter";
import { Alegreya } from 'next/font/google';
import { useState } from 'react';

function Home_Page()
{
    const [menu_open, setMenuOpen] = useState(false);
    return(
        <main>
            <Navigation_Bar></Navigation_Bar>
            <div className="mobile_top_holder">
                <img src={menu_open ? "menu.png" : "menu_back.png"} className="mobile_menu_icon" onClick={(event) => { setMenuOpen(!menu_open); }}></img>
                <div className={menu_open ?  "mobile_navigation_menu_hidden" : "mobile_navigation_menu"}></div>
                <div className={menu_open ?  "mobile_text_holder" : "mobile_text_holder_hidden"}>
                    <h1 className="mobile_title">Laptop Market</h1>
                    <h1 className="mobile_slogan">Powered by enthusiasts</h1>
                </div>
            </div>
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