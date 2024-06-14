export default class Commons {
    private _id: number;
    private _name: string;

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }

    public get id() {
        return this._id;
    }
    public set id(v: number) {
        this._id = v;
    }
    public get name() {
        return this._name;
    }
    public set name(v: string) {
        this._name = v;
    }

    public toObject() {
        return {
            id: this._id,
            name: this._name,
        };
    }
}