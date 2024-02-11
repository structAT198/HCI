import Navigation_Bar from '../components/navigation_bar';
import Mobile_Navigation_Bar from '../components/mobile_navigation_bar';
import { Get_All_Laptops } from '../CMS';

async function Used_Laptops_Page()
{
    const all_laptops = await Get_All_Laptops();
    const used_laptops = [];
    for(let i = 0; i < all_laptops.length; i++)
    {
        if(all_laptops[i].state == false)
        {
            used_laptops.push(all_laptops[i]);
        }
    }
    return(
        <main>
            <Navigation_Bar page_name="Used Laptops"></Navigation_Bar>
            <Mobile_Navigation_Bar page_name="Used Laptops"></Mobile_Navigation_Bar>
            <div className="laptops_card_holder">
                {used_laptops.map((laptop) => {
                    return(
                    <div className="laptop_card">
                        <h1 className="laptop_card_name">{laptop.name}</h1>
                        <div className="laptop_card_divison_line"></div>
                        <img src={laptop.image.url} className="laptop_card_image"></img>
                        <p className="laptop_card_description">{laptop.description}</p>
                        <button className={laptop.availability >0 ? "laptop_card_buy_button" : "laptop_card_buy_button_out"}>{laptop.availability >0 ? "Buy" : "Out Of Stock"}</button>
                    </div>
                    );
                })}
            </div>
        </main>
    );
}

export default Used_Laptops_Page;