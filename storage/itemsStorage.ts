import { FilterStatus } from "@/types/FilterStatus";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ITEM_STORAGE_KEY = "@comprar:items";

export type ItemStorageDTO = {
  id: string;
  status: FilterStatus;
  description: string;
};

async function get(): Promise<ItemStorageDTO[]> {
  try {
    const storage = await AsyncStorage.getItem(ITEM_STORAGE_KEY);
    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw new Error("GET_ITEMS:" + error);
  }
}

export const ItemStorage = {
  get,
};
