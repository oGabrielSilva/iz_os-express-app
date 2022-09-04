class HtmlConstants {
  private appIconId = '#app-icon';

  private signInFormId = 'sign-in';
  private emailInputId = '#email';
  private passwordInputId = '#password';
  private submitButtonId = '#submit';
  private forgotPasswordButtonId = '#forgot-password';

  private containerModalForgotPassword = '#modal-forgot-password';
  private modaElement = '.modal';
  private buttonModalClose = '.button-modal-close';
  private classOutScreenLeft = 'out-screen-left';
  private classSignInGoogle = '#sign-in-google';
  private buttonChangeThemeId = '#button-change-theme';

  public getButtonChangeThemeId() {
    return this.buttonChangeThemeId;
  }

  public getClassSignInGoogle() {
    return this.classSignInGoogle;
  }

  public getClassOutScreenLeft() {
    return this.classOutScreenLeft;
  }

  public getButtonModalClose() {
    return this.buttonModalClose;
  }

  public getModalElement() {
    return this.modaElement;
  }

  public getContainerModalForgotPassword() {
    return this.containerModalForgotPassword;
  }

  public getForgotPasswordButtonId() {
    return this.forgotPasswordButtonId;
  }

  public getSubmitButtonId() {
    return this.submitButtonId;
  }

  public getEmailInputId() {
    return this.emailInputId;
  }

  public getPasswordInputId() {
    return this.passwordInputId;
  }

  public getSignInFormId() {
    return this.signInFormId;
  }

  public getAppIconId() {
    return this.appIconId;
  }
}

export default new HtmlConstants();
