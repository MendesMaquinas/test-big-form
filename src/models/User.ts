import Commons from "./Commons";
import Sector from "./Sector";

export default class User extends Commons {
  private _username: string;
  private _password: string;
  private _level: number;
  private _Sector: Sector;
  private _token: string;

  constructor(
    id: number,
    name: string,
    username: string,
    password: string,
    level: number,
    Sector: Sector,
    token: string
  ) {
    super(id, name);
    this._username = username;
    this._password = password;
    this._level = level;
    this._Sector = Sector;
    this._token = token;
  }

  public get username() {
    return this._username;
  }

  public set username(v: string) {
    this._username = v;
  }

  public get password() {
    return this._password;
  }

  public set password(v: string) {
    this._password = v;
  }

  public get level() {
    return this._level;
  }

  public set level(v: number) {
    this._level = v;
  }

  public get Sector() {
    return this._Sector;
  }

  public set Sector(v: Sector) {
    this._Sector = v;
  }

  public get token() {
    return this._token;
  }

  public set token(v: string) {
    this._token = v;
  }

  public toObject() {
      return {
        id: this.id,
        name: this.name,
        username: this.username,
        password: this.password,
      }
  }
}
