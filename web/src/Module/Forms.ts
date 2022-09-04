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
  }

  private static setSignInForm(form: HTMLFormElement) {
    const formValid = new FormValid([
      { key: 'email', value: false },
      { key: 'password', value: false },
    ]);

    const emailInput = form.querySelector(HtmlConstants.getEmailInputId()) as HTMLInputElement;
    const passwordInput = form.querySelector(
      HtmlConstants.getPasswordInputId()
    ) as HTMLInputElement;
    const submit = form.querySelector(HtmlConstants.getSubmitButtonId()) as HTMLButtonElement;
    const forgotPassword = form.querySelector(
      HtmlConstants.getForgotPasswordButtonId()
    ) as HTMLInputElement;

    const setButtonDisable = () => {
      const valid = formValid.allValid();
      submit.disabled = valid;
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

    submit.addEventListener('click', () => {});

    forgotPassword.addEventListener('click', () => {
      const container = document.querySelector(HtmlConstants.getContainerModalForgotPassword());

      if (!!container) {
        const modal = container.querySelector(HtmlConstants.getModalElement());
        if (!!modal) {
          const btn = modal.querySelector(HtmlConstants.getButtonModalClose()) as HTMLButtonElement;
          if (!!btn) btn.style.right = 'var(--p3)';
          console.log(btn, !!btn);
          modal.classList.remove(HtmlConstants.getClassOutScreenLeft());
        }
      }
    });

    setButtonDisable();
  }
}

export default Forms;
