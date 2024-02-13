import { useEffect } from "react";

const base_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;

const Get_All_Laptops_Query = 
`query Get_All_Laptops
{
    laptopCollection
    {
        items
        {
            id,
            name,
            description,
            image
          	{
              url
            }
            state,
            availability
        }
    }
}`;

const Get_All_Trade_In_Laptops_Query = 
`query Get_All_Trade_In_Laptops
{
    tradeInLaptopsCollection
    {
        items
        {
            id,
            name,
            value
        }
    }
}`;

const Get_All_Accessories_Query = 
`query Get_All_Accessories
{
    accessoriesCollection
    {
        items
        {
            id,
            name,
            description,
            image
          	{
              url
            }
            availability
        }
    }
}`;
 
interface Laptop 
{
    id : number;
    name : string;
    description : string;
    image : 
    {
        url : string;
    };
    state : boolean,
    availability : number;
};

interface Trade_In_Laptop 
{
    id : number;
    name : string;
    value : number;
};

interface Accessory 
{
    id : number;
    name : string;
    description : string;
    image : 
    {
        url : string;
    };
    availability : number;
};
  
interface Get_All_Laptops_Query_Response
{
    laptopCollection : 
    {
        items: Laptop[];
    };
}
  
interface Get_All_Trade_In_Laptops_Query_Response
{
    tradeInLaptopsCollection : 
    {
        items: Trade_In_Laptop[];
    };
}

interface Get_All_Accessories_Query_Response
{
    accessoriesCollection : 
    {
        items: Accessory[];
    };
}

const Get_All_Laptops = async() : Promise<Laptop[]> =>
{
    try
    {
        const response = await fetch(base_URL, { method : "POST", headers : { "Content-Type" : "application/json", Authorization : `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}` }, body : JSON.stringify({ query : Get_All_Laptops_Query })});
        const body = (await response.json()) as { data : Get_All_Laptops_Query_Response; };
        const all_laptops : Laptop[] = body.data.laptopCollection.items.map((item) => ({
            id : item.id,
            name : item.name,
            description : item.description,
            image : item.image,
            state : item.state,
            availability : item.availability
        }));
        return all_laptops;
    }
    catch(error)
    {
        console.log(error);
        return [];
    }
};

const Get_All_Trade_In_Laptops = async() : Promise<Trade_In_Laptop[]> =>
{
    try
    {
        const response = await fetch(base_URL, { method : "POST", headers : { "Content-Type" : "application/json", Authorization : `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}` }, body : JSON.stringify({ query : Get_All_Trade_In_Laptops_Query })});
        const body = (await response.json()) as { data : Get_All_Trade_In_Laptops_Query_Response; };
        const all_laptops : Trade_In_Laptop[] = body.data.tradeInLaptopsCollection.items.map((item) => ({
            id : item.id,
            name : item.name,
            value : item.value,
        }));
        return all_laptops;
    }
    catch(error)
    {
        console.log(error);
        return [];
    }
};

const Get_All_Accessories = async() : Promise<Accessory[]> =>
{
    try
    {
        const response = await fetch(base_URL, { method : "POST", headers : { "Content-Type" : "application/json", Authorization : `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}` }, body : JSON.stringify({ query : Get_All_Accessories_Query })});
        const body = (await response.json()) as { data : Get_All_Accessories_Query_Response; };
        const all_accesssories : Accessory[] = body.data.accessoriesCollection.items.map((item) => ({
            id : item.id,
            name : item.name,
            description : item.description,
            image : item.image,
            availability : item.availability
        }));
        return all_accesssories;
    }
    catch(error)
    {
        console.log(error);
        return [];
    }
};


export { type Trade_In_Laptop, Get_All_Laptops, Get_All_Trade_In_Laptops, Get_All_Accessories };