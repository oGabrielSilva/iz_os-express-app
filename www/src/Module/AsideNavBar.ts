import AsideNavBarConstants from '../Util/AsideNavBarConstants';
import Home, { Location } from './Home';

class AsideNavBar {
  constructor(
    private location: Location = 'Persona',
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

  public close() {
    this.container.style.left = '-200vw';
  }

  public getLocation() {
    return this.location;
  }

  public setLocation(location: Location) {
    this.location = location;
    Home.onLocationChange();
    this.setButtonSelected();
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

  private setButtonSelected() {
    if (!!this.notifications) {
      this.location === 'Notifications'
        ? this.notifications.classList.add(AsideNavBarConstants.getButtonClassSelected())
        : this.notifications.classList.remove(AsideNavBarConstants.getButtonClassSelected());
    }
    if (!!this.rpgSheet) {
      this.location === 'Rpg-Sheet'
        ? this.rpgSheet.classList.add(AsideNavBarConstants.getButtonClassSelected())
        : this.rpgSheet.classList.remove(AsideNavBarConstants.getButtonClassSelected());
    }
    if (!!this.clothing) {
      this.location === 'Clothing'
        ? this.clothing.classList.add(AsideNavBarConstants.getButtonClassSelected())
        : this.clothing.classList.remove(AsideNavBarConstants.getButtonClassSelected());
    }
    if (!!this.feed) {
      this.location === 'Feed'
        ? this.feed.classList.add(AsideNavBarConstants.getButtonClassSelected())
        : this.feed.classList.remove(AsideNavBarConstants.getButtonClassSelected());
    }
    if (!!this.book) {
      this.location === 'Book'
        ? this.book.classList.add(AsideNavBarConstants.getButtonClassSelected())
        : this.book.classList.remove(AsideNavBarConstants.getButtonClassSelected());
    }
    if (!!this.files) {
      this.location === 'Files'
        ? this.files.classList.add(AsideNavBarConstants.getButtonClassSelected())
        : this.files.classList.remove(AsideNavBarConstants.getButtonClassSelected());
    }
    if (!!this.drafts) {
      this.location === 'Drafts'
        ? this.drafts.classList.add(AsideNavBarConstants.getButtonClassSelected())
        : this.drafts.classList.remove(AsideNavBarConstants.getButtonClassSelected());
    }
    if (!!this.persona) {
      this.location === 'Persona'
        ? this.persona.classList.add(AsideNavBarConstants.getButtonClassSelected())
        : this.persona.classList.remove(AsideNavBarConstants.getButtonClassSelected());
    }
    if (!!this.skills) {
      this.location === 'Skills'
        ? this.skills.classList.add(AsideNavBarConstants.getButtonClassSelected())
        : this.skills.classList.remove(AsideNavBarConstants.getButtonClassSelected());
    }
    if (!!this.weapon) {
      this.location === 'Weapon'
        ? this.weapon.classList.add(AsideNavBarConstants.getButtonClassSelected())
        : this.weapon.classList.remove(AsideNavBarConstants.getButtonClassSelected());
    }
    if (!!this.other) {
      this.location === 'Other'
        ? this.other.classList.add(AsideNavBarConstants.getButtonClassSelected())
        : this.other.classList.remove(AsideNavBarConstants.getButtonClassSelected());
    }
  }
}

export default new AsideNavBar();
