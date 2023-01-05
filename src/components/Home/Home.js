import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItems, addCart } from '../../redux/reducers/items';

import "./Home.scss";

const Home = () => {
  
  const items = useSelector(s => s.items.items);
  
  const dispatch = useDispatch()
  useEffect(()=>{
  dispatch( getItems())
  }, []);
  return (
    <section className='home'>
      <div className='container'>
        <div className='row'>
          {
            items.map((item, idx)=>{
              return <div key={item.id} className='col-4'>
                 <div className='home__product'>
                 <Link to={`/product/${idx}`}>
                 <img className='home__product-img' src={item.image} alt=''/>
                  <h3 className='home__product-title'>{item.title}</h3>
                  <p className='home__product-case'>Коллекция {item.case}</p>
                  <p className='home__product-price'>₽ {item.price}</p>          
                  </Link>
                  <button onClick={()=>{
                    dispatch(addCart(item))
                  }} className='home__product-btn'>КУПИТЬ</button>
                 
                 </div>
              </div>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Home;