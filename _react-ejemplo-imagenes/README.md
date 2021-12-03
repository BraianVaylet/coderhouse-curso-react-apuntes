# Importar imagenes locales en React.js

## Para mostrar una imagen el React js, tienes dos formas sencillas de hacerlo.
 
 - Importar la imagen usando 'import'.
 - Alojar la imagen en un servidor remoto o local y utilizar la url.

### Ventajas de importar la imagen:

- Tenes más control sobre las imágenes
- Podes guardarlas como en este [ejemplo](https://github.com/BraianVaylet/coderhouse-curso-react-apuntes/blob/master/_react-ejemplo-imagenes/src/assets/images/index.js) en un objeto y nutrirlas de mas propiedades, en este caso le agregamos un nombre que luego usaremos para mostrarlo en el atributo alt de la etiqueta img.
- Es más simple de depurar, sabes donde están todas las imágenes si en el futuro tenes que cambiar una de ella o agregar otras.
- etc... Todas las ventajas que se te ocurran
- Una práctica que se suele ver mucho en la industria es tener un archivo en el cual se van a importar todas las imágenes dentro de un objeto o array, luego este se importa en los componentes donde se necesiten...

### Ejemplo:

- Para este ejemplo tenemos un fichero **assets** donde tenemos otro llamado **images** el cual tiene guardadas las imágenes w1.jpg, w2.jpg, w3.jpg.
- En el fichero **images** tenemos también un archivo [**index.js**](https://github.com/BraianVaylet/coderhouse-curso-react-apuntes/blob/master/_react-ejemplo-imagenes/src/assets/images/index.js) en el cual se importan las imagenes y se exporta un objeto.
- En el archivo [**App.js**](https://github.com/BraianVaylet/coderhouse-curso-react-apuntes/blob/master/_react-ejemplo-imagenes/src/App.js) vamos a hacer uso de esas imagenes, primero las importamos como figura en la linea 3 y luego para este ejemplo creamos un array con ellas para luego usando un map mostrarlas todas.
- Para renderizar las imágenes creamos un componente [**CustomImage**](https://github.com/BraianVaylet/coderhouse-curso-react-apuntes/tree/master/_react-ejemplo-imagenes/src/components/CustomImage) para poder reutilizar el codigo. 

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
