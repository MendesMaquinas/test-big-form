import Commons from "./Commons";
import Sector from "./Sector";

export default class Reason extends Commons {

  private _Sector: Sector;
  
  constructor(id: number, name: string, Sector: Sector) {
    super(id, name);
    this._Sector = Sector;
  }

  get Sector(): Sector {
    return this._Sector;
  }

  set Sector(value: Sector) {
    this._Sector = value;
  }
}
