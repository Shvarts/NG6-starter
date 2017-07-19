import * as constants from './departments.constants';

class DepartmentsFactory {
  getDepartments(){
    return constants.Departments;
  }

}

const departments = new DepartmentsFactory();
Object.freeze(departments);

export default departments;
