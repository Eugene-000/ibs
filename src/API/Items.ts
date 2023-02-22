import { IItem } from "../models/items";
import { HttpClient } from "./index";

export class ItemsApi {
  static async getItems(): Promise<Array<IItem>> {
    const response = await HttpClient.get("/item");
    const items = response.data.content;
    return items;
  }
  static async getItem(id: string): Promise<IItem> {
    const response = await HttpClient.get(`/item/${id}`);
    const item = response.data.content;
    return item;
  }
}
