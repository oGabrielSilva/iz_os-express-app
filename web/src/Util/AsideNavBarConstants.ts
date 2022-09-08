class AsideNavBarConstants {
  private readonly containerClass = '.aside-menu';
  private readonly containerId = 'aside-menu-id';
  private readonly navClass = '.nav-aside-menu';
  private readonly headerButtonId = '#open-aside-nav';

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
