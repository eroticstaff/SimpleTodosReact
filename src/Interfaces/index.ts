export interface IOnChangeFunction {
  (todo_id: Number, status: boolean): void;
}

export interface ITodoObject {
  id: Number;
  name: String;
  completed: boolean;
}

export interface ITodoObjects extends Array<ITodoObject> {}
