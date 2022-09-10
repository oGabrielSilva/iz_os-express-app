type Keys = {
  key: string;
  value: boolean;
};

class FormValid {
  constructor(private readonly keys: Keys[]) {}

  public getKey(key: string) {
    return this.keys.filter((index) => index.key === key);
  }

  public setKey(key: string, value: boolean, onChange?: () => void) {
    const k = this.keys.filter((index) => index.key === key);
    if (!!k.length) {
      k[0].value = value;
      if (!!onChange) onChange();
    }
  }

  public allValid() {
    const notValids: boolean[] = [];

    this.keys.forEach((key) => (!key.value ? notValids.push(key.value) : null));

    return notValids.length > 0;
  }
}

export default FormValid;
