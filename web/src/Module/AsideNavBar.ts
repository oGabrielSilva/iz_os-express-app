import AsideNavBarConstants from '../Util/AsideNavBarConstants';

class AsideNavBar {
  constructor(
    private readonly container: HTMLDivElement = document.querySelector(
      AsideNavBarConstants.getContainerClass()
    ),
    private readonly nav: HTMLDListElement = document.querySelector(
      AsideNavBarConstants.getNavClass()
    ),
    private readonly headerButton: HTMLButtonElement = document.querySelector(
      AsideNavBarConstants.getHeaderButtonId()
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
}

export default new AsideNavBar();
