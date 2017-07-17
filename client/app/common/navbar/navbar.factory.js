import * as constants from './navbar.constants';


class NavbarFactory {
  getItems() {
    return constants.Items;
  }
  getCategories() {
    return constants.arrayOfCategory;
  }
  getSubmenus() {
    return constants.arrayOfSubmenu;
  }
  getDepartments(){
    return constants.Departments;
  }

}

const navbar = new NavbarFactory();
Object.freeze(navbar);

export default navbar;
