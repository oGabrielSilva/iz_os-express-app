class HtmlConstants {
  private readonly appIconId = '#app-icon';
  private readonly signInFormId = 'sign-in';
  private readonly emailInputId = '#email';
  private readonly emailInputClass = '.email-input';
  private readonly passwordInputId = '#password';
  private readonly submitButtonId = '#submit';
  private readonly buttonSubmitClassModal = '.button-submit-modal';
  private readonly forgotPasswordButtonId = '#forgot-password';
  private readonly containerModalForgotPassword = '#modal-forgot-password';
  private readonly modaElement = '.modal';
  private readonly buttonModalClose = '.button-modal-close';
  private readonly classOutScreenLeft = 'out-screen-left';
  private readonly classSignInGoogle = '#sign-in-google';
  private readonly buttonChangeThemeId = '#button-change-theme';
  private readonly classFormModal = 'modal-form';
  private readonly googleSignInId = '#sign-in-google';
  private readonly dontHaveAccountButtonId = '#dont-have-account';
  private readonly windowLoadingClass = '.window-loading';
  private readonly windowLocation = '#wl';
  private readonly signUpFormId = 'sign-up';
  private readonly alreadyHaveAccountButtonId = '#already-have-account';
  private readonly modalAlertContainerClass = '.modal-alert-container';
  private readonly modalAlertBodyId = '#modal-body';
  private readonly modalAlertButtonCloseId = '#button-modal-alert-close';
  private readonly modalAlertButtonOKId = '#modal-alert-ok';
  private readonly modalAlertLoadingId = '#modal-alert-loading';
  private readonly signOutButtonsClass = '.sign-out';

  public getSignOutButtonsClass() {
    return this.signOutButtonsClass;
  }

  public getModalAlertLoadingId() {
    return this.modalAlertLoadingId;
  }

  public getModalAlertButtonCloseId() {
    return this.modalAlertButtonCloseId;
  }

  public getModalAlertButtonOKId() {
    return this.modalAlertButtonOKId;
  }

  public getModalAlertBodyId() {
    return this.modalAlertBodyId;
  }

  public getModalAlertContainerClass() {
    return this.modalAlertContainerClass;
  }

  public getAlreadyHaveAccountButtonId() {
    return this.alreadyHaveAccountButtonId;
  }

  public getSignUpFormId() {
    return this.signUpFormId;
  }

  public getWindowLocation() {
    return this.windowLocation;
  }

  public getWindowLoadingClass() {
    return this.windowLoadingClass;
  }

  public getDontHaveAccountButtonId() {
    return this.dontHaveAccountButtonId;
  }

  public getGoogleSignInId() {
    return this.googleSignInId;
  }

  public getClassFormModal() {
    return this.classFormModal;
  }

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

  public getButtonSubmitClassModal() {
    return this.buttonSubmitClassModal;
  }

  public getEmailInputId() {
    return this.emailInputId;
  }

  public getEmailInputClass() {
    return this.emailInputClass;
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
