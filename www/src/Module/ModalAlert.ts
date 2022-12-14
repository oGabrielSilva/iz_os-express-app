import HtmlConstants from '../Util/HtmlConstants';

class ModalAlert {
  private constructor(
    private readonly container = document.querySelector(
      HtmlConstants.getModalAlertContainerClass()
    ) as HTMLDivElement,
    private readonly body = document.querySelector(
      HtmlConstants.getModalAlertBodyId()
    ) as HTMLParagraphElement,
    private readonly close = document.querySelector(
      HtmlConstants.getModalAlertButtonCloseId()
    ) as HTMLButtonElement,
    private readonly ok = document.querySelector(
      HtmlConstants.getModalAlertButtonOKId()
    ) as HTMLButtonElement,
    private readonly loading = document.querySelector(HtmlConstants.getModalAlertLoadingId()),
    private onConfirm = () => {}
  ) {}

  public init() {
    if (this.close) this.close.addEventListener('click', () => this.closeModal());
    if (this.ok) this.ok.addEventListener('click', () => this.closeModal());
  }

  public openModal(
    title: string,
    loading?: boolean,
    buttonClose?: boolean,
    buttonConfirm?: boolean,
    onConfirm?: () => void
  ) {
    if (this.container && this.close) {
      this.container.style.left = '0';
      this.close.style.right = 'var(--p3)';
    }
    this.setBody(title);
    if (loading) this.addLoading();
    else this.removeLoading();
    if (buttonClose) this.addButtonClose();
    else this.removeButtonClose();
    if (buttonConfirm) this.addOK();
    else this.removeOK();
    if (typeof onConfirm === 'function' && !!onConfirm) this.setOnConfirm(onConfirm);
  }

  private setBody(body: string) {
    if (this.body) this.body.textContent = body;
  }

  private removeOK() {
    if (this.ok) this.ok.classList.add('invisible');
  }

  private addOK() {
    if (this.ok) this.ok.classList.remove('invisible');
  }

  private removeLoading() {
    if (this.loading) this.loading.classList.add('invisible');
  }

  private addLoading() {
    if (this.loading) this.loading.classList.remove('invisible');
  }

  private removeButtonClose() {
    if (this.close) this.close.classList.add('invisible');
  }

  private addButtonClose() {
    if (this.close) this.close.classList.remove('invisible');
  }

  private closeModal() {
    if (this.container && this.close) {
      this.container.style.left = '-200vw';
      this.close.style.right = '200vw';
    }
    this.onConfirm();
    this.resetOnConfirm();
  }

  private setOnConfirm(onConfirm: () => void) {
    this.onConfirm = onConfirm;
  }

  private resetOnConfirm() {
    this.onConfirm = () => {};
  }

  public static get() {
    return new ModalAlert();
  }
}

export default ModalAlert.get();
