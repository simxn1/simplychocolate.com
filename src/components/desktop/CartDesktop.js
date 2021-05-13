import React from 'react';

const CartDesktop = (props) => {

    const boxSizes = [
        { size: "S", productCount: "6", price: "13,50" },
        { size: "M", productCount: "12", price: "24,50" },
        { size: "L", productCount: "24", price: "47,50" },
        { size: "XL", productCount: "30", price: "56,50" },
    ]

    return (
        <div style={{ display: props.cartDisplay }} className="desktop-cart">
            <i
                class="fas fa-times"
                onClick={props.toggleCartDisplay}
            >
            </i>
            <h2>
                máš chuť na čokolásku?
                </h2>
            <h3>
                objednaj si Simply Chocolate už dnes!
                </h3>
            <h2>
                veľkosť
                </h2>
            <ul className="desktop-box-sizes">
                {
                    boxSizes.map(boxSize => 
                        <li>
                            <button style={{ cursor: 'pointer' }} onClick={props.setQuantity}>
                                <div><strong>{boxSize.size} </strong></div>- {boxSize.productCount}ks - {boxSize.price}€
                            </button>
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
                vyber si veľkosť.
                </span>
            <button style={{ color: `#fff` }} onClick={props.handleMixOwn}>
                namixujem si vlastný box    
            </button>
            <br />
            <button onClick={props.handleThisFlavour}>chcem túto príchuť</button>
        </div>
    )

}

export default CartDesktop