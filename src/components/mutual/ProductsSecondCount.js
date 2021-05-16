import React from "react";

const ProductsSecondCount = (props) => {

    const handleChangeQuantity = (event) => {
        const thisProductQuantityElement = event.target.parentNode;
        const isIncrement = event.target.textContent === "+" ? true : false;
        const amountToChangeBy = isIncrement ? 1 : -1;

        let allQuantityElements = [];
        for (const element of thisProductQuantityElement.parentNode.children) {
            if (element.tagName == "DIV") {
                allQuantityElements.push(element);
            }
        }
        const thisProductQuantityIndex = allQuantityElements.indexOf(thisProductQuantityElement);

        props.setProductsSecondQuantity(() => {
            let newProductsSecondQuantity = [...props.productsSecondQuantity];
            if (newProductsSecondQuantity[thisProductQuantityIndex] != 0 || isIncrement) {
                newProductsSecondQuantity[thisProductQuantityIndex] = newProductsSecondQuantity[thisProductQuantityIndex] + amountToChangeBy;
            }
            return newProductsSecondQuantity;
        });
    }

    return (
        <div className="count">
            <div className="product-pics">
                <img src="/img/mutual/yes-you-can-buy-love.webp"></img>
                <img src="/img/mutual/instead-of-flowers.webp"></img>
            </div>
            <div className="product-quantities">
                <strong>množstvo</strong>
                {
                    props.productsSecondQuantity.map(quantity => 
                        <div>
                            <button onClick={handleChangeQuantity}>-</button>
                            <span>{quantity}</span>
                            <button onClick={handleChangeQuantity}>+</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ProductsSecondCount