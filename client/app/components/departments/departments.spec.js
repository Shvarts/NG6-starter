import DepartmentsModule from './departments';
import DepartmentsController from './departments.controller';
import DepartmentsComponent from './departments.component';
import DepartmentsTemplate from './departments.html';

describe('Departments', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DepartmentsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DepartmentsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(DepartmentsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = DepartmentsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(DepartmentsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(DepartmentsController);
    });
  });
});
