class SignupController {
  password = '';
  passwordCheck = '';

  constructor() { }

  checkPassword() {
    this.frmSignup.passwordCheck.$setValidity('match', this.password!=undefined && this.password==this.passwordCheck);
  }

  signup() {
    if(this.frmSignup.$valid) {
      alert('Process signup request');
    }
  }
}

export default SignupController;
