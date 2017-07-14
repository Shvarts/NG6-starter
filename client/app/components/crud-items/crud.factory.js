const items = [
  {
    id: 0,
    name: 'PlayStation 4',
    category: 'Consoles',
    price: 250,
    owner: 'Sony',
    editing: false
  },
  {
    id: 1,
    name: 'Xbox 360',
    category: 'Consoles',
    price: 200,
    owner: 'Microsoft',
    editing: false
  }
];

class CrudFactory {
  constructor() {
    if (!CrudFactory.instance) {
      CrudFactory.instance = this;
    }

    return CrudFactory.instance;
  }

  getName() {
    return 'Create Update Delete Controller';
  }

  getItems() {
    return items;
  }

  addItem(item) {
    item.editing = false;
    items.push(item);
  }

  deleteItem(item) {
    let index = items.indexOf(item);
    let res = confirm('Are you sure?');

    if (res) {
      items.splice(index, 1);
    }
  }
}

const crud = new CrudFactory();
Object.freeze(crud);

export default crud;
