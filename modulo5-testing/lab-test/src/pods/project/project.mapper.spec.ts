import * as apiModel from './api/project.api-model';
import { mapProjectFromApiToVm } from './project.mapper';
import * as viewModel from './project.vm';

describe('Project mapper spec', () => {
  it('should return a project when feed with an existing viewModel project', () => {
    // Arrange
    const apiModelEmployee: apiModel.EmployeeSummary = {
      employeeName: 'TestEmployee',
      id: '1',
      isAssigned: false,
    };

    const project: apiModel.Project = {
      employees: [apiModelEmployee],
      id: '1',
      isActive: false,
      name: 'TestProject',
      comments: 'no comments',
      externalId: '123',
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).not.toBeNull();
    expect(result.employees.length).toEqual(1);
    expect(result.employees[0]).toEqual(apiModelEmployee);
  });

  it('should return new project when it feed with empty project', () => {
    // Arrange
    const project: apiModel.Project = undefined;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).not.toBeNull();
    expect(result.employees).toEqual([]);
  });

  it('should return expected result feeding correct values', () => {
    // Arrange
    const project: apiModel.Project = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      externalId: 'external test id',
      comments: 'Test comments',
      employees: [
        {
          id: 'test id',
          isAssigned: true,
          employeeName: 'test employee name',
        },
      ],
    };

    const expectedResult: viewModel.Project = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      externalId: 'external test id',
      comments: 'Test comments',
      employees: [
        {
          id: 'test id',
          isAssigned: true,
          employeeName: 'test employee name',
        },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
