import axios from "axios";
import { IJsonPlace } from "../../protocols/jsonPlaceApi";
import { JsonTodoResponseType } from "../../types/jsonPlaceApiResponseTypes";
import { JsonPlaceUserTypes } from "../../types/jsonPlaceUserTypes";
import { ErrorHandler } from "../handlers/errorHanlder";

export class JsonPlaceApi implements IJsonPlace {
  async GetJsonUser(): Promise<JsonPlaceUserTypes[]> {
    const { errorHandler } = new ErrorHandler();
    const [error, result] = await errorHandler(
      axios.get("https://jsonplaceholder.typicode.com/users")
    )
    if (error) throw new Error(error.message)
    return result.data
  }

  async TodoGetter(): Promise<JsonTodoResponseType[]> {
    const { errorHandler } = new ErrorHandler();
    const [error, result] = await errorHandler(
      axios.get("https://jsonplaceholder.typicode.com/todos")
    );
    if (error) throw new Error(error.message);
    return result.data;
  }

  async TodosByUserId(userId: string): Promise<JsonTodoResponseType[]> {
    const { errorHandler } = new ErrorHandler();
    const [error, result] = await errorHandler(
      axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    );
    if (error) throw new Error(error.message)
    return result.data
  }
}
