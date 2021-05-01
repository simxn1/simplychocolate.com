import React from 'react';

const Cart = (props) => {

    const boxSizes = [
        { size: "S", productCount: "6", price: "13,50" },
        { size: "M", productCount: "12", price: "24,50" },
        { size: "L", productCount: "24", price: "47,50" },
        { size: "XL", productCount: "30", price: "56,50" },
    ];

    return (
        <div style={{ display: props.cartDisplay }} className="cart">
            <i
                class="fas fa-times"
                onClick={props.cartDisplay == "block" ? props.closeCart : undefined}
            >
            </i>
            <h2>
                máš chuť na čokolásku?
                </h2>
            <h3>
                objednaj si Simply Chocolate už dnes!
                </h3>
            <h2 style={{ marginTop: "7%" }}>
                veľkosť
                </h2>
            <ul className="box-sizes">
                {
                    boxSizes.map(boxSize => 
                        <li>
                            <button onClick={props.setQuantity}>{boxSize.productCount}ks - <strong>{boxSize.size}</strong> - {boxSize.price}€</button>
                        </li>
                    )
                }
            </ul>
            <span
                style={{
                    display: props.hintDisplay,
                    color: `red`,
                    fontFamily: `Social Gothic Demi-Bold`,
                    textTransform: `uppercase`
                }}
            >
                vyber si veľkosť boxu.
                </span>
            <button onClick={props.handleThisFlavour}>
                chcem túto príchuť
                </button><br />
            <button onClick={props.handleMixOwn}>namixujem si vlastný box</button>
        </div>
    )

}

export default Cart