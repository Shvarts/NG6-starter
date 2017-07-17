import navbar from "./navbar.factory";

class NavbarController {
  constructor() {
    this.getItems = navbar.getItems();
    this.getCategories = navbar.getCategories();
    this.getSubmenus = navbar.getSubmenus();
    this.getDepartments = navbar.getDepartments();
    this.selectedCategory = this.getCategories[0];
    this.txtSearch = "";
    this.blockView = [];
    this.searchedItems = [];
  }

  search(selectedCategory) {
    this.searchedItems.length = 0;//reset
    this.txtSearch = this.getText;//getText from searchfield
    for (let i in this.getItems) {
      for (let j in this.getItems[i].category) {
        if (selectedCategory === this.getItems[i].category[j]) {
          this.searchedItems[i] = this.getItems[i];
          console.log("=============================================");
          console.log("[" + i + "][" + j + "] " + this.searchedItems[i].id);
          console.log("[" + i + "][" + j + "] " + this.searchedItems[i].category[j]);
          console.log("[" + i + "][" + j + "] " + this.searchedItems[i].name);
          console.log("[" + i + "][" + j + "] " + this.searchedItems[i].price);
          console.log("[" + i + "][" + j + "] " + this.searchedItems[i].owner);
        }
      }
    }
  }
}

export default NavbarController;
