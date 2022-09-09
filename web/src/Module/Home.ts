import Auth from '../Auth/Auth';
import HomeConstants from '../Util/HomeConstants';

export type Location = 'Feed';

class Home {
  private location: Location = 'Feed';
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
  }

  public getLocation() {
    return this.location;
  }

  public setLocation(location: Location) {
    this.location = location;

    this.onLocationChange();
  }

  private setProfileIcon() {
    this.profileIcon.src = Auth.getUser().photoURL;
    this.profileIcon.width = 35;
    this.profileIcon.height = 35;
  }

  private setProfileName() {
    this.profileName.textContent = Auth.getUser().displayName;
  }

  private onLocationChange() {}
}

export default new Home();
