import React from 'react';

const ProductNutritionDesktop = (props) => {

    const nutritionLabels = [
        "Energia",
        "Tuk",
        "- nasýtené kyseliny",
        "Sacharidy",
        "- cukry",
        "Bielkoviny",
        "Soľ"
    ];

    let tableRows = [];
    for (let i = 0; i < nutritionLabels.length; i++) {
        tableRows.push(
            <tr>
                <th>{nutritionLabels[i]}</th><td>{props.nutrition[i]}</td>
            </tr>
        )
    }

    return (
        <div style={{ display: props.nutritionDisplay }} className="desktop-product-nutrition">
            <h3 className="weight">
                <strong>hmotnosť<br />tyčinky</strong><br />40g
        </h3>
            <i class="fas fa-times" onClick={props.toggleNutritionDisplay}></i>
            <div className="description">
                <h2 className="heading">
                    zloženie
            </h2>
                <p>
                    {props.nutritionDesc}
                </p>
            </div>
            <div className="nutrition-table">
                <h2 className="heading">
                    energetická<br />hodnota<br />/ 100 G
            </h2>
                <table>
                    {tableRows}
                </table>
            </div>
        </div>
    )

}

export default ProductNutritionDesktop