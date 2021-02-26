describe('REST Test with Cypress', () => {

    //Agregar una mascota realizando un POST al path /v2/pet.
    it('Hit al post', () => {
      cy.request('POST','https://petstore.swagger.io/v2/pet',{
        "id": 0,
        "category": {
          "id": 0,
          "name": "Perros"
        },
        "name": "Baufi",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "Collie"
          }
        ],
        "status": "available"
      }
      
    ).as('pet')
      cy.get('@pet').its('status').should('equal', 200) //Validando status Code
      cy.get('@pet').its('body').should('include', {name: "Baufi"}) 
  })

//Realizar un GET /v2/pet/{petId} para obtener una mascota existente.
  it('Hit al get', () => {
    cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/pet/9222968140497186000',
        //failOnStatusCode: false
    }).as('pet')
    cy.get('@pet').its('status').should('equal', 200) //Validando status Code
    
})

//Modificar una mascota existente mediante PUT al path /v2/pet.
it('Hit al put', () => {
    cy.request('PUT',
          'https://petstore.swagger.io/v2/pet',   
    {
      "id": 9222968140497186000,
      "category": {
        "id": 0,
        "name": "Perros"
      },
      "name": "Nombre modificado",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "Crica"
        }
      ],
      "status": "available"
    }).as('pet')
    cy.get('@pet').its('status').should('equal', 200) //Validando status Code
    cy.get('@pet').its('body').should('include', {name: "Nombre modificado"})    
})
})