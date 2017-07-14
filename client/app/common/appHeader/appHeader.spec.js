import AppHeaderModule from './appHeader';
import AppHeaderController from './appHeader.controller';
import AppHeaderComponent from './appHeader.component';
import AppHeaderTemplate from './appHeader.html';

describe('AppHeader', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AppHeaderModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AppHeaderController();
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
      expect(AppHeaderTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = AppHeaderComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AppHeaderTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AppHeaderController);
    });
  });
});
