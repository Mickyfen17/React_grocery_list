import React from 'react';
import classnames from 'classnames';
import './Grocery.css';

const Grocery = ({ name, quantity, notes, purchased, starred, onPurchase, onStar, onDelete }) => {
  return (
    <article className={classnames('Grocery', { starred, purchased })}>
      <h3>{name}</h3>
      { quantity && <p className='Grocery-quantity'>Quantity: {quantity}</p> }
      { notes && <p className='Grocery-notes'>Notes: {notes}</p>}
      <button className='Grocery-purchase'>{ purchased ? 'Unpurchase' : 'Purchase' }</button>
    </article>
  );
};

export default Grocery;


{/* <article className={`Grocery
  ${ starred && 'starred' }
  ${ purchased && 'purchased'}
  ${ quantity && 'Grocery-quantity'}`
}>
<h3>{name}</h3>
</article> */}
