import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../redux/reducers/items';
import { addCart } from '../../redux/reducers/items';
import "./Product.scss"
const Product = () => {
    const product = useSelector(s => s.items.product);
    const params = useParams();
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProduct(params.idx))
    },[]);
  return (
    <section className='product'>
        <div className='container'>
            <div className='row'>         
                <div className='col-6'>
                <img className='product__img' src={product.image} alt=""/>
                </div>
                <div className='col-6'>
                    <h3 className='product__title'>{product.title}</h3>
                    <h3 className='product__title-page'>(Phase 1)</h3>
                    <p className='product__price'><b><i className="fa-brands fa-steam"></i> STEAM PRICE:</b> {product.price} ₽</p>
                    <p className='product__case'>Коллекция {product.case}</p>
                    <p className='product__text'><i className="fa-solid fa-clock-seven"></i>TRADABLE</p>
                    <hr/>
                    <p className='product__new'>Factory New</p>
                    <button onClick={()=>{
                        dispatch(addCart(product))
                    }} className='product__btn'>add to cart</button>
                </div>        
            </div>
        </div>
    </section>
  );
};
export default Product;