import React from "react";

const MenuItem = ({ item }) => {
    
    return (
        <div>
            <h4>{item.name}</h4>
            <p>${item.price}</p>
        </div>
    );
    
    
}

export default MenuItem