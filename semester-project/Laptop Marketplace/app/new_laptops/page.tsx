import Navigation_Bar from '../components/navigation_bar';
import Mobile_Navigation_Bar from '../components/mobile_navigation_bar';

function New_Laptops_Page()
{
    return(
        <main>
            <Navigation_Bar page_name="New Laptops"></Navigation_Bar>
            <Mobile_Navigation_Bar page_name="New Laptops"></Mobile_Navigation_Bar>
            <div className="laptops_card_holder">
                <div className="laptop_card">
                    <h1 className="laptop_card_name">Macbook Pro 16'</h1>
                    <div className="laptop_card_divison_line"></div>
                    <img src="macbook_pro_16_m3.png" className="laptop_card_image"></img>
                    <p className="laptop_card_description">
                        M3 Pro CPU<br></br>
                        18 GB RAM<br></br>
                        512 GB SSD
                    </p>
                    <button className="laptop_card_buy_button">Buy</button>
                </div>
                <div className="laptop_card">
                    <h1 className="laptop_card_name">Macbook Pro 14'</h1>
                    <div className="laptop_card_divison_line"></div>
                    <img src="macbook_pro_14_m3.png" className="laptop_card_image"></img>
                    <p className="laptop_card_description">
                        M3 CPU<br></br>
                        8 GB RAM<br></br>
                        512 GB SSD
                    </p>
                    <button className="laptop_card_buy_button">Buy</button>
                </div>
                <div className="laptop_card">
                    <h1 className="laptop_card_name">Macbook Pro 13'</h1>
                    <div className="laptop_card_divison_line"></div>
                    <img src="macbook_pro_13_m2.png" className="laptop_card_image"></img>
                    <p className="laptop_card_description">
                        M2 Pro CPU<br></br>
                        8 GB RAM<br></br>
                        256 GB SSD
                    </p>
                    <button className="laptop_card_buy_button_out">Out Of Stock</button>
                </div>
            </div>
        </main>
    );
}

export default New_Laptops_Page;