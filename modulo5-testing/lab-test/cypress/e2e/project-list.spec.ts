describe('Project list specs', () => {
    it('visit the projects page', () => {
      cy.visit('/projects');
    });
  
    it('should go to new project page when clicking on new project button', () => {
      // Act
      cy.visit('/projects');
      cy.findByText('Nuevo proyecto').click();
  
      // Assert
      cy.url().should('eq', 'http://localhost:8080/#/projects/0');
    });
  
    it('should go to the edit page of the project when you click the edit icon button', () => {
      // Act
      cy.visit('/projects');
      cy.get('[data-testid="1"] [aria-label="edit project"]').click();
  
      // Assert
      cy.url().should('eq', 'http://localhost:8080/#/projects/1');
    });
  
    it('should show delete modal on click of delete button', () => {
      // Act
      cy.visit('/projects');
      cy.get('[data-testid="1"] [aria-label="delete project"]').click();
  
      // Assert
      cy.get('.MuiDialog-container').should('be.visible');
    });
  
    it('should close delete modal without deleting the project when clicking cancel button', () => {
      // Act
      cy.visit('/projects');
      cy.get('[data-testid="1"] [aria-label="delete project"]').click();
  
      // Assert
      cy.get('.MuiDialog-container').should('be.visible');
  
      //Act
      cy.findByText("Cancelar").click();
  
      //Assert
      cy.get('.MuiDialog-container').should('not.be.visible');
      cy.get('[data-testid="1"]').should('exist');
    });
  
    it('should close delete modal and delete project on click confirm button', () => {
      // Act
      cy.visit('/projects');
      cy.get('[data-testid="1"] [aria-label="delete project"]').click();
  
      // Assert
      cy.get('.MuiDialog-container').should('be.visible');
  
      //Act
      cy.findByText("Aceptar").click();
  
      //Assert
      cy.get('.MuiDialog-container').should('not.be.visible');
      cy.get('[data-testid="1"]').should('not.exist');
    });
  });