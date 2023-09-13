 
import PropTypes from 'prop-types';

const Cart = ({ selectedActors,totalCost,remaining }) => {
    
    return (
        <div className='space-y-3 text-lime-200 font-bold'>
            <h2 className='border-2 text-center p-2 rounded-md '>Total Actors: {selectedActors.length}</h2>
            <h2 className='border-2 text-center p-2 rounded-md'>Total Cost: {totalCost} </h2>
            <h2 className='border-2 text-center p-2 rounded-md '>Remaining:{ remaining}</h2>
            {
                selectedActors.map(actor => <li key={actor.id}>{actor.name}</li>)
            }
        </div>
    );
};

Cart.propTypes = {
    Cart: PropTypes.func.isRequired,
    selectedActors: PropTypes.array.isRequired,
    totalCost: PropTypes.number.isRequired,
    remaining:PropTypes.number.isRequired
};

export default Cart;