import Client from "./Client";
import Equipament from "./Equipament";
import Line from "./Line";
import Project from "./Project";
import Reason from "./Reason";
import Sector from "./Sector";
import User from "./User";
import Urgency from "./Urgency";

export default class Request {
  private _id: number;
  private _User: User;
  private _Client: Client;
  private _Project: Project;
  private _Line: Line;
  private _Equipament: Equipament;
  private _Reason: Reason;
  private _description: string;
  private _initialDeadline: string;
  private _coast: number;
  private _realDeadline: string;
  private _approved: number;
  private _done: number;
  private _didAt: string;
  private _warranty: number;
  private _dispatch: number;
  private _Sector: Sector;
  private _Urgency: Urgency;

  constructor(
    id: number,
    User: User,
    Client: Client,
    Project: Project,
    Line: Line,
    Equipament: Equipament,
    Reason: Reason,
    description: string,
    initialDeadline: string,
    realDeadline: string,
    coast: number,
    Sector: Sector,
    Urgency: Urgency,
    approved: number,
    warranty: number,
    dispatch: number,
    done: number,
    didAt: string,
  ) {
    this._id = id;
    this._User = User;
    this._Client = Client;
    this._Project = Project;
    this._Line = Line;
    this._Equipament = Equipament;
    this._Reason = Reason;
    this._description = description;
    this._initialDeadline = initialDeadline;
    this._realDeadline = realDeadline;
    this._coast = coast;
    this._Sector = Sector;
    this._Urgency = Urgency;
    this._approved = approved;
    this._warranty = warranty;
    this._dispatch = dispatch;
    this._done = done;
    this._didAt = didAt;
  }

  public get id() {
    return this._id;
  }

  public set id(v: number) {
    this._id = v;
  }

  public get User() {
    return this._User;
  }

  public set User(v: User) {
    this._User = v;
  }

  public get Client() {
    return this._Client;
  }

  public set Client(v: Client) {
    this._Client = v;
  }

  public get Project() {
    return this._Project;
  }

  public set Project(v: Project) {
    this._Project = v;
  }

  public get Line() {
    return this._Line;
  }

  public set Line(v: Line) {
    this._Line = v;
  }

  public get Equipament() {
    return this._Equipament;
  }

  public set Equipament(v: Equipament) {
    this._Equipament = v;
  }

  public get Reason() {
    return this._Reason;
  }

  public set Reason(v: Reason) {
    this._Reason = v;
  }

  public get description() {
    return this._description;
  }

  public set description(v: string) {
    this._description = v;
  }

  public get initialDeadline() {
    return this._initialDeadline;
  }

  public set initialDeadline(v: string) {
    this._initialDeadline = v;
  }

  public get realDeadline() {
    return this._realDeadline;
  }

  public set realDeadline(v: string) {
    this._realDeadline = v;
  }

  public get coast() {
    return this._coast;
  }

  public set coast(v: number) {
    this._coast = v;
  }

  public get Sector() {
    return this._Sector;
  }

  public set Sector(v: Sector) {
    this._Sector = v;
  }

  public get Urgency() {
    return this._Urgency;
  }

  public set Urgency(v: Urgency) {
    this._Urgency = v;
  }

  public get approved() {
    return this._approved;
  }

  public set approved(v: number) {
    this._approved = v;
  }

  public get done() {
    return this._done;
  }

  public set done(v: number) {
    this._done = v;
  }

  public get didAt() {
    return this._didAt;
  }

  public set didAt(v: string) {
    this._didAt = v;
  }

  public get warranty() {
    return this._warranty;
  }

  public set warranty(v: number) {
    this._warranty = v;
  }

  public get dispatch() {
    return this._dispatch;
  }

  public set dispatch(v: number) {
    this._dispatch = v;
  }
}
