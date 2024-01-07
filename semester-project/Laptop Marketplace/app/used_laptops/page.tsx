import Navigation_Bar from '../components/navigation_bar';
import Mobile_Navigation_Bar from '../components/mobile_navigation_bar';

function Used_Laptops_Page()
{
    return(
        <main>
            <Navigation_Bar page_name="Used Laptops"></Navigation_Bar>
            <Mobile_Navigation_Bar page_name="Used Laptops"></Mobile_Navigation_Bar>
            <div className="laptops_card_holder">
                <div className="laptop_card">
                    <h1 className="laptop_card_name">Macbook Pro 16'</h1>
                    <div className="laptop_card_divison_line"></div>
                    <img src="macbook_pro_16_i7.png" className="laptop_card_image"></img>
                    <p className="laptop_card_description">
                        Intel Core i7 CPU<br></br>
                        16 GB RAM<br></br>
                        512 GB SSD
                    </p>
                    <button className="laptop_card_buy_button">Buy</button>
                </div>
            </div>
        </main>
    );
}

export default Used_Laptops_Page;