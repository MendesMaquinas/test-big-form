import Client from "./Client";
import Commons from "./Commons";

export default class Project extends Commons {

  private _Client: Client;
  private _active: number;

  constructor(id: number, name: string, Client: Client, active: number) {
    super(id, name);
    this._Client = Client;
    this._active = active;
  }

  
  public get Client() {
    return this._Client;
  }

  public set Client(v: Client) {
    this._Client = v;
  }

  public get active() {
    return this._active;
  }

  public set active(v: number) {
    this._active = v;
  }
}
