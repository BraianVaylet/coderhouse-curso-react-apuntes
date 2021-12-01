# Formas de crear nuestros componentes

Estos son algunos ejemplos de cómo pueden organizar cada uno de sus componentes,
pueden usar la que prefieran dependiendo de lo que ustedes necesiten para su proyecto.
Estos fueron ejemplos con los que me fui encontrando en los diferentes proyectos en los que trabajé.

## OPC 1️⃣: "organización por ficheros"

- Resumen: Todo componente al tener HTML en su código va a necesitar ser estilizado con CSS. Podemos crear diferentes ficheros para organizar nuestros archivos dependiendo de su función.

- Ejemplo:
  - Creamos un fichero components y dentro guardamos nuestros componentes.
  - Creamos un archivo con el nombre del componente y con extensión .js, .jsx o .ts, .tsx si están con TypeScript. (El nombre de los componentes debe iniciar siempre con Mayúscula)

### React project

> - components
>   - **Componente1.js**
>   - **Componente2.js**
> - styles
>   - **Componente1-styles.css** (o .scss, .sass, .less, etc) (recomiendo usar módulos de css para evitar problemas de scope de los estilos y las clases Ej: Componente1-styles.> module.css)
>   - **Componente2-styles.module.css**

## OPC 2️⃣: "organización por componentes"

- Resumen: Cuando trabajamos con React en proyectos medianos a grandes, nuestros componentes están atados a diferentes funcionalidades, que normalmente se encuentran separadas en otros archivos, hablamos de que un componente puede tener su lógica, su estilo, sus test, algún mock y muchas cosas más... Por esta razón es recomendable usar esta arquitectura para encapsular en un fichero todos los archivos relacionados a un componente y no tenerlos separados en diferentes ficheros como en la opción 1. Nos permite escalar mejor nuestros proyectos.
- Ejemplo:

  - Creamos un fichero con el nombre del componente dentro de la carpeta components.
  - Dentro del fichero creamos un archivo con el nombre del componente con extensión .js, .jsx o .ts, .tsx (recomiendo usar la extensión .jsx o .tsx para que a simple vista podemos saber si en ese archivo vamos a tener jsx, ya que podríamos tener otros archivos .js dentro del fichero con otra funcionalidad).
  - Dentro del fichero guardamos todos los archivos extra que aplican a ese componente en específico (hablamos de los estilos, test, etc).
  - (Truco) Dentro del fichero podemos crear un archivo index.js o .ts en el cual exportamos el componente que creamos (sirve como atajo) (no es necesario).

### React project

> - components
>   - **Componente1** (un ejemplo con typescript, aplica igual a javascript solo que la extencion .ts cambia a .js y la .> tsx cambia a .jsx)
>     - **index.ts** (archivo principal, opcional)
>     - **Componente1.tsx** (archivo con jsx)
>     - **Componente1.module.css** (archivo de estilos)
>     - **Componente1.spec.tsx** (archivo con test)
>     - **Componente1.test.tsx** (archivo con test)
>     - **Componente1.story.tsx** (archivo con historia del > componente para storybook)
>     - **Componente1.types.ts** (archivo con las interfaces y > types por usar typescript)
>     - **Componente1.mock.ts** (archivo con posible mock para probar el componente)
>     - **Componente1.skeleton.tsx** (archivo skeleton para > mostrar durante la carga)
>   - **Componente2** (un ejemplo con javascript)
>     - **index.js**
>     - **Componente2.jsx**
>     - **Componente2.module.css**
>     - **Componente2.spec.jsx**
>     - **Componente2.story.jsx**
>     - **Componente2.mock.js**
>     - **Componente2.skeleton.jsx**

Nota: Como pueden ver en el ejemplo podemos tener más de un archivo asociado a un componente de React, esto va a depender de la escala que tenga el proyecto,
por lo tanto es una buena práctica guardar sus componentes en ficheros para poder tener toda la lógica en un solo lugar y no repartida en diferentes ficheros
del proyecto.

