class HomeConstants {
  private readonly profileIconId = '#profile-icon';
  private readonly profileNameId = '#profile-name';
  private readonly bookId = '#home-book';
  private readonly clothingId = '#home-clothing';
  private readonly draftId = '#home-draft';
  private readonly feedId = '#home-feed';
  private readonly fileId = '#home-file';
  private readonly notificationId = '#home-notification';
  private readonly otherId = '#home-other';
  private readonly personaId = '#home-persona';
  private readonly rpgSheetId = '#home-rpg-sheet';
  private readonly skillId = '#home-skill';
  private readonly weaponId = '#home-weapon';

  public getNotificationId() {
    return this.notificationId;
  }

  public getOtherId() {
    return this.otherId;
  }

  public getRpgSheetId() {
    return this.rpgSheetId;
  }

  public getSkillId() {
    return this.skillId;
  }

  public getWeaponId() {
    return this.weaponId;
  }

  public getPersonaId() {
    return this.personaId;
  }

  public getClothingId() {
    return this.clothingId;
  }

  public getDraftId() {
    return this.draftId;
  }

  public getFeedId() {
    return this.feedId;
  }

  public getFileId() {
    return this.fileId;
  }

  public getBookId() {
    return this.bookId;
  }

  public getProfileNameId() {
    return this.profileNameId;
  }

  public getProfileIconId() {
    return this.profileIconId;
  }
}

export default new HomeConstants();
