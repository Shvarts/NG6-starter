class LoginController {
  constructor() { }

  login() {
    if(this.frmLogin.$valid) {
      alert('process login data in server side');
    }
  }
}

export default LoginController;
