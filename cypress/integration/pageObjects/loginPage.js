class login {

    email() {
       return cy.get('input[name="username"]')
    }

    password() {
       return cy.get('input[name="password"]')
    }

    submit() {
       return cy.get('input[type="submit"]')
    }
}


export default login