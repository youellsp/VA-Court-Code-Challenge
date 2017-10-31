export class Name {
  id: number;
  nameInput: string = '';
  firstName: string = '';
  lastName: string = '';
  suffix: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
