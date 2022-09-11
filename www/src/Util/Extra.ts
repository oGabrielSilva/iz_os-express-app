import Auth from '../Auth/Auth';
import Colors from '../resources/Colors';
import HomeConstants from './HomeConstants';
import HtmlConstants from './HtmlConstants';
import PersonaConstants from './PersonaConstants';

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
    const profileIcon: HTMLImageElement = document.querySelector(HomeConstants.getProfileIconId());
    const personaProfilePlaceholder: HTMLInputElement = document.querySelector(
      PersonaConstants.getPreview()
    );

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
    if (!!profileIcon && profileIcon.src.includes('/images/placeholder/profile')) {
      profileIcon.src =
        mode === 'dark'
          ? '/images/placeholder/profile-dark.svg'
          : '/images/placeholder/profile.svg';
    }

    if (
      !!personaProfilePlaceholder &&
      personaProfilePlaceholder.src.includes('/images/placeholder/profile')
    ) {
      personaProfilePlaceholder.src =
        mode === 'dark'
          ? '/images/placeholder/profile-dark.svg'
          : '/images/placeholder/profile.svg';
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

  public static async getDataUrl(image: Blob) {
    const promise = new Promise<string>((resolve, reject) => {
      try {
        const file = URL.createObjectURL(image);
        const img = document.createElement('img');
        img.src = file;
        img.onload = (event) => {
          const canvas = document.createElement('canvas');
          canvas.width = 150;
          canvas.height = 150;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(event.target as HTMLImageElement, 0, 0, canvas.width, canvas.height);
          URL.revokeObjectURL(file);
          resolve(ctx.canvas.toDataURL());
        };
      } catch (error) {
        reject(error);
      }
    });
    return promise;
  }
}

export default Extra;
