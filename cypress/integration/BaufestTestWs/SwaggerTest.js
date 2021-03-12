describe('REST API Test with Cypress', () => {


  var myID = '';

//Agregar una mascota realizando un POST al path /v2/pet.
  it('Hit al post', () => {
    //Almacenando Variables
    var method = 'POST';
    var url = 'https://petstore.swagger.io/v2/pet';
    var body = {
      "id": 0,
      "category": {
        "id": 0,
        "name": "Perros"
      },
      "name": "Felipe",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "perro"
        }
      ],
      "status": "available"
    }; 
    

    cy.request(method, url, body).as('pet');
    
    
    cy.get('@pet')
      .then(response => {
        console.log('id: ', response.body.id)
        myID = response.body.id; //Guardando Id

      })
    cy.get('@pet').its('status').should('equal', 200)
    
    cy.get('@pet').its('body').should('include', {name: "Felipe"})
    })

//Realizar un GET /v2/pet/{petId} para obtener una mascota existente.
it('Hit al get', () => {


  console.log('myID para get: ', myID); 
  cy.request({method: 'GET',
        url: `https://petstore.swagger.io/v2/pet/${myID}`, 
        failOnStatusCode: false
  
  }).as('pety')
  cy.get('@pety').its('status').should('equal', 200) //Validando status Code
  
})


//Modificar una mascota existente mediante PUT al path /v2/pet.
it('Hit al put', () => {

  var method = 'PUT';
  var url = `https://petstore.swagger.io/v2/pet`; 
  var bodyPut = {
    "id": myID,
    "category": {
      "id": 0,
      "name": "Perros"
    },
    "name": "Nombre modificado con variables",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "perro"
      }
    ],
    "status": "available"
  }
  

  cy.request(method, url, bodyPut).as('pet')
  cy.get('@pet').its('status').should('equal', 200) //Validando status Code
  cy.get('@pet').its('body').should('include', {name: "Nombre modificado con variables"})
  

})

})