import Auth from '../Auth/Auth';
import HomeConstants from '../Util/HomeConstants';
import AsideNavBar from './AsideNavBar';

export type Location =
  | 'Feed'
  | 'Notifications'
  | 'Files'
  | 'Drafts'
  | 'Persona'
  | 'Skills'
  | 'Weapon'
  | 'Clothing'
  | 'Other'
  | 'Rpg-Sheet'
  | 'Book';

class Home {
  private readonly feed: HTMLDivElement = document.querySelector(HomeConstants.getFeedId());
  private readonly file: HTMLDivElement = document.querySelector(HomeConstants.getFileId());
  private readonly draft: HTMLDivElement = document.querySelector(HomeConstants.getDraftId());
  private readonly persona: HTMLDivElement = document.querySelector(HomeConstants.getPersonaId());
  private readonly skills: HTMLDivElement = document.querySelector(HomeConstants.getSkillId());
  private readonly weapon: HTMLDivElement = document.querySelector(HomeConstants.getWeaponId());
  private readonly clothing: HTMLDivElement = document.querySelector(HomeConstants.getClothingId());
  private readonly other: HTMLDivElement = document.querySelector(HomeConstants.getOtherId());
  private readonly rpgSheet: HTMLDivElement = document.querySelector(HomeConstants.getRpgSheetId());
  private readonly book: HTMLDivElement = document.querySelector(HomeConstants.getBookId());
  private readonly notification: HTMLDivElement = document.querySelector(
    HomeConstants.getNotificationId()
  );
  private readonly profileIcon: HTMLImageElement = document.querySelector(
    HomeConstants.getProfileIconId()
  );
  private readonly profileName: HTMLTitleElement = document.querySelector(
    HomeConstants.getProfileNameId()
  );

  public init() {
    if (!Auth.getUser()) return;
    if (!!this.profileIcon) this.setProfileIcon();
    if (!!this.profileName) this.setProfileName();
    this.onLocationChange();
    console.log(this);
  }

  public onLocationChange() {
    const asideLocation = AsideNavBar.getLocation();
    this.allInvisible();
    AsideNavBar.close();
    switch (asideLocation) {
      case 'Feed':
        if (!!this.feed) this.feed.classList.remove('invisible');
        break;
      case 'Clothing':
        if (!!this.clothing) this.clothing.classList.remove('invisible');
        break;
      case 'Drafts':
        if (!!this.draft) this.draft.classList.remove('invisible');
        break;
      case 'Book':
        if (!!this.book) this.book.classList.remove('invisible');
        break;
      case 'Files':
        if (!!this.file) this.file.classList.remove('invisible');
        break;
      case 'Notifications':
        if (!!this.notification) this.notification.classList.remove('invisible');
        break;
      case 'Other':
        if (!!this.other) this.other.classList.remove('invisible');
        break;
      case 'Persona':
        if (!!this.persona) this.persona.classList.remove('invisible');
        break;
      case 'Rpg-Sheet':
        if (!!this.rpgSheet) this.rpgSheet.classList.remove('invisible');
        break;
      case 'Skills':
        if (!!this.skills) this.skills.classList.remove('invisible');
        break;
      case 'Weapon':
        if (!!this.weapon) this.weapon.classList.remove('invisible');
        break;
      default:
        if (!!this.feed) this.feed.classList.remove('invisible');
        break;
    }
  }

  private setProfileIcon() {
    this.profileIcon.src = Auth.getUser().photoURL;
    this.profileIcon.width = 35;
    this.profileIcon.height = 35;
  }

  private setProfileName() {
    this.profileName.textContent = Auth.getUser().displayName;
  }

  private allInvisible() {
    if (!!this.feed) this.feed.classList.add('invisible');
    if (!!this.clothing) this.clothing.classList.add('invisible');
    if (!!this.draft) this.draft.classList.add('invisible');
    if (!!this.book) this.book.classList.add('invisible');
    if (!!this.file) this.file.classList.add('invisible');
    if (!!this.notification) this.notification.classList.add('invisible');
    if (!!this.other) this.other.classList.add('invisible');
    if (!!this.persona) this.persona.classList.add('invisible');
    if (!!this.rpgSheet) this.rpgSheet.classList.add('invisible');
    if (!!this.skills) this.skills.classList.add('invisible');
    if (!!this.weapon) this.weapon.classList.add('invisible');
  }
}

export default new Home();
