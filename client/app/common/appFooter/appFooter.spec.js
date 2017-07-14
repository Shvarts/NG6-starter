import AppFooterModule from './appFooter';
import AppFooterController from './appFooter.controller';
import AppFooterComponent from './appFooter.component';
import AppFooterTemplate from './appFooter.html';

describe('AppFooter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AppFooterModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AppFooterController();
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
      expect(AppFooterTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = AppFooterComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AppFooterTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AppFooterController);
    });
  });
});
