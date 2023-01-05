import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../../redux/reducers/items';
import "./Cart.scss";
const Cart = () => {
    const cart = useSelector(s => s.items.cart);
    const dispatch = useDispatch();
  return (
    <section className='cart'>
        <div className='container'>
        {
    cart.map((item)=>{
        return <div key={item.id} className='cart__item'>
            <h3 className='cart__item-title'>{item.title}</h3>
            <div className='cart__item-right'>
            <p><b>count:</b>{item.count}</p>
            <p><b>price:</b>₽ {item.price}</p>
            <button onClick={()=>{
                dispatch(deleteCart(item))
            }}><i className="fa-solid fa-trash"></i></button>         
            </div>

        </div>
        
         })
        }
        <p className='total'><b >total:</b>₽ {
             cart.reduce((acc, rec)=> acc + (rec.price * rec.count), 0)
        }</p>
        </div>
    </section>
  )
};

export default Cart;