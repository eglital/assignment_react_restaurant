import React from "react";
import MenuItem from './MenuItem';

let menuItems = [{
    name: "BBQ",
    price: 10000000
}, {
    name: "Corndogs",
    price: 444444
}, {
    name: "Fried Smartphone",
    price: 1019929
}, {
    name: "French fried rats",
    price: 0
}]

const Menu = () => {
    let items = menuItems.map((item) => {
        return <MenuItem item={item} key={item.name}/>
    })
    
    return (
        <div className="row">
            <div id="menu" className="col-xs-6 col-xs-offset-3 well">
                <div className="text-center">
                    <h1>Menu</h1>
                    <hr/>
                    <h3>Nibbles</h3>
                    {items}
                    <h3>Kibbles</h3>
                    {items}
                    <h3>Dessert</h3>
                    {items}
                </div>
            </div>
        </div>
    );
};

export default Menu;
