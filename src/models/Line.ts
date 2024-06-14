import Commons from "./Commons";
import Project from "./Project";

export default class Line extends Commons {
  
  private _Project: Project;
  private _active: number;

  constructor(id: number, name: string, Project: Project, active: number) {
    super(id, name);
    this._Project = Project;
    this._active = active;
  }

  public get Project() {
    return this._Project;
  }

  public set Project(v: Project) {
    this._Project = v;
  }

  public get active() {
    return this._active;
  }

  public set active(v: number) {
    this._active = v;
  }
}
