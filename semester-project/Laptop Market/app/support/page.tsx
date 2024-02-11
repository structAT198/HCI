import Navigation_Bar from '../components/navigation_bar';
import Mobile_Navigation_Bar from '../components/mobile_navigation_bar';

async function Support_Page()
{
    return(
        <main>
            <Navigation_Bar page_name="Support"></Navigation_Bar>
            <Mobile_Navigation_Bar page_name="Support"></Mobile_Navigation_Bar>
            <div className="support_holder">
                <div className="support_box">
                    <div className="support_text_holder">
                        <h2 className="support_box_title">About Us</h2>
                        <h3 className="support_box_content">We are a 100 years old company. Specialized in selling new and used laptops. We offer
                        a large variety of products including the accessories. Our company also offers trading-in used items. All our items
                        come with a one year warranty. You can be sure the item your purchase will be satisfactory.</h3>
                    </div>
                </div>
                <div className="support_box">
                    <div className="support_text_holder">
                        <h2 className="support_box_title">Payment Options</h2>
                        <h3 className="support_box_content">We support VISA, Mastercard, American Express and Discover</h3>
                    </div>
                    <div className="credit_card_holder">
                        <div className="credit_card_logo" id="visa"></div>
                        <div className="credit_card_logo" id="mastercard"></div>
                        <div className="credit_card_logo" id="american_express"></div>
                        <div className="credit_card_logo" id="discover"></div>
                    </div>
                </div>
                <div className="support_box">
                    <div className="support_text_holder">
                        <h2 className="support_box_title">Delivery</h2>
                        <h3 className="support_box_content">We ship worldwide. Excluded areas include: Russia, Ukraine, Israel, Yemen. Ships within a day, delivery date is location dependant.</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Location</th>
                                    <th>Delivery Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mainland USA:</td>
                                    <td>1-3 days</td>
                                </tr>
                                <tr>
                                    <td>Europe:</td>
                                    <td>3-5 days</td>
                                </tr>
                                <tr>
                                    <td>Asia:</td>
                                    <td>5-7 days</td>
                                </tr>
                                <tr>
                                    <td>Africa:</td>
                                    <td>7-14 days</td>
                                </tr>
                                <tr>
                                    <td>Other:</td>
                                    <td>7-20 days</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="support_box">
                    <div className="support_text_holder">
                        <h2 className="support_box_title">Contact Us</h2>
                        <div className="support_box_content">Mobile:&nbsp;
                            <div style={{display: 'inline-block', color: 'blueviolet'}}>+1 123 1234567</div>
                        </div>
                        <div className="support_box_content">e-Mail:&nbsp;
                            <div style={{display: 'inline-block', color: 'blueviolet'}}>support@laptopmarket.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Support_Page;