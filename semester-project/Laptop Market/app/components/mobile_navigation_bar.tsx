"use client"
import Link from 'next/link';
import { useState } from 'react';

interface Parameters 
{
    page_name : string;
}

function Mobile_Navigation_Bar(parameters : Parameters)
{
    const [menu_open, setMenuOpen] = useState(false);
    const [selected_navigation_item, Change_Selected_Navigation_Item] = useState(parameters.page_name);
    const Handle_Click = (next_navigation_item : string) => { Change_Selected_Navigation_Item(next_navigation_item); };
    return(
        <div className="mobile_top_holder">
            <div className="mobile_menu_icon_wrapper">
                <img src={menu_open ? "menu_back.png" : "menu.png"} className="mobile_menu_icon" onClick={(event) => { setMenuOpen(!menu_open); }}></img>
            </div>
            <div className={menu_open ? "mobile_navigation_menu" : "mobile_navigation_menu_hidden"}>
                <ul>
                    <li className={ selected_navigation_item === "Home" ? "navigation_item navigation_item_clicked" : "navigation_item" } onClick={ () => Handle_Click("Home") }>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={ selected_navigation_item === "New Laptops" ? "navigation_item navigation_item_clicked" : "navigation_item" } onClick={ () => Handle_Click("New Laptops") }>
                        <Link href="/new_laptops">New Laptops</Link>
                    </li>
                    <li className={ selected_navigation_item === "Used Laptops" ? "navigation_item navigation_item_clicked" : "navigation_item" } onClick={ () => Handle_Click("Used Laptops") }>
                        <Link href="/used_laptops">Used Laptops</Link>
                    </li>
                    <li className={ selected_navigation_item === "Accessories" ? "navigation_item navigation_item_clicked" : "navigation_item" } onClick={ () => Handle_Click("Accessories") }>
                        <Link href="/accessories">Accessories</Link>
                    </li>
                    <li className={ selected_navigation_item === "Trade-In" ? "navigation_item navigation_item_clicked" : "navigation_item" } onClick={ () => Handle_Click("Trade-In") }>
                        <Link href="/trade-in">Trade-In</Link>
                    </li>
                    <li className={ selected_navigation_item === "Support" ? "navigation_item navigation_item_clicked" : "navigation_item" } onClick={ () => Handle_Click("Support") }>
                        <Link href="/support">Support</Link>
                    </li>
                </ul>
            </div>
            <div className={menu_open ? "mobile_text_holder_hidden" : "mobile_text_holder"}>
                <h1 className="mobile_title">Laptop Market</h1>
                <h1 className="mobile_slogan">Powered by enthusiasts</h1>
            </div>
        </div>
    )
}

export default Mobile_Navigation_Bar;