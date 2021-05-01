import React from 'react';

const CartDesktop = (props) => {

    const boxSizes = [
        { size: "S", productCount: "6" },
        { size: "M", productCount: "12" },
        { size: "L", productCount: "24" },
        { size: "XL", productCount: "30" },
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
                                <div><strong>{boxSize.size} </strong></div>- {boxSize.productCount}ks
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
            <button style={{ color: `#fff` }} onClick={props.handleThisFlavour}>
                chcem túto príchuť
                </button>
            <br />
            <button onClick={props.handleMixOwn}>namixujem si vlastný box</button>
        </div>
    )

}

export default CartDesktop