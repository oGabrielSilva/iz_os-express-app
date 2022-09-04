import Forms from './Module/Forms';
import Colors from './resources/Colors';
import Extra from './Util/Extra';
import HtmlConstants from './Util/HtmlConstants';

const appIcons = document.querySelectorAll(HtmlConstants.getAppIconId());
const colors = Colors.getInstance();
const buttonChangeTheme = document.querySelector(HtmlConstants.getButtonChangeThemeId());

if (appIcons.length) Extra.setAppIconByTheme(appIcons as NodeListOf<HTMLImageElement>, colors.mode);
if (buttonChangeTheme) buttonChangeTheme.addEventListener('click', Colors.setTheme);
if (document.querySelector('#sign-text')) {
  const element = document.querySelector('#sign-text') as HTMLParagraphElement;
  element.style.maxWidth = '500px';
  element.style.textAlign = 'center';
}

Forms.setFormsConfig();
Colors.initTheme();
Extra.setModal();
