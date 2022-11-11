# Modulo Cloud - Laboratorio

# Básico

1. Desplegar en Github Pages de forma manual:

    Tenemos un repo en Github.
    Queremos desplegar una app.
    Realizar el despliegue manual.

-Tenemos o creamos un repo en Github, donde tenemos nuestra app y queremos hacer el despliegue.
-Desde la rama main/master creamos una rama llamada, por ejemplo: gh-pages. Es el nombre por defecto.
-Ejecutamos la compilación de producción del proyecto.
-Eliminamos todos los archivos, menos los del interior de la carpeta  dist. lo que hacemos es mover el contenido de dist a la raiz y borramos dist.
-Ahora publicamos en la rama gh-pages.Con un commit y push.
-Github automaticamente y por crear la rama con el nombre gh-pages, gracias a jekyll creara un servidor similar a express y se encarga de publicar los ficheros estaticos.
-Si entramos en Actions podemos ver el despliegue y en el deploy nos da la url para acceder a nuestra app desplegada.
https://franlop7.github.io/master-front-gh-pages/

2. Automatizar el proceso de despliegue:

    Queremos que cada vez que se haga un merge a master se dispare un flujo de build y despliegue.
    Usar Github Actions para esto.

-



# Opcional

1. Desplegar la página en un dyno gratuito de heroku, usando despliegue por git.

-Una vez dentro de heroku, le damos a New y create new app. Ponemos un nombre de nuestra app y la region.
-En https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-static podemos instalar esta u otra opcion la que querais.
copiamos https://github.com/heroku/heroku-buildpack-static.git y lo pegamos en add buildpack en heroku. Este sera nuestro servidor.
-Ahora subiremos los fichero al repositorio de despliegue que nos proporciono heroku git URL ...
-Ahora nos clonamos ese nuevo repositoria que nos creo heroku. Para ello creamos una nueva carpeta y la abrimos con nuestro editor te texto, en mi caso vscode. Desde la consola hacemos `git clone URL .` que nos proporciono heroku.Importante el espacio . Después de la URL. Para que genere la carpeta de .git.
-Instalamos heroku CLI de forma global. `npm i -g heroku`.
-Una vez instalado, en consola `heroku login`. Pediara que pulsemos cualquier teclar, se abrira el navegador y solo tenemos que hacer login. En consola saldra que ya estamos logged.
-Ahora solo tenemos que copiar nuestros ficheros compilados, los de nuestra app y lo pegamos en la carpeta que creamos anteriormente.
-Creamos un fichero de configuracion static.json en la raiz. para indicarle la ruta donde tiene que buscar el index.htm de nuestra app. en static.json añadimos lo siguiente: `{ "root": "./" }`.
-Ahora solo queda hacer `git add .`, `git commit -u "add static files"`, `git push heroku master`.
-Ya tenemos nuestra app desplegada. 
https://master-front-lemoncode-heroku.herokuapp.com/

2. Desplegar aplicación front de forma automática + Docker en Heroku.






3. Deplegar aplicación front de forma automática en Vercel.






4. Desplegar aplicación front con Docker y AWS.





5. Desplegar back y front en un mismo dyno en Heroku.