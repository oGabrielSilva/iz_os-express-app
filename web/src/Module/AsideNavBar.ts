import AsideNavBarConstants from '../Util/AsideNavBarConstants';
import { Location } from './Home';

class AsideNavBar {
  constructor(
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
    if (this.container) {
      this.container.addEventListener('click', ({ target }) => {
        if ((target as HTMLDivElement).id === AsideNavBarConstants.getContainerId()) this.close();
      });
    }
    if (this.headerButton) this.headerButton.addEventListener('click', () => this.open());
  }

  public open() {
    if (this.container) this.container.style.left = '0';
  }

  private close() {
    this.container.style.left = '-200vh';
  }

  private setHomeItem(location: Location) {}
}

export default new AsideNavBar();
