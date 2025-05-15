import React from 'react';
import recipes from '../recipes.js';
import Swal from 'sweetalert2';

const Menu = () => {
    const handleOrder = (id) => {
        console.log(`Order placed for recipe with id: ${id}`);
        Swal.fire({
            title: 'Order Placed!',
            text: `Your order for recipe with id ${id} has been placed.`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }
  return (
    <div className='menu-container'>
        <div className='menu-header'>
            <h2>This weeks specials!</h2> 
            <button>Order Menu</button>
        </div>

        <div className='cards'>
            {
                recipes.map((recipe) => 
                    <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt={recipe.name} />
                        <div className='menu-content'>
                            <div className='heading'>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className='orderbtn' onClick={() => handleOrder(recipe.id)}>Order Now</button>
                        </div>  
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Menu