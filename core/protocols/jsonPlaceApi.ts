import { JsonTodoResponseType } from "../types/jsonPlaceApiResponseTypes";

export interface IJsonPlace {
  TodoGetter(): Promise<JsonTodoResponseType[]>;
}
