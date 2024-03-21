import { useState } from "react";
import Bottle from "../bottle/Bottle";
import { useEffect } from "react";
import './bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../utilities/localStorage";
import Cart from "../carts/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('mydata.json')
        .then(response => response.json())
        .then(data => setBottles(data))
    },[])
    //load data from local storage
    useEffect(()=>{
        console.log('call the use effect ', bottles.length)
        if(bottles.length){
            const storedCarInfo = getStoredCart();
            // console.log(storedCarInfo, bottles)
            const savedCart = [];
            for(const id of storedCarInfo){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    savedCart.push(bottle);
                }
            }
            setCart(savedCart)
        }
    },[bottles])
    //set cart/display cart length
    const purchaseHandler=(bottle)=>{
       const newItems = [...cart,bottle];
       setCart(newItems);
       addToLS(bottle.id)
    }  
    const handleRemoverFromCart=id=>{
        const remainingItems = cart.filter(bottle=> bottle.id !==id);
        setCart(remainingItems);
        removeFromLS(id);
    }
    
    return (
        <div>
            <h2>In Stocks : {bottles.length}</h2>
            <Cart cart={cart}
                handleRemoverFromCart={handleRemoverFromCart}></Cart>    
           <div className="bottlz">
           {
                bottles.map(bottle => <Bottle
                    key={bottle.id}
                    bottle={bottle}
                    purchaseHandler = {purchaseHandler} 

                     >  
                     </Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;