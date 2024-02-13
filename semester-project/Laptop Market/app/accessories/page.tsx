import Navigation_Bar from "../components/navigation_bar";
import Mobile_Navigation_Bar from "../components/mobile_navigation_bar";
import { Get_All_Accessories } from "../CMS";

async function Accessories_Page()
{
    const all_accessories = await Get_All_Accessories();
    return(
        <main>
            <Navigation_Bar page_name="Accessories"></Navigation_Bar>
            <Mobile_Navigation_Bar page_name="Accessories"></Mobile_Navigation_Bar>
            <div className="accessories_card_holder">
                {all_accessories.map((accessory) => {
                    return(
                    <div className="accessory_card">
                        <h1 className="accessory_card_name">{accessory.name}</h1>
                        <div className="accessory_card_divison_line"></div>
                        <img src={accessory.image.url} className="accessory_card_image"></img>
                        <p className="accessory_card_description">{accessory.description}</p>
                        <div className="accessory_button_container">
                            <button className={accessory.availability >0 ? "accessory_card_buy_button" : "accessory_card_buy_button_out"}>{accessory.availability >0 ? "Buy" : "Out Of Stock"}</button>
                            <div className="accessory_count">{accessory.availability}</div>
                        </div>
                    </div>
                    );
                })}
            </div>
        </main>
    );
}

export default Accessories_Page;