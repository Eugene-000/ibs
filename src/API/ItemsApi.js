import { HttpClient } from "./index";

export class ItemsApi {
  static async getItems() {
    const response = await HttpClient.get("/item");
    const items = response.data.content;
    return items;
  }
}
