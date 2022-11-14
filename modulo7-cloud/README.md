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

-Primero de todo, creamos nuestro repositorio. Ejemplo: master-front-pages-auto, lo dejamos en publico.
-Ahora seguimos los comandos que nos proporciono github.
-Dentro de nuestro proyecto en local, abrimos consola y inicializamos nuestro repo en local `git init`.
-Ahora linkamos nuestro fichero local con nuestro repo de github. `git remote add origin ...` copiamos lo que nos puse github en nuestro repo.
-`git add .` para trackear todos los ficheros.
-`git commit -m "initial commit"`.
-`git push -u origin main` , si teneis la rama master pues cambiáis main por master.
-Ya estaria todos los ficheros subidos al repo.
-instalamos https://github.com/tschaub/gh-pages es una CLI y nos permite publicar a la rama gh-pages, si la rama no esta creada la crea automaticamente. Todo mas simple. `npm install gh-pages -D`.
-Abrimos el package.json de nuestro proyecto y añadimos en los scripts: 
"build:dev": "npm run clean && webpack --config ./config/webpack/dev.js",
"deploy": "gh-pages -d dist"
-Para automatizar todo el proceso con Github Actions, Creamos  en la raiz de nuestro proyecto una carpeta llamada .github , dentro de ella otra  carpeta llamada workflows y dentro podemos crear todos los archivos .yml que queramos crearemos el cd.yml.

-Tenemos que generar claves SSH para que la maquina linux, que es quien se encargue de hacer todo automatizado tenga permisos para poder hacer un push a la rama. para generar las claves SSH publica y privada. Desde bash hacemos `ssh-keygen -m PEM -t rsa -C "cd-user@my-app.com"` , el correo podemos poner el que sea. ahora le pide la ruta donde guardar las claves ponemos en la raiz del proyecto, ./id_rsa. Luego estos ficheros se borran para no suibir esas claves. Pedira poner password pero no es necesario poner ninguna. y se generan dos archivso id_rsa y id_rsa.pub .
-Copiamos la clave que generamos dentro del id_rsa.pub y en nuestro repo vamos a settings, en la parte izquerdad en security Deploy keys. Hacemos click en add deploy key, ponemos un nombre ejemplo SSH_PUBLIC_KEY y en key pegamos toda la clave que empieza por ssh-rsa ... . Hacemos check en Allow write access es muy necesario para poder hacer push y a add key. Borramos el ficher id_rsa.pub.
-La clave privada id_rsa copiamos el contenido y nos vamos a settings en nuestro repo, Secrets y Actions. New repository secret hacemos click. En name ponemos ejemplo SSH_PRIVATE_KEY y en secret pegamos la clave. add secret. Borramos el fichero id_rsa.


-En el archivo cd.yml copiamos esto.

name: Continuos Deployment workflow

on:
  push:
    branches:
      - master

jobs:
  cd:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - name: Use SSH key
        run: |
          mkdir -p ~/.ssh/
          echo "${{secrets.SSH_PRIVATE_KEY}}" > ~/.ssh/id_rsa
          sudo chmod 600 ~/.ssh/id_rsa
      - name: Git config
        run: |
          git config --global user.email "cd-user@my-app.com"
          git config --global user.name "cd-user"
      - name: Install
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy
        run: npm run deploy -- -r git@github.com:Franlop7/master-front-pages-auto.git

-Solo quedaría hacer un `git add .`, `git commit -m "config ssh keys"` y `git push` .
-Ahora en Github Actions empezara la magia. https://franlop7.github.io/master-front-pages-auto/
 



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