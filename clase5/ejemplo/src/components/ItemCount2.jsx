import React, {useState} from 'react';

// ItemCount2 NO recibe props desde un componente padre
// > stock: el stock esta declarado en el componente.
// > initial: el valor esta declarado en el componente.
const ItemCount2 = () => {
	// Tenemos declarados el stock y el initial dentro de ItemCount2
	const stock = 10
	const initial = 1
  // Inicializamos nuestro contador con el valor de initial.
	const [count, setCount] = useState(initial);
  // Mi logica del contador.
	const handleAddItem = () => count < stock && setCount(count + 1);
	const handleRemoveItem = () => count > 0 && setCount(count - 1);
	return (
		<div style={{backgroundColor: 'pink'}}>
			<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<button onClick={handleRemoveItem} disabled={count <= 0}>
          -
        </button>
				<p>{count}</p>
				<button onClick={handleAddItem} disabled={count >= stock}>
          +
        </button>
			</div>
			<p>Stock disponible: {stock - count}</p>
    </div>
	);
};

export default ItemCount2;