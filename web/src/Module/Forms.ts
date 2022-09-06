import Auth from '../Auth/Auth';
import FormValid from '../Model/FormValid';
import HtmlConstants from '../Util/HtmlConstants';
import Validation from '../Util/Validation';

class Forms {
  private constructor() {}

  public static setFormsConfig() {
    if (!document.forms[0]) return;
    const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('form');
    forms.forEach(Forms.setConfig);
  }

  private static setConfig(form: HTMLFormElement) {
    form.addEventListener('submit', (e) => e.preventDefault());
    if (form.id === HtmlConstants.getSignInFormId()) Forms.setSignInForm(form);
    else if (form.id === HtmlConstants.getSignUpFormId()) Forms.setSignUpForm(form);
    else if (form.classList.contains(HtmlConstants.getClassFormModal())) Forms.modalForm(form);
  }

  private static modalForm(form: HTMLFormElement) {
    const formValid = new FormValid([{ key: 'email', value: false }]);
    const emailInput = form.querySelector(HtmlConstants.getEmailInputClass()) as HTMLInputElement;
    const submit = form.querySelector(
      HtmlConstants.getButtonSubmitClassModal()
    ) as HTMLButtonElement;

    const setButtonDisable = () => {
      submit.disabled = formValid.allValid();
    };

    emailInput.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      const str = Validation.isEmail(target.value);

      if (str === '') formValid.setKey('email', true, setButtonDisable);
      else formValid.setKey('email', false, setButtonDisable);

      const small = target.parentElement.querySelector('small');
      if (!!small) {
        small.innerText = str;
      }
    });

    submit.addEventListener('click', () => {});

    setButtonDisable();
  }

  private static setSignInForm(form: HTMLFormElement) {
    const formValid = new FormValid([
      { key: 'email', value: false },
      { key: 'password', value: false },
    ]);
    const googleSignIn = form.querySelector(HtmlConstants.getGoogleSignInId());
    const dontHaveAccount = form.querySelector(HtmlConstants.getDontHaveAccountButtonId());
    const emailInput = form.querySelector(HtmlConstants.getEmailInputId()) as HTMLInputElement;
    const passwordInput = form.querySelector(
      HtmlConstants.getPasswordInputId()
    ) as HTMLInputElement;
    const submit = form.querySelector(HtmlConstants.getSubmitButtonId()) as HTMLButtonElement;
    const forgotPassword = form.querySelector(
      HtmlConstants.getForgotPasswordButtonId()
    ) as HTMLInputElement;

    const setButtonDisable = () => {
      submit.disabled = formValid.allValid();
    };

    emailInput.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      const str = Validation.isEmail(target.value);

      if (str === '') formValid.setKey('email', true, setButtonDisable);
      else formValid.setKey('email', false, setButtonDisable);

      const small = target.parentElement.querySelector('small');
      if (!!small) {
        small.innerText = str;
      }
    });

    passwordInput.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      const str = Validation.isPassword(target.value);

      if (str === '') formValid.setKey('password', true, setButtonDisable);
      else formValid.setKey('password', false, setButtonDisable);

      const small = target.parentElement.querySelector('small');
      if (!!small) {
        small.innerText = str;
      }
    });

    submit.addEventListener('click', () => {
      Auth.loginUser(emailInput.value, passwordInput.value);
    });

    forgotPassword.addEventListener('click', () => {
      const container = document.querySelector(HtmlConstants.getContainerModalForgotPassword());

      if (!!container) {
        const modal = container.querySelector(HtmlConstants.getModalElement());
        if (!!modal) {
          const btn = modal.querySelector(HtmlConstants.getButtonModalClose()) as HTMLButtonElement;
          if (!!btn) btn.style.right = 'var(--p3)';
          modal.classList.remove(HtmlConstants.getClassOutScreenLeft());
        }
      }
    });

    if (!!googleSignIn) googleSignIn.addEventListener('click', () => console.log('Google'));
    if (!!dontHaveAccount) {
      dontHaveAccount.addEventListener('click', () => (window.location.href = '/sign-up'));
    }

    setButtonDisable();
  }

  private static setSignUpForm(form: HTMLFormElement) {
    const formValid = new FormValid([
      { key: 'email', value: false },
      { key: 'password', value: false },
    ]);
    const alreadyHaveAccount = form.querySelector(HtmlConstants.getAlreadyHaveAccountButtonId());
    const emailInput = form.querySelector(HtmlConstants.getEmailInputId()) as HTMLInputElement;
    const passwordInput = form.querySelector(
      HtmlConstants.getPasswordInputId()
    ) as HTMLInputElement;
    const submit = form.querySelector(HtmlConstants.getSubmitButtonId()) as HTMLButtonElement;

    const setButtonDisable = () => {
      submit.disabled = formValid.allValid();
    };

    emailInput.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      const str = Validation.isEmail(target.value);

      if (str === '') formValid.setKey('email', true, setButtonDisable);
      else formValid.setKey('email', false, setButtonDisable);

      const small = target.parentElement.querySelector('small');
      if (!!small) {
        small.innerText = str;
      }
    });

    passwordInput.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      const str = Validation.isPassword(target.value);

      if (str === '') formValid.setKey('password', true, setButtonDisable);
      else formValid.setKey('password', false, setButtonDisable);

      const small = target.parentElement.querySelector('small');
      if (!!small) {
        small.innerText = str;
      }
    });

    submit.addEventListener('click', () => {
      Auth.createUser(emailInput.value, passwordInput.value);
    });

    if (!!alreadyHaveAccount) {
      alreadyHaveAccount.addEventListener('click', () => (window.location.href = '/'));
    }

    setButtonDisable();
  }
}

export default Forms;
