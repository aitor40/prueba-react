# Prueba técnica

Este proyecto forma parte de una prueba técnica

Para iniciar el proyecto, usa los siguientes comandos:

```
    npm i
    npm run dev
```

## ¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

Decidí empezar por crear una maqueta básica basada en las imagenes del resultado final y aplicarle estilos. Después he decidido separar por partes la maqueta en cabecera, componente de título y pié de página.

Por otro lado, he creado una estructura basada en Vite y he usado un enrutador para crear las páginas principal, series y películas, cada uno en forma de componente.

No he considerado usar Redux porque no he visto la necesidad. Los datos están en un archivo JSON, con lo cual también todos los componentes pueden tener acceso a ellos sin dificultad. Tampoco se hacen peticiones a ninguna API, por lo cual no he considerado usar esta tecnología ni poner una pantalla de carga.

## ¿Hay alguna mejora que pueda hacer en su envío?

Se podría aplicar alguna pantalla de carga comprobando con algún evento que todas las imágenes hayan sido cargadas, por ejemplo. Se podría pulir mas algunos detalles estéticos para que la aplicación tenga una forma visual mas agradable.

## ¿Qué haría de manera diferente si se le asignara más tiempo?

Cambiaria el sistema de las imágenes para usar una API especializada en ella, lo cual podría implementar Redux y una pantalla de carga mientras se realiza la petición. De esta forma también sería mas facil comprobar si se ha recibido la imagen o no.

Puliria mas detalles y haría componentes aún mas pequeños para organizar mejor el código y sobretodo, comentar el código (no he tenido tiempo porque me he centrado en la funcionalidad básica y maquetado).

Tampoco he podido declarar ningún test por la falta de tiempo. En el caso de haberlo hecho, usaría Jest ya que tengo mas conocimientos de esta tecnologia que de otras, aunque estoy siempre abierto a aprender tecnologías nuevas.