import Auth from './Auth/Auth';
import Forms from './Module/Forms';
import ModalAlert from './Module/ModalAlert';
import Colors from './resources/Colors';
import Extra from './Util/Extra';
import HtmlConstants from './Util/HtmlConstants';
import AsideNavBar from './Module/AsideNavBar';
import Home from './Module/Home';

const appIcons = document.querySelectorAll(HtmlConstants.getAppIconId());
const colors = Colors.getInstance();
const buttonChangeTheme = document.querySelector(HtmlConstants.getButtonChangeThemeId());
const signOut = document.querySelectorAll<HTMLButtonElement>(
  HtmlConstants.getSignOutButtonsClass()
);

if (appIcons.length) Extra.setAppIconByTheme(appIcons as NodeListOf<HTMLImageElement>, colors.mode);
if (buttonChangeTheme) buttonChangeTheme.addEventListener('click', Colors.setTheme);
if (document.querySelector('#sign-text')) {
  const element = document.querySelector('#sign-text') as HTMLParagraphElement;
  element.style.maxWidth = '500px';
  element.style.textAlign = 'center';
}
if (signOut.length > 0) {
  signOut.forEach((button) =>
    button.addEventListener('click', async () => {
      await Auth.signOut();
      window.location.href = '/';
    })
  );
}

Forms.setFormsConfig();
Colors.initTheme();
Extra.setModal();

(async () => {
  await Auth.init();
  ModalAlert.init();
  AsideNavBar.init();
  Home.init();
})();
