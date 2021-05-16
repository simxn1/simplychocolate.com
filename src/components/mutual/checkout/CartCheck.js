import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import CartCheckProduct from './CartCheckProduct';
import products from '../../../constantData/products';
import productsSecond from '../../../constantData/productsSecond';

const CartCheck = (props) => {

    let history = useHistory();

    const price = (props.totalPrice / 100).toFixed(2).toString().replace(".", ",");

    const handleContinue = () => {
        history.push({
            pathname: "/buyer-info",
        })
    }

    const handleBack = () => {
        history.goBack();
    }

    if (props.totalBoxQuantity || props.productsSecondQuantity[0] || props.productsSecondQuantity[1]) return (
        <div className="cart-check">
            <h1>Lásku si za peniaze nekúpiš,<br />čokoládu ÁNO!</h1>
            <h2>Už skoro u teba doma...</h2>
            <ul className="products-to-purchase">
                {
                    props.boxQuantity.map((quantity, productIndex) =>
                        quantity ? 
                        <CartCheckProduct
                            name={products[productIndex].name}
                            quantity={quantity}
                            key={productIndex}
                        />
                        : null
                    )
                }
                {
                    props.productsSecondQuantity.map((quantity, productIndex) =>
                        quantity ?
                        <CartCheckProduct
                            name={productsSecond[productIndex].firstLine + productsSecond[productIndex].secondLine}
                            quantity={quantity}
                            key={productIndex}
                        />
                        : null
                    )
                }
                <li>Celkom: <strong>{price}&nbsp;€</strong></li>
            </ul>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <a
                    onClick={handleBack}
                    style={{
                        fontFamily: 'Open Sans',
                        textDecoration: 'underline',
                        marginRight: '4em',
                        cursor: 'pointer',
                        fontSize: '1.05em'
                    }}
                >
                    Späť
            </a>
                <button onClick={handleContinue} className="continue">Pokračovať</button>
            </div>
        </div>
    )
    else return (
        <Redirect to="/" />
    )
}

export default CartCheck