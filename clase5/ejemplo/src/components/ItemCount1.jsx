import React, {useState} from 'react';

// ItemCount1 va a recibir 3 props. 
// > stock: el stock total del producto.
// > initial: el valor inicial del contador (podemos darle un valor por defecto, en este caso le asigne el valor 1).
// > onAdd: un callback para obtener el valor del contador desde el componente padre desde donde se use ItemCount.
const ItemCount1 = ({stock, initial = 1, onAdd}) => {
  // Inicializamos nuestro contador con el valor de initial.
	const [count, setCount] = useState(initial);
  // Mi logica del contador.
	const handleAddItem = () => count < stock && setCount(count + 1);
	const handleRemoveItem = () => count > 0 && setCount(count - 1);
	return (
		<div style={{backgroundColor: '#eee'}}>
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
      {/* el button "Agregar al carrito" ejecuta la prop onAdd pasandole como paramtro el valor actual del estado count. */}
			<button onClick={() => onAdd(count)} disabled={count > stock || count <= 0}>
        Agregar al carrito
      </button>
    </div>
	);
};

export default ItemCount1;