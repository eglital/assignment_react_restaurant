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
        <div id="menu">
            {items}
        </div>
    );
};

export default Menu;
