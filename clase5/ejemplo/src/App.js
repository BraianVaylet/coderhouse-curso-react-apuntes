import './App.css';
import ItemCount1 from './components/ItemCount1';
import ItemCount2 from './components/ItemCount2';

function App() {
  // Para este ejemplo vamos a simular que tenemos una lista de 4 productos.
  // Creamos un mock para esto usando una array de productos.
  // A futuro este mock podría ser reemplazado por un array de elementos que se obtengan de una base de datos.
  const mockItems = [
    {
      id: 1,
      title: 'producto1',
      price: 100,
      stock: 10
    },
    {
      id: 2,
      title: 'producto2',
      price: 200,
      stock: 20
    },
    {
      id: 3,
      title: 'producto3',
      price: 300,
      stock: 5
    },
    {
      id: 4,
      title: 'producto4',
      price: 130,
      stock: 15
    }
  ]

  // Para este ejemplo cree un componente Item1 el cual muestra los datos del producto y hace uso de ItemCount1.
  // Item1 le pasa a ItemCount1 su valor de stock y una funcion mostrarMensajeConsola() para ver el mensaje por la consola del browser.
  const Item1 = ({id, title, price, stock}) => {
  const mostrarMensajeConsola = count => console.log(`agregaste al carrito ${count}u. de ${title}`)
  return (
    <div>
      <p>{title}</p>
      <p>${price}</p>
      <ItemCount1 stock={stock} onAdd={count => mostrarMensajeConsola(count)}/>
    </div>
  )}

  // Para este ejemplo cree un componente Item2 el cual muestra los datos del producto y hace uso de ItemCount2.
  // ItemCount2 no recibe props desde fuera, por lo que el stock esta definido dentro del componente.
  const Item2 = ({id, title, price, stock}) => {
    // Como puedo mostrar el valor del contador de ItemCount2??????
    const mostrarMensajeConsola = count => console.log(`agregaste al carrito ${count}u. de ${title}`)
    return (
      <div>
        <p>{title}</p>
        <p>${price}</p>
        <ItemCount2 />
      </div>
    )}

  return (
    <div className="App">
      <h2>Item1 (pasando el stock y onAdd)</h2>
      {/* Usando un map listo mi mockItems usando el componente Item1 */}
      {mockItems.map(item => <Item1 key={item.id} {...item} />)}
      
      <h2>Item2 (sin onAdd y con stock declarado en ItemCount2)</h2>
      {/* Usando un map listo mi mockItems usando el componente Item2 */}
      {mockItems.map(item => <Item2 key={item.id} {...item} />)}      
    </div>
  );
}

export default App;
