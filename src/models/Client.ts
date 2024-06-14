import Commons from "./Commons";

export default class Client extends Commons {
  private _active: number;

  constructor(id: number, name: string, active: number) {
    super(id, name);
    this._active = active;
  }

  public get active() {
    return this._active;
  }

  public set active(v: number) {
    this._active = v;
  }
}
