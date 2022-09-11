import { v4 as uuid } from 'uuid';

class PersonaAttribute {
  private readonly uid = uuid();
  private key: string;
  private value: string;

  constructor(key?: string, value?: string) {
    this.key = key ? key : '';
    this.value = value ? value : '';
  }

  public getKey() {
    return this.key;
  }

  public setKey(key: string) {
    this.key = key;
  }

  public getValue() {
    return this.value;
  }

  public setValue(value: string) {
    this.value = value;
  }

  public getUid() {
    return this.uid;
  }
}

export default PersonaAttribute;
