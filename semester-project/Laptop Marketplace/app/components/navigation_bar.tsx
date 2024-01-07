"use client";
import next from 'next';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import Link from 'next/link'
import { useState } from 'react'

interface Parameters 
{
    page_name : string;
}

function Navigation_Bar(parameters : Parameters)
{
    const [selected_navigation_item, Change_Selected_Navigation_Item] = useState(parameters.page_name);
    const Handle_Click = (next_navigation_item : string) => { Change_Selected_Navigation_Item(next_navigation_item); };
    return(
        <div className="navigation_bar">
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
    );
}

export default Navigation_Bar;