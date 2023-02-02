import { HttpClient } from "./index";

export class ItemsApi {
  static async getItems() {
    const response = await HttpClient.get("/item");
    const items = response.data.content;
    return items;
  }
  static async getItem(id) {
    const response = await HttpClient.get(`/item/${id}`);
    const item = response.data.content;
    return item;
  }
}
