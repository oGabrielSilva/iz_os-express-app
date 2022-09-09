class HomeConstants {
  private readonly profileIconId = '#profile-icon';
  private readonly profileNameId = '#profile-name';

  public getProfileNameId() {
    return this.profileNameId;
  }

  public getProfileIconId() {
    return this.profileIconId;
  }
}

export default new HomeConstants();
