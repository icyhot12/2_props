import React from "react";

function Card(props) {

    let item = props.element

    return (
        <div>
            <img src={item.imageUrl} className="photo" alt="travel" />
        </div>
    );
}

export default Card;
