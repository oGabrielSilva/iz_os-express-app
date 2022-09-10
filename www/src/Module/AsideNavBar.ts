import AsideNavBarConstants from '../Util/AsideNavBarConstants';
import Home, { Location } from './Home';

class AsideNavBar {
  constructor(
    private location: Location = 'Feed',
    private readonly container: HTMLDivElement = document.querySelector(
      AsideNavBarConstants.getContainerClass()
    ),
    private readonly headerButton: HTMLButtonElement = document.querySelector(
      AsideNavBarConstants.getHeaderButtonId()
    ),
    private readonly feed: HTMLButtonElement = document.querySelector(
      AsideNavBarConstants.getFeedId()
    ),
    private readonly notifications: HTMLButtonElement = document.querySelector(
      AsideNavBarConstants.getNotificationsId()
    ),
    private readonly files: HTMLButtonElement = document.querySelector(
      AsideNavBarConstants.getFilesId()
    ),
    private readonly drafts: HTMLButtonElement = document.querySelector(
      AsideNavBarConstants.getDraftsId()
    ),
    private readonly persona: HTMLButtonElement = document.querySelector(
      AsideNavBarConstants.getPersonaId()
    ),
    private readonly skills: HTMLButtonElement = document.querySelector(
      AsideNavBarConstants.getSkillsId()
    ),
    private readonly weapon: HTMLButtonElement = document.querySelector(
      AsideNavBarConstants.getWeaponId()
    ),
    private readonly clothing: HTMLButtonElement = document.querySelector(
      AsideNavBarConstants.getClothingId()
    ),
    private readonly other: HTMLButtonElement = document.querySelector(
      AsideNavBarConstants.getOtherId()
    ),
    private readonly rpgSheet: HTMLButtonElement = document.querySelector(
      AsideNavBarConstants.getRpgSheetId()
    ),
    private readonly book: HTMLButtonElement = document.querySelector(
      AsideNavBarConstants.getBookId()
    )
  ) {}

  public init() {
    if (
      !!this.feed ||
      !!this.notifications ||
      !!this.files ||
      !!this.drafts ||
      !!this.persona ||
      !!this.skills ||
      !!this.weapon ||
      !!this.clothing ||
      !!this.other ||
      !!this.rpgSheet ||
      !!this.book
    ) {
      this.addOnClickListeners();
    }
  }

  public open() {
    if (this.container) this.container.style.left = '0';
  }

  public getLocation() {
    return this.location;
  }

  public setLocation(location: Location) {
    this.location = location;

    Home.onLocationChange();
  }

  private close() {
    this.container.style.left = '-200vh';
  }

  private addOnClickListeners() {
    if (!!this.headerButton) this.headerButton.addEventListener('click', () => this.open());
    if (!!this.container) {
      this.container.addEventListener('click', ({ target }) => {
        if ((target as HTMLDivElement).id === AsideNavBarConstants.getContainerId()) this.close();
      });
    }
    if (!!this.notifications) {
      this.notifications.addEventListener('click', () => this.setLocation('Notifications'));
    }
    if (!!this.rpgSheet) {
      this.rpgSheet.addEventListener('click', () => this.setLocation('Rpg-Sheet'));
    }
    if (!!this.clothing) {
      this.clothing.addEventListener('click', () => this.setLocation('Clothing'));
    }
    if (!!this.feed) this.feed.addEventListener('click', () => this.setLocation('Feed'));
    if (!!this.book) this.book.addEventListener('click', () => this.setLocation('Book'));
    if (!!this.files) this.files.addEventListener('click', () => this.setLocation('Files'));
    if (!!this.drafts) this.drafts.addEventListener('click', () => this.setLocation('Drafts'));
    if (!!this.persona) this.persona.addEventListener('click', () => this.setLocation('Persona'));
    if (!!this.skills) this.skills.addEventListener('click', () => this.setLocation('Skills'));
    if (!!this.weapon) this.weapon.addEventListener('click', () => this.setLocation('Weapon'));
    if (!!this.other) this.other.addEventListener('click', () => this.setLocation('Other'));
  }
}

export default new AsideNavBar();
