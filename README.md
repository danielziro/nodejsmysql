descripccion: 
-Api que maneja un crud de usuarios permitiendo editar crear eliminar y consultar usuarios de igual manera logear un usuario pára obtener un token.

ide de desarrollo: 
-visual studio code ultima version.
-mysql workbrench
-docker

tecnologias usadas:

express: es un marco de aplicación web para Node.js

nodejs: es un entorno en tiempo de ejecución multiplataforma, basado en lenguaje de programacion js(Javascript).

mysql: Es una base de datos basada en javascript y es tambien de caracter sql.

jwt: es una biblioteca Javascript de código abierto diseñada para crear tokens de seguridad para autenticar usuarios.

postman: es una aplicacion externa que sirve para hacer insercion a la api de forma directa por medio de los metodos establecidos para mandar o cumplir con cualquier funcion del crud manipulando informacion real o insertada por el cliente por medio de objetos json.

usar para instalar en la carpeta node_modules: npm install express mysql npm install en la 

el proyecto esta separado en dos carpetas una que es frontend donde tenemos la vista de la aplicacion lo que se ve en web y otra que es backend que funciona antes de correr el proyecto abriremos mysql y el editor preferido. o en la consola de visual studio code una extencion de la misma. para correr a iniciar el proyecto una vez se exporte al ide se usara el siguiente por defecto el proyecto nos dejara ubicados en su carpeta raiz ahora lo que aremos para correr la parte del api es abrir la terminal de visual studio code y escribir el siguiente comando.

-cd ./nodejsmysql/ o solo cd back y oprimimos la tecla tab para autocompletar y luego enter.


-npm start y luego enter.
de esta manera correra la api.

NOTA: EL MODELO Y EL BACKUP DE LA BASE DATOS USADA SE ENCUENTRA EN LA CARPETA DB del proyecto al igual que un archivo MYSQL.SQL que tiene un ejemplo de creacion de tablas para la base de datos.
NOTA:
antes de empezar a usar la aplicacion para crear o modificar algun usuario, se debe crear manualmente un usuario en la base de datos que sera el encargado de permitirnos.
la creacion de usuarios se puede realizar por medio de un consumo de postman dodne se púede crear el usuario solo teniendo la base de datos configurada. para eso se utiliza el modelo dentro de models que se enecuentra dentro del backend.

consumir los servicios se deja una coleccion en el proyecto llamada postmancollect donde se encuentra un json que se puede cargar en diferentes plataformas de consumo de apis y porder realizar las pruebas necesarias.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--DOCKER IMPLEMENTACION:
ahora para generar un docker es necesario tener docker instalado y entrar por la consola de visual studio code ./nodejsmysql/
donde ya se tiene dos archivos de docker que ayudaran a generar la imagen en docker con nuestra aplicacion, e instalara en la imagen
las dependencias y herramientas que necesitemos los archivos :
docker-compose.yml
DockerFile
estos tendran dependencias y las imagenes y herramientas que instalara al igual que el proyecto actual.

en la consola de visual estudio code lanzaremos el siguienter comando con el cual ejecutaremos los archivos de docker para generar la imagen y ejecutar este proceso:
--docker compose up
El anterior comando nos permitira realizar un pull de los repositorios que ya existen en docker-hub para traer las dependencias que le solicitamos en la configuracion.
en el archivo docker-compose.yml se crea el script que solicita la creacion de la imagen en nodejs y la imagen de mysql , tambien se carga el archivo dockerfile que se encarga de 
crear las dependencias de node_modules y copiar los archivos existentes al contenedor docker que estamos creando permitiendo que estos realizen una imagen del proyecto mucho mas comoda y usable.
para bajar lso contenedores de docker para hacer alguna modificacion usar el comando:
--docker compose down
esto terminara y bajara las imagenes de mysql y del proyecto que se tengan arriba 
si modificamops el el proyecto creado y deseamos compilar nuevamente el contenedor usaremos el siguienter comando el cual subira el cambio que hagmos sea agregar una libreria mas o modificar
algun valor o configurar algo mas se usara el siguiente comando.
docker compose up --build
este realizara un compilado de todo nuevamente construyendo todo el docker y sus imagenes con los cambios actualizados.

finalmente para correr el proyecto cada vez que paremos con control c la consola en visual studio code para docker usar:
docker run start de esta manera inicia la aplicacion y el docker.


