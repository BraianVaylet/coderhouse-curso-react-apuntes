// Para mostrar una imagen el React js, tienes dos formas sencillas de hacerlo.
// 1. Importar la imagen
// 2. Utilizar la url de una imagen que esta en un servidor remoto o local.

// Ventajas de hacer esto:
// 1. Tenes mas control sobre las imagenes
// 2. Podes guardarlas como en este caso en un objeto y nutrirlas de mas propiedades, en este caso le agregamos un nombre
// que luego usaremos para mostrarlo en el atributo alt de la etiqueta img.
// 3. Es mas simple de depurar, sabes donde estan todas las imagenes si en el futuro tenes que cambiar una.
// 4. etc... Todas las ventajas que se te ocurran

import imagew1 from './w1.jpg'
import imagew2 from './w2.jpg'
import imagew3 from './w3.jpg'

const IMAGES = {
  img1: { 
    img: imagew1,
    name: 'wallpaper 1'
  },
  img2: { 
    img: imagew2,
    name: 'wallpaper 2'
  },
  img3: { 
    img: imagew3,
    name: 'wallpaper 3'
  },
  img4: { 
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGVwClVamNeksJX8kL2pbU4cNoUTubrT09YVfUid5H8qCtn02r1afMtQ_1USVpuyXt5I&usqp=CAU',
    name: 'wallpaper 4'
  }
}

export default IMAGES