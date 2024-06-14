import Commons from "./Commons";

export default class Client extends Commons {
  private _priority: number;

  constructor(id: number, name: string, priority: number) {
    super(id, name);
    this._priority = priority;
  }

  public get priority() {
    return this._priority;
  }

  public set priority(v: number) {
    this._priority = v;
  }
}
