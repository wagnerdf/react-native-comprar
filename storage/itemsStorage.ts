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
    throw new Error("ITEMS_GET:" + error);
  }
}

async function getByStatus(status: FilterStatus): Promise<ItemStorageDTO[]> {
  const items = await get();
  return items.filter((item) => item.status === status);
}

async function save(items: ItemStorageDTO[]): Promise<void> {
  try {
    await AsyncStorage.setItem(ITEM_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    throw new Error("ITEMS_SAVE:" + error);
  }
}

async function add(newItem: ItemStorageDTO): Promise<ItemStorageDTO[]> {
  const items = await get();
  const updatedItems = [...items, newItem];

  await save(updatedItems);

  return updatedItems;
}

async function remove(id: string): Promise<void> {
  const items = await get();
  const updatedItems = items.filter((item) => item.id !== id);
  await save(updatedItems);
}

export const ItemsStorage = {
  get,
  getByStatus,
  add,
  remove,
};
