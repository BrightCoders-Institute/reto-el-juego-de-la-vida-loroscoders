[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/GZK4nxFE)
![BrightCoders Logo](img/logo.png)

# El Juego de la Vida - LorosCoders

¡Bienvenido al repositorio del proyecto "El Juego de la Vida" de LorosCoders!

Este proyecto es una implementación en JavaScript orientado a objetos del famoso "Juego de la Vida" creado por el matemático británico John Conway. El juego es un ejemplo clásico de un autómata celular, donde cada célula en una cuadrícula bidimensional puede estar viva o muerta según ciertas reglas.

## Descripción del juego

El Juego de la Vida se desarrolla en una cuadrícula infinita, donde cada celda puede estar en uno de los dos estados posibles: viva o muerta. El estado de cada célula se actualiza en cada iteración basándose en las siguientes reglas:

1. Una célula viva con menos de dos células vecinas vivas muere por soledad.
2. Una célula viva con dos o tres células vecinas vivas sigue viva en la siguiente generación.
3. Una célula viva con más de tres células vecinas vivas muere por sobrepoblación.
4. Una célula muerta con exactamente tres células vecinas vivas se convierte en una célula viva por reproducción.

Estas reglas simples dan lugar a patrones complejos y fascinantes a medida que el juego progresa.

## Instalación

Para poder ejecutar el proyecto, necesitarás tener Node.js instalado en tu sistema. Sigue los siguientes pasos para configurar el entorno de desarrollo:

1. Clona este repositorio en tu máquina local o descárgalo como archivo ZIP.

``` vim
git clone https://github.com/BrightCoders-Institute/reto-el-juego-de-la-vida-loroscoders.git

```
2. Navega al directorio raíz del proyecto.


cd reto-el-juego-de-la-vida-loroscoders


3. Instala las dependencias del proyecto.

``` node
npm install
```

## Uso

Una vez que hayas completado la instalación, puedes ejecutar el juego utilizando el siguiente comando:

``` node
node app.js
```

El juego se ejecutará y mostrará la evolución de las células en cada generación en la consola. Puedes interrumpir el juego en cualquier momento presionando Ctrl+C.

## Contribución

¡Estamos abiertos a contribuciones! Si deseas colaborar en el proyecto, asegúrate de seguir los siguientes pasos:

1. Realiza un fork de este repositorio.
2. Crea una rama nueva para tu contribución.
3. Realiza los cambios y mejoras en tu rama.
4. Asegúrate de que tus cambios no rompan las pruebas existentes.
5. Realiza un pull request hacia la rama principal del repositorio original.

## Créditos

Este proyecto fue desarrollado como parte de un reto propuesto por LorosCoders, una comunidad de programadores entusiastas de la programación, en colaboración con BrightCoders-Institute.

## Contacto

Si tienes alguna pregunta o sugerencia acerca del proyecto, no dudes en visitar nuestro espacio de colaboración en Gather.town: [Campus Zeffo - El Juego de la Vida](https://app.gather.town/app/Xqjd4OwO4fzoQAHV/campus-zeffo).

¡Diviértete jugando El Juego de la Vida!
