import React from "react";

const MenuItem = ({ item }) => {
    
    return (
        <div>
            <h5>{item.name} - ${item.price}</h5>
        </div>
    );
    
    
}

export default MenuItem