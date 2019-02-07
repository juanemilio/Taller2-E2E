describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.contains('Ingresar').click()

	//Para el registro
	/**
		cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Juan Emilio")
		cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Galindo")
		cy.get('.cajaSignUp').find('input[name="correo"]').click().type("juanemilio138@gmail.com")
		cy.get('.cajaSignUp').find('input[name="password"]').click().type("CypressTest1234")
		cy.get('.cajaSignUp').contains('Estudio una maestria').click()
		cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("16")
		cy.get('.cajaSignUp').contains('Acepto los términos y condiciones y la política de privacidad.').click()
		cy.get('.cajaSignUp').contains('Registrarse').click()
		cy.get('.sweet-alert').contains('OK').click()
	**/
	//Para acceder
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("juanemilio138@gmail.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("CypressTest1234")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      //Buscar un profesor
      cy.get('.Select-input').find('input').click({force: true}).type("Veronica Mariño Salazar", {force: true})
      cy.get('.Select-option-group').contains('Veronica Mariño Salazar -').click()
      //Filtros por materia dentro de la página de  un profesor
      cy.get('.materias > div.jsx-3367902293').get('label.labelHover > a').click({ multiple: true })      
    })
})
