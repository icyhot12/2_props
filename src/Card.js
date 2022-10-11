import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Card(props) {

    let item = props.element

    return (
        <div className="item-card">
            <img src={item.imageUrl} className="photo" alt="travel" />
            <div className="about">
                <div className="localisation">
                    <FontAwesomeIcon icon={faLocationDot} color="red"/>
                    <p className="place">{item.location}</p>
                    <a href={item.googleMapsUrl} className="google-link">View on Google Maps</a>
                </div>
                <div className="title">{item.title}</div>
                <div className="dates">{item.startDate}-{item.endDate}</div>
                <div className="description">{item.description}</div>
            </div>
        </div>
    );
}

export default Card;
