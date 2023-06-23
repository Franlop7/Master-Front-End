# Modulo Cloud - Laboratorio

# Básico

1. Desplegar en Github Pages de forma manual:

  - Tenemos un repo en Github.
  - Queremos desplegar una app.
  - Realizar el despliegue manual.

Tenemos o creamos un repo en Github, donde tenemos nuestra app y queremos hacer el despliegue.
Desde la rama main/master creamos una rama llamada, por ejemplo: gh-pages. Es el nombre por defecto.

Ejecutamos la compilación de producción del proyecto.

Eliminamos todos los archivos, menos los del interior de la carpeta  dist. Lo que hacemos es mover el contenido de dist a la raíz y borramos dist.

Ahora publicamos en la rama gh-pages. Con un commit y push.

Github automáticamente y por crear la rama con el nombre gh-pages, gracias a jekyll creará un servidor similar a express y se encarga de publicar los ficheros estáticos.

Entramos en Actions, podemos ver el despliegue y en deploy nos da la url para acceder a nuestra app desplegada.
https://franlop7.github.io/master-front-gh-pages/

2. Automatizar el proceso de despliegue:

  - Queremos que cada vez que se haga un merge a master se dispare un flujo de build y despliegue.
  - Usar Github Actions para esto.

Primero de todo, creamos nuestro repositorio. Ejemplo: master-front-pages-auto, lo dejamos en público.

Ahora seguimos los comandos que nos proporcionó github.

Dentro de nuestro proyecto en local, abrimos la consola e inicializamos nuestro repo en local `git init`.

Ahora linkeamos nuestro fichero local con nuestro repo de github. `git remote add origin ...` copiamos lo que nos puso github en nuestro repo.

`git add .` para trackear todos los ficheros.

`git commit -m "initial commit"`.

`git push -u origin main` , si teneis la rama master, pues cambiáis main por master.

Ahora tenemos todos los ficheros subidos al repo.

instalamos https://github.com/tschaub/gh-pages es una CLI y nos permite publicar a la rama gh-pages, si la rama no está creada la crea automáticamente. Todo más simple. `npm install gh-pages -D`.

Abrimos el package.json de nuestro proyecto y añadimos en los scripts:

```json
"build:dev": "npm run clean && webpack --config ./config/webpack/dev.js",
"deploy": "gh-pages -d dist"
```

Para automatizar todo el proceso con Github Actions, Creamos en la raiz de nuestro proyecto una carpeta llamada . Github, dentro de ella otra carpeta llamada workflows y en su interior podemos crear todos los archivos .yml que necesitemos. Ejemplo: cd.yml.

Tenemos que generar claves SSH para que la máquina linux, que es quien se encargue de hacer todo automatizado, tenga permisos para poder hacer un push a la rama. Para generar las claves SSH pública y privada. Desde bash hacemos `ssh-keygen -m PEM -t rsa -C "cd-user@my-app.com"`, Se puede poner cualquier correo.

Ahora le pide la ruta donde guardar las claves ponemos en la raiz del proyecto, ./id_rsa. Luego estos ficheros se borran para no suibir esas claves. 

Pedira poner password pero no es necesario poner ninguna. y se generan dos archivso id_rsa y id_rsa.pub .

Copiamos la clave que generamos dentro del id_rsa.pub y en nuestro repo vamos a settings, en la parte izquerdad en security Deploy keys. Hacemos click en add deploy key, ponemos un nombre ejemplo SSH_PUBLIC_KEY y en key pegamos toda la clave que empieza por ssh-rsa ... . Hacemos check en Allow write access es muy necesario para poder hacer push y a add key. Borramos el ficher id_rsa.pub.

La clave privada id_rsa copiamos el contenido y nos vamos a settings en nuestro repo, Secrets y Actions. New repository secret hacemos click. En name ponemos ejemplo SSH_PRIVATE_KEY y en secret pegamos la clave. add secret. Borramos el fichero id_rsa.


-En el archivo cd.yml copiamos esto.

```yml
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

 ```

Solo quedaría hacer un `git add .`, `git commit -m "config ssh keys"` y `git push` .

Ahora en Github Actions empezara la magia. https://franlop7.github.io/master-front-pages-auto/


# Opcional

1. Desplegar la página en un dyno gratuito de heroku, usando despliegue por git.

Una vez dentro de heroku, le damos a New y create new app. Ponemos un nombre de nuestra app y la region.

En https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-static podemos instalar esta u otra opcion la que querais.

copiamos https://github.com/heroku/heroku-buildpack-static.git y lo pegamos en add buildpack en heroku. Este sera nuestro servidor.

Ahora subiremos los fichero al repositorio de despliegue que nos proporciono heroku git URL ...

Ahora nos clonamos ese nuevo repositoria que nos creo heroku. Para ello creamos una nueva carpeta y la abrimos con nuestro editor te texto, en mi caso vscode. Desde la consola hacemos `git clone URL .` que nos proporciono heroku. Importante el espacio . Después de la URL. 

Para que genere la carpeta de .git.

Instalamos heroku CLI de forma global. `npm i -g heroku`.

Una vez instalado, en consola `heroku login`. Pulsa cualquier tecla, se abrirá el navegador y solo tenemos que hacer login. En consola saldrá que ya estamos logged.

Ahora solo tenemos que copiar nuestros ficheros compilados, los de nuestra app y lo pegamos en la carpeta que creamos anteriormente.

