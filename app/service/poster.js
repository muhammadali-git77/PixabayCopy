import { instance } from "./axios";

export async function getItems(url, params) {
  try {
    const response = await instance.get(url, params);
    return response;
  } catch (error) {
    throw new Error(`API da xatolik: ${error.message}`);
  }
}
