import Navigation_Bar from '../components/navigation_bar';
import Mobile_Navigation_Bar from '../components/mobile_navigation_bar';
import { Get_All_Laptops } from '../CMS';
import { headers } from 'next/headers';

async function Search_Page()
{
    let search_data : string = "empty";
    let search_data_filtered : string = "empty";
    const all_headers = headers();
    if((all_headers != undefined) && (all_headers != null))
    {
        const URL = all_headers.get('referer');
        if((URL != undefined) && (URL != null))
        {
            search_data = URL.split("=")[1];
            if(search_data != undefined)
            {
                search_data_filtered = search_data.toLowerCase();
                console.log(search_data_filtered);
            }
        }
    }
    const all_laptops = await Get_All_Laptops();
    const wanted_laptops = [];
    for(let i = 0; i < all_laptops.length; i++)
    {
        if(all_laptops[i].name.toLowerCase().includes(search_data_filtered, 0))
        {
            wanted_laptops.push(all_laptops[i]);
        }
    }
    return(
        <main>
            <Navigation_Bar page_name="Home"></Navigation_Bar>
            <Mobile_Navigation_Bar page_name="Home"></Mobile_Navigation_Bar>
            <div className="search_title">Search Results:</div>
            <div className={ search_data_filtered === "empty" ? "search_empty" : "search_empty_hidden" }>No results found.</div>
            <div className="laptops_card_holder">
                {wanted_laptops.map((laptop) => {
                    return(
                    <div className="laptop_card">
                        <h1 className="laptop_card_name">{laptop.name}</h1>
                        <div className="laptop_card_divison_line"></div>
                        <img src={laptop.image.url} className="laptop_card_image"></img>
                        <p className="laptop_card_description">{laptop.description}</p>
                        <button className={laptop.availability > 0 ? "laptop_card_buy_button" : "laptop_card_buy_button_out"}>{laptop.availability >0 ? "Buy" : "Out Of Stock"}</button>
                    </div>
                    );
                })}
            </div>
        </main>
    );
}

export default Search_Page;