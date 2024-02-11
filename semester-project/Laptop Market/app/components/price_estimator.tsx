"use client"
import { useState } from 'react';
import { Trade_In_Laptop } from '../CMS';

interface Properties
{
    all_trade_in_laptops : Trade_In_Laptop[]
}

function Price_Estimator(properties : Properties)
{
    const [button_0_state, Set_Button_0_State] = useState(false);
    const [button_1_state, Set_Button_1_State] = useState(false);
    const [button_2_state, Set_Button_2_State] = useState(false);
    const [button_3_state, Set_Button_3_State] = useState(false);
    const [button_4_state, Set_Button_4_State] = useState(false);
    const [button_5_state, Set_Button_5_State] = useState(false);
    const [current_laptop, Set_Current_Laptop] = useState(properties.all_trade_in_laptops[0]);
    const [calculated_value, Set_Calculated_Value] = useState(0);

    function Handle_Laptop_Select(laptop_name : string)
    {
        for(let i = 0; i < properties.all_trade_in_laptops.length; i++)
        {
            if(properties.all_trade_in_laptops[i].name === laptop_name)
            {
                Set_Current_Laptop(properties.all_trade_in_laptops[i]);
            }
        }
    }

    return(
        <div className="trade_in_holder">
            <div className="trade_in_upper_holder">
                <div className="trade_in_title">Trade-In</div>
                <div className="trade_in_description">Choose the device you wish to sell and check its trade-in price.</div>
                <select name="dropdown" className="trade_in_dropdown" value={current_laptop.name} onChange={ event => Handle_Laptop_Select(event.target.value) }>
                    {properties.all_trade_in_laptops.map((laptop) => {
                        return(
                        <option key={laptop.id}>{laptop.name}</option>
                        );
                    })}
                </select>
                <div className="trade_in_separator"></div>
                <div className="trade_in_option_holder">
                    <div className="trade_in_option_name">Does the device turn on?</div>
                    <div className="trade_in_option_button_holder">
                        <div className={ button_0_state ? "trade_in_option_button trade_in_option_button_selected" : "trade_in_option_button" } onClick={ () => { button_0_state ? null : Set_Calculated_Value(calculated_value + 100); Set_Button_0_State(true); } }>Yes</div>
                        <div className={ button_0_state ? "trade_in_option_button" : "trade_in_option_button trade_in_option_button_selected" } onClick={ () => { button_0_state ? Set_Calculated_Value(calculated_value - 100) : null; Set_Button_0_State(false); } }>No</div>
                    </div>
                    <div className="trade_in_option_name">Does the display turn on?</div>
                    <div className="trade_in_option_button_holder">
                        <div className={ button_1_state ? "trade_in_option_button trade_in_option_button_selected" : "trade_in_option_button" } onClick={ () => { button_1_state ? null : Set_Calculated_Value(calculated_value + 50); Set_Button_1_State(true); } }>Yes</div>
                        <div className={ button_1_state ? "trade_in_option_button" : "trade_in_option_button trade_in_option_button_selected" } onClick={ () => { button_1_state ? Set_Calculated_Value(calculated_value - 50) : null; Set_Button_1_State(false); } }>No</div>
                    </div>
                    <div className="trade_in_option_name">Is the operating system loaded?</div>
                    <div className="trade_in_option_button_holder">
                        <div className={ button_2_state ? "trade_in_option_button trade_in_option_button_selected" : "trade_in_option_button" } onClick={ () => { button_2_state ? null : Set_Calculated_Value(calculated_value + 25); Set_Button_2_State(true); } }>Yes</div>
                        <div className={ button_2_state ? "trade_in_option_button" : "trade_in_option_button trade_in_option_button_selected" } onClick={ () => { button_2_state ? Set_Calculated_Value(calculated_value - 25) : null; Set_Button_2_State(false); } }>No</div>
                    </div>
                    <div className="trade_in_option_name">Is the outside appearance fine?</div>
                    <div className="trade_in_option_button_holder">
                        <div className={ button_3_state ? "trade_in_option_button trade_in_option_button_selected" : "trade_in_option_button" } onClick={ () => { button_3_state ? null : Set_Calculated_Value(calculated_value + 80); Set_Button_3_State(true); } }>Yes</div>
                        <div className={ button_3_state ? "trade_in_option_button" : "trade_in_option_button trade_in_option_button_selected" } onClick={ () => { button_3_state ? Set_Calculated_Value(calculated_value - 80) : null; Set_Button_3_State(false); } }>No</div>
                    </div>
                    <div className="trade_in_option_name">Has the device ever been used?</div>
                    <div className="trade_in_option_button_holder">
                        <div className={ button_4_state ? "trade_in_option_button trade_in_option_button_selected" : "trade_in_option_button" } onClick={ () => { button_4_state ? null : Set_Calculated_Value(calculated_value + 100); Set_Button_4_State(true); } }>Yes</div>
                        <div className={ button_4_state ? "trade_in_option_button" : "trade_in_option_button trade_in_option_button_selected" } onClick={ () => { button_4_state ? Set_Calculated_Value(calculated_value - 100) : null; Set_Button_4_State(false); } }>No</div>
                    </div>
                    <div className="trade_in_option_name">Does the device come with original box?</div>
                    <div className="trade_in_option_button_holder">
                        <div className={ button_5_state ? "trade_in_option_button trade_in_option_button_selected" : "trade_in_option_button" } onClick={ () => { button_5_state ? null : Set_Calculated_Value(calculated_value + 20); Set_Button_5_State(true); } }>Yes</div>
                        <div className={ button_5_state ? "trade_in_option_button" : "trade_in_option_button trade_in_option_button_selected" } onClick={ () => { button_5_state ? Set_Calculated_Value(calculated_value - 20) : null; Set_Button_5_State(false); } }>No</div>
                    </div>
                </div>
            </div>
        <div className="trade_in_worth_holder">
            <div className="trade_in_worth">Your device is worth:&nbsp;</div>
                <div className="trade_in_worth trade_in_worth_value">{current_laptop.value + calculated_value}$</div>
            </div>
        </div>
    );
}

export default Price_Estimator;