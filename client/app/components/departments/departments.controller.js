import departments from "./departments.factory";

class DepartmentsController {
  constructor() {
    this.getDepartments = departments.getDepartments();
    this.expandView = [];
  }
}

export default DepartmentsController;
