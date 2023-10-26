"use client";
import next from 'next';
import Link from 'next/link'
import { useState } from 'react'

function Navigation_Bar()
{
    const [selected_navigation_item, Change_Selected_Navigation_Item] = useState("");
    const Handle_Click = (next_navigation_item : string) => { Change_Selected_Navigation_Item(next_navigation_item); console.log(selected_navigation_item)};
    return(
        <nav>
            <ul>
                <li className={ selected_navigation_item === "Home" ? "navigation_item navigation_item_clicked" : "navigation_item" } onClick={ () => Handle_Click("Home") }>
                    <Link href="/">Home</Link>
                </li>
                <li className={ selected_navigation_item === "Showcase" ? "navigation_item navigation_item_clicked" : "navigation_item" } onClick={ () => Handle_Click("Showcase") }>
                    <Link href="/showcase">Showcase</Link>
                </li>
                <li className={ selected_navigation_item === "About" ? "navigation_item navigation_item_clicked" : "navigation_item" } onClick={ () => Handle_Click("About") }>
                    <Link href="/about">About</Link>
                </li>
                <li className={ selected_navigation_item === "Contact" ? "navigation_item navigation_item_clicked" : "navigation_item" } onClick={ () => Handle_Click("Contact") }>
                    <Link href="/contact">Contact</Link>
                </li>
                <li className={ selected_navigation_item === "Blog" ? "navigation_item navigation_item_clicked" : "navigation_item" } onClick={ () => Handle_Click("Blog") }>
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation_Bar;