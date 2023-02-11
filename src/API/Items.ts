import { IItems } from "../models/items";
import { HttpClient } from "./index";

export class ItemsApi {
  static async getItems(): Promise<Array<IItems>> {
    const response = await HttpClient.get("/item");
    const items = response.data.content;
    return items;
  }
  static async getItem(id: string): Promise<IItems> {
    const response = await HttpClient.get(`/item/${id}`);
    const item = response.data.content;
    return item;
  }
}
