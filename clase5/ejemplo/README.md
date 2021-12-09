# Componente ItemCount (contador)

## Conclusiones:

En este ejemplo vemos la importancia de pasar props de un componente padre al hijo.

Para ello se crearon dos componentes ItemCount, uno recibe props y el otro no.

Tambien se creo un mock con 4 productos para propositos practicos

Se crearon en App.js dos componentes: Item1 que usa ItemCount1 y también Item2 que hace uso del ItemCount2.

Por medio de un map se listan los productos del mockItems para ver las diferencias entre el uso de ItemCount1 y 2.

- **ItemCount1**
  > Recibe como props el stock, el initial y una función onAdd. Esto le permite setear valores diferentes cada vez que se usa, así como una forma de recibir en el componente padre el valor del contador.
- **ItemCount2**
  > No recibe props, en cambio tiene el stock y el valor inicial declarados en el componente, esto hace que cada vez que uso mi componente todos tengan el mismo valor de stock y de initial. Además al no pasarle la función onAdd() no tengo formas de obtener el valor del contador desde mi componente App.js
