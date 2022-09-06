import Auth from '../Auth/Auth';
import Colors from '../resources/Colors';
import HtmlConstants from './HtmlConstants';

type WindowLocation = 'index' | 'sign-up' | 'home';

class Extra {
  private constructor() {}

  public static setModal() {
    const modals = document.querySelectorAll(HtmlConstants.getModalElement());

    if (!modals) return;

    modals.forEach((modal) => {
      const close = modal.querySelector(HtmlConstants.getButtonModalClose()) as HTMLButtonElement;

      if (!!close) {
        close.style.right = '-200vw';
        close.addEventListener('click', () => {
          if (!modal.classList.contains(HtmlConstants.getClassOutScreenLeft())) {
            modal.classList.add(HtmlConstants.getClassOutScreenLeft());
          }
          close.style.right = '-200vw';
        });
      }
    });
  }

  public static onThemeChange() {
    const mode = Colors.getInstance().mode;
    Extra.setAppIconByTheme(null, null);
    const themeButton = document.querySelector(HtmlConstants.getButtonChangeThemeId());
    const googleButton = document.querySelector(HtmlConstants.getClassSignInGoogle());

    if (themeButton && themeButton.querySelector('img')) {
      const src = themeButton.querySelector('img').src;
      themeButton.querySelector('img').src =
        mode === 'dark' ? src.replace('moon', 'sun') : src.replace('sun', 'moon');
    }
    if (!!googleButton && !!googleButton.querySelectorAll('img').length) {
      Extra.setAppIconByTheme(googleButton.querySelectorAll('img'), mode, [
        '/images/icon/google.svg',
        'images/icon/google-dark.svg',
      ]);
    }
  }

  public static setAppIconByTheme(
    icons: NodeListOf<HTMLImageElement> | null,
    mode: 'light' | 'dark' | null,
    links?: string[]
  ) {
    if (!icons) icons = document.querySelectorAll(HtmlConstants.getAppIconId());
    if (!mode) mode = Colors.getInstance().mode;

    if (!!icons && icons.length > 0)
      icons.forEach((image) => {
        if (!!links && links.length === 2) {
          if (mode === 'light') image.src = links[0];
          else image.src = links[1];
        } else {
          image.src = mode === 'light' ? '/images/icon/icon.svg' : '/images/icon/icon-dark.svg';
        }
      });
  }

  public static onAuthChanged() {
    const value: WindowLocation = (
      document.querySelector(HtmlConstants.getWindowLocation()) as HTMLInputElement
    ).value as WindowLocation;

    const redirectToHome = () => {
      if (!!Auth.getUser()) window.location.href = '/home';
    };

    switch (value) {
      case 'index':
        redirectToHome();
        return;
      case 'sign-up':
        redirectToHome();
        return;
      case 'home':
        if (!Auth.getUser()) window.location.href = '/';
        return;
      default:
        return;
    }
  }
}

export default Extra;
