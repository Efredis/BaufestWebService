describe ('Formas de encontrar un elemento', function(){
        it ('Buscando elementos', function(){
            cy.visit('http://automationpractice.com/index.php');
            cy.get('.search_query.form-control.ac_input').type('Hola'); //Buscando por clase
            cy.get('#search_query_top').type('como te va'); //Buscando por id.
            cy.get('[name="search_query"]').type('todo bien'); //Buscando por otra propiedad
            cy.get('[placeholder="Search"]').clear(); //Borra lo que esta en el elemento
        })
    })