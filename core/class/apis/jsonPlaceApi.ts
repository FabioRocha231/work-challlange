import axios from "axios";
import { apiUrl } from "../../../utils/apiUrl";
import { IJsonPlace } from "../../protocols/jsonPlaceApi";
import { JsonTodoResponseType } from "../../types/jsonPlaceApiResponseTypes";
import { JsonPlaceUserTypes } from "../../types/jsonPlaceUserTypes";
import { ErrorHandler } from "../handlers/errorHanlder";

export class JsonPlaceApi implements IJsonPlace {
  async GetJsonUser(): Promise<JsonPlaceUserTypes[]> {
    const { errorHandler } = new ErrorHandler();
    const [error, result] = await errorHandler(
      axios.get(`${apiUrl}/users`)
    )
    if (error) throw new Error(error.message)
    return result.data
  }

  async TodoGetter(): Promise<JsonTodoResponseType[]> {
    const { errorHandler } = new ErrorHandler();
    const [error, result] = await errorHandler(
      axios.get(`${apiUrl}/todos`)
    );
    if (error) throw new Error(error.message);
    return result.data;
  }

  async TodosByUserId(userId: number): Promise<JsonTodoResponseType[]> {
    const { errorHandler } = new ErrorHandler();
    const [error, result] = await errorHandler(
      axios.get(`${apiUrl}/todos?userId=${userId}`)
    );
    if (error) throw new Error(error.message)
    return result.data
  }

  async DeletTodo(todoId: number): Promise<void> {
    const { errorHandler } = new ErrorHandler()
    const [error, result] = await errorHandler(
      axios.delete(`${apiUrl}/todos/${todoId}`)
    )
    if (error) throw new Error(error.message)
    console.log(result)
    return result
  }

  async CreateTodo(userId: number, data: any): Promise<void> {
    const { errorHandler } = new ErrorHandler()
    const [error, result] = await errorHandler(
      axios.post(`${apiUrl}/todos?userId=${userId}`, data)
    )
    if (error) throw new Error(error.message)
    return result
  }
}
