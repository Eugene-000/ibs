import { HttpClient } from "./index";

export class ItemApi {
  static async getItem(id) {
    const response = await HttpClient.get(`/item/${id}`);
    const item = response.data.content;
    return item;
  }
}
