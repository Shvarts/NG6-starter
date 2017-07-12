import search from './search.factory'

class SearchController {
  constructor($scope) {
  	this.$scope = $scope;
    this.$scope.test = "HELLO";
  }

}

export default SearchController;
