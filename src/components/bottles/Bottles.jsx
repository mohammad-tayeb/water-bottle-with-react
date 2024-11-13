import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './bottles.css'
import { addToLS, getStoredCart } from "../../Utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([]) // array data "[]" object data"{}"
    const [cart, setCart] = useState([])
    // to load data
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    //load cart useEffect
    useEffect(() => {
        if (bottles.length > 0) {
            const savedCart = [];
            const storedCart = getStoredCart();
            for(const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    savedCart.push(bottle)
                }
            }
            setCart(savedCart);
        }
    }, [bottles])


    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];  ///ager cart e ja ache, notun jeta add hobe
        setCart(newCart);
        addToLS(bottle.id);
    }

    return (
        <div>
            <h1>Botles Available: {bottles.length}</h1>
            <Cart cart={cart}></Cart>
            <div className="bottles-container">
                {
                    bottles.map(bottle =>
                        <Bottle
                            key={bottle.id}
                            handleAddToCart={handleAddToCart}
                            bottle={bottle}>
                        </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;