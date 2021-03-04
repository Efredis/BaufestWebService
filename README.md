# CypressWorkshop
Las pruebas automatizadas llamadas "CypressWorkshop" cumple con las siguientes premisas:

Tomando como referencia lo documentado en este swagger:
https://petstore.swagger.io/ .
- Agregar una mascota realizando un POST al path /v2/pet.
- Realizar un GET /v2/pet/{petId} para obtener una mascota existente.
- Modificar una mascota existente mediante PUT al path /v2/pet.
- En todos los casos validar:
	- Status code esperado.
	- Schema del response.

## Requisitos del sistema:

### Requerimientos mínimos de hardware y software para configurar entorno.
- SO: Windows 7 ó posterior.
- Procesador: Intel from 1.2 GHz ó equivilent AMD family.
- Memoria: 4 GB de RAM.
- Gráficos: DirectX 9 compatible Tarjeta gráfica card.
- DirectX: Versión 9.0.
- Almacenamiento: 1 GB de espacio disponible.

Para ejecutar las pruebas es necesario configurar un entorno que comprende lo siguiente:
- Se requiere instalar el navegador Google Chrome.
- Se requiere descargar e instalar la aplicación "NodeJs" desde la web https://nodejs.org/es/download/.
- Se requiere instalar la aplicación Cypress a traves de la opción de comando "npm", tal como se muestran las indicaciones en su web oficial: https://www.cypress.io/

### Ejecutando las pruebas:

Una vez configurado el entorno para las pruebas y descargar el repositorio, se debe realizar lo siguiente para su ejecución: 

- Ejecutamos el Cypress desde la consola o terminal de windows o del nodejs desde al ruta de la carpeta del proyecto "CypressWorkshop" que descargamos desde el repositorio. indicando el comando "Cypress open",
este proceso tarda un momento y levantará la interfaz gráfica de la aplicación.
- Clic al archivo de nombres "SwaggerTest.js" que se encuentra en la parte superior del panel lateral izquierdo


Luego de todo este procedimiento se ejecutarán las pruebas requeridas.

### Otras Consideraciones:
- Es posible que al ejecutar las pruebas indique algun error 404 en el segundo test, esto posiblemente sea una falla en la web a testear, sin embargo,
haciendo click en el boton de la flechita girando a la derecha de nombre "Run all test", ejecutará las pruebas una vez mas sin ningún problema.