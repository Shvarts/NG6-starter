import crud from './crud.factory';

class CrudController {

  constructor($scope) {
    this.$scope = $scope;
    this.$scope.name = crud.getName();
    this.$scope.items = crud.getItems();
    this.$scope.isEditing = false;
    this.$scope.newItem = null;
  }

  addItem(value) {
    if (value) {
      let item = this.$scope.newItem;

      crud.addItem(item);
      this.clearInput();

    }
  }

  deleteItem(item) {
    crud.deleteItem(item);
  }

  editItem(item) {
    this.$scope.isEditing = !this.$scope.isEditing;
    this.$scope.newItem = item;

    if (this.$scope.isEditing == false) {
      this.clearInput();
    }
  }

  updateItem(value) {
    if (value) {
      this.$scope.isEditing = !this.$scope.isEditing;
      this.clearInput();
    }
  }

  clearInput() {
    this.$scope.newItem = {};
    this.$scope.crFrm.$setPristine(true);
    this.$scope.crFrm.$setDirty(false);
  }
}

CrudController.$inject = ['$scope'];

export default CrudController;
