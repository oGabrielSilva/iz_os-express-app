class AsideNavBarConstants {
  private readonly containerClass = '.aside-menu';
  private readonly containerId = 'aside-menu-id';
  private readonly navClass = '.nav-aside-menu';
  private readonly headerButtonId = '#open-aside-nav';
  private readonly feedId = '#my-feed';
  private readonly notificationsId = '#my-notifications';
  private readonly filesId = '#my-files';
  private readonly draftsId = '#my-drafts';
  private readonly personaId = '#persona';
  private readonly skillsId = '#skills';
  private readonly weaponId = '#weapon';
  private readonly clothingId = '#clothing';
  private readonly otherId = '#other';
  private readonly rpgSheetId = '#rpg-sheet';
  private readonly bookId = '#book';

  th() {
    console.log(this);
  }

  public getBookId() {
    return this.bookId;
  }

  public getRpgSheetId() {
    return this.rpgSheetId;
  }

  public getOtherId() {
    return this.otherId;
  }

  public getClothingId() {
    return this.clothingId;
  }

  public getWeaponId() {
    return this.weaponId;
  }

  public getPersonaId() {
    return this.personaId;
  }

  public getSkillsId() {
    return this.skillsId;
  }

  public getFilesId() {
    return this.filesId;
  }

  public getDraftsId() {
    return this.draftsId;
  }

  public getFeedId() {
    return this.feedId;
  }

  public getNotificationsId() {
    return this.notificationsId;
  }

  public getHeaderButtonId() {
    return this.headerButtonId;
  }

  public getContainerClass() {
    return this.containerClass;
  }

  public getNavClass() {
    return this.navClass;
  }

  public getContainerId() {
    return this.containerId;
  }
}

export default new AsideNavBarConstants();
