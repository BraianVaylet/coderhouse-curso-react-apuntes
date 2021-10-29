import CustomImage from './components/CustomImage';

import IMAGES from './assets/images';

// Cuando importamos estilos de esta forma el scope de las clases y etiquetas aplica de manera global.
import './App.css';
import Test from './components/test';

// opc1: Creo un array para poder mostrar todas las imagenes usando un map.
const arrImg = [
  IMAGES.img1,
  IMAGES.img2,
  IMAGES.img3,
  IMAGES.img4,
]

function App() {
  return (
    <div className="App">
      {/* opc1 */}
      <div>
        {arrImg && arrImg.map(image => <CustomImage {...image} />)}      
      </div>
      {/* opc2 */}
      <div>
        <CustomImage {...IMAGES.img1} />
        <CustomImage {...IMAGES.img2} />
        <CustomImage {...IMAGES.img3} />
        <CustomImage {...IMAGES.img4} />
      </div>
      <Test />
    </div>
  );
}

export default App;
