import Commons from "./Commons";
import Line from "./Line";

export default class Equipament extends Commons {
  private _Line: Line;
  private _active: number;

  constructor(id: number, name: string, Line: Line, active: number) {
    super(id, name);
    this._Line = Line;
    this._active = active;
  }

  public get Line() {
    return this._Line;
  }

  public set Line(v: Line) {
    this._Line = v;
  }

  public get active() {
    return this._active;
  }

  public set active(v: number) {
    this._active = v;
  }
}
