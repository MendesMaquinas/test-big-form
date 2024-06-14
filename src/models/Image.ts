import Request from "./Request";

export default class Image {
  private _id: number;
  private _image: string;
  private _Request: Request;

  constructor(id: number, image: string, Request: Request) {
    this._id = id;
    this._image = image;
    this._Request = Request;
  }

  public get id() {
    return this._id;
  }

  public set id(v: number) {
    this._id = v;
  }

  public get image() {
    return this._image;
  }

  public set image(v: string) {
    this._image = v;
  }

  public get Request() {
    return this._Request;
  }

  public set Request(v: Request) {
    this._Request = v;
  }
}
