import React from 'react';


const OpenProductNutrition = (props) => {


    return (
        <button
            style={{ 
                backgroundImage: `url("/img/mutual/nutrition-button.webp")`, 
                position: props.position ? props.position : "absolute",
                top: props.top, 
                left: props.left,
                textTransform: "uppercase",
                fontFamily: "Social Gothic Demi-Bold",
                backgroundColor: "transparent",
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: 0,
                outline: 0,
                fontSize: props.fontSize,
                padding: "1em 2.2em",
            }}
            onClick={props.handleClick}
        >
            zloženie
        </button>
    )

}

export default OpenProductNutrition