Creamos un fichero de configuracion static.json en la raiz. para indicarle la ruta donde tiene que buscar el index.htm de nuestra app. en static.json añadimos lo siguiente: `{ "root": "./" }`.

Ahora solo queda hacer `git add .`, `git commit -u "add static files"`, `git push heroku master`.

Ya tenemos nuestra app desplegada. 

2. Desplegar aplicación front de forma automática + Docker en Heroku.

Creamos un nuevo repositorio en GitHub y hacemos todos los pasos ya visto en ejercicios anteriores.

Vamos a Heroku y creamos una nueva app.

Hacemos login en Heroku desde nuesta consola `heroku login` y `heroku authorizations:create -d name-app`, se puede poner el mismo nombre que le diste a la app al crearla en Heroku en el paso 2, pero no es relevante. Nos dara un Token.

Copiamos ese Token y nos vamos a nuestro repositorio en GitHub a Settings, Secrets y Actions.

Creamos uno nuevo le llamamos por ejemplo HEROKU_API_KEY y pegamos el Token. Creamos un nuevo secreto llamado HEROKU_APP_NAME y en secret ponemos el nombre de nuestra app creada en Heroku.


En nuestro fichero cd.yml que esta dentro de .github/workflows. tiene que quedar tal que así.

```yml
name: Continuos Deployment workflow

on:
  push:
    branches:
      - master

env:
  HEROKU_API_KEY: ${{secrets.HEROKU_API_KEY}}
  IMAGE_NAME: registry.heroku.com/${{secrets.HEROKU_APP_NAME}}/web

jobs:
  cd:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - name: Heroku login
        run: heroku container:login
      - name: Build docker image
        run: docker build -t ${{env.IMAGE_NAME}} .
      - name: Deploy docker image
        run: docker push ${{env.IMAGE_NAME}}
      - name: Release
        run: heroku container:release web -a ${{secrets.HEROKU_APP_NAME}}
```

Ahora hacemos commit y push a GitHub.

Ya tenemos desplegada nuestra app automatica con docker y heroku. en heroku nuestra app, settings y en domains nos dara la URL para ver nuestra web.

https://master-front-lemoncode-heroku.herokuapp.com/

3. Deplegar aplicación front de forma automática en Vercel.

Vamos a import Git repository, le damos a cotinue con GitHub, importamos nuestro proyecto y hacemos click en deploy.

Si nos vamos a Overview en vercel, veremos nuestro proyecto.

Desde nuestra terminal instalamos la CLI de vercel `npm i -g vercel` lo instalé de forma global por eso el -g.

Ahora hacemos login desde la terminal, `vercel login`, conectamos con GitHub al terminar te dira. CLI Login Success.

Desde la terminal `vercel link`. decimos, si. El nombre del proyecto en vercel.

Esto genero la  carpeta .vercel y dentro un project.json . En su interiro nos da dos Id.

Con los dos Id, tenemos que ir a nuestra app en GitHub y crear 3 secretos. VERCEL_PROJECT_ID, VERCEL_ORG_ID esos dos nos lo ha proporcionado project.json y el tercero seria VERCEL_TOKEN. 

Lo creamos desde vercel, settings, Tokens y lo creamos y lo ponemos en nuestro secreto en GitHub.

Ahora podemos borrar la carpeta .vercel, aunque automáticamente se añadio al .gitignore para no subirlo sin querer a GitHub.

En nuestro proyecto en la carpeta .github/workflows creamos nuestro cd-vercel.yml y hacemos lo siguiente:

```yml
name: CD Vercel workflow

on:
  push:
    branches:
      - master
env:
  VERCEL_PROJECT_ID: ${{secrets.VERCEL_PROJECT_ID}}
  VERCEL_ORG_ID: ${{secrets.VERCEL_ORG_ID}}

jobs:
  vercel-cd:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - name: Deploy
        run: vercel -t ${{secrets.VERCEL_TOKEN}}
```

Ahora si la build la tenéis configurada, para que este en la carpeta public o directorio raiz, no hay que tocar nada. Si lo teneis en dist, haz lo siguiente en vercel apartado de build & development settings en output directory ponemos dist y listo.

Hacemos `commit` y `push` Cuando termine desde vercel Deployment veremos que nos da la url para ver nuestra app.
https://master-front-deploy-vercel-franlop7.vercel.app/

4. Desplegar aplicación front con Docker y AWS.

Vamos a Launch an instace y ponemos un nombre ejemplo deploy-to-aws, elegimos una maquina.

En key pair (login) hay que elegir una opcion, la default.

Marcamos la opcion Allow HTTP traffic from the internet.

Hacemos click en launch instance. Ya tenemos la maquina creada.

Vemos que se esta desplegando, una vez levantada podremos darle a connect, para conectarnos a ella.

Nos llevará al terminal de dicha maquina.

Tenemos que instalar docker en esta maquina `sudo yum update -y`, `sudo amazon-linux-extras install docker` luego le damos a y para que lo instale. 

Ahora arrancamos el servicio de docker `sudo service docker start`. Ya lo tenemos instalado.

Esto seria para una imagen publica, no necesitaria de login en docker. `sudo docker run --name my-app-container -rm -d -p 80:8083`.

Puse el 8083 porque es el que use en mi variable de entorno en dockerfile y el 80 es el que elegimos en esta maquina. ahora la descarga y crea el contenedor.

Ahora aws nos da la ip publica ejemplo http://ec2-52-47-182-138.eu-west-3.compute.amazonaws.com/.

Este enlace no funciona actualmente, es por ver un ejemplo de URL.
