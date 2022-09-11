type Attribute = { a: string; v: string };

class Html {
  private constructor() {}

  public static create(
    element: string,
    attr?: Attribute[],
    innerText?: string,
    valueText?: string,
    child?: string,
    attrChild?: Attribute[],
    innerTextChild?: string,
    valueTextChild?: string
  ) {
    const elm = document.createElement(element);
    if (!!attr && attr.length) {
      attr.forEach(({ a, v }) => {
        elm.setAttribute(a, v);
      });
    }
    if (!!innerText) elm.textContent = innerText;
    if (!!valueText) (elm as HTMLInputElement).value = valueText;
    if (!!child) {
      const cld = document.createElement(child);
      if (!!attrChild && attrChild.length > 0) {
        attrChild.forEach(({ a, v }) => {
          cld.setAttribute(a, v);
        });
      }
      if (!!innerTextChild) cld.textContent = innerTextChild;
      if (!!valueTextChild) (cld as HTMLInputElement).value = valueTextChild;
      elm.appendChild(cld);
    }
    return elm;
  }
}

export default Html;
