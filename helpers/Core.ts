import type { aboutAll } from '~/interfaces/load';

// Инициализируем класс для создания будущих экземпляров. Реализуем глобальный метод, который получает данные.

export default class Materials implements aboutAll {
  allItems?: string;
  armors?: string;
  misc?: string;
  weapons?: string;
  constructor(allItems: string, armors: string, misc: string, weapons: string) {
    this.allItems = allItems;
    this.armors = armors;
    this.misc = misc;
    this.weapons = weapons;
  }

  resp: aboutAll[] = [];

  async getAllItems<ResultType = Record<string, any>>(url: number): Promise<ResultType> {
    try {
      // Не работает, так как сервер упал.
      const response = await fetch(
        `https://us-central1-seven-seven-bit-inhouse-helper.cloudfunctions.net/vueDevTestTask-getInventoryState?case=${url}`,
      );
      const data = await response.json();
      this.resp = data.inventory;
      // Альтернатива
      // const response = await fetch(`https://1f7ce3331f28c6ff.mokky.dev/${url}`);
      // const data = await response.json();
      // this.resp = data;
      console.log('All settled. Data fetched');
      navigateTo(`/?case=${url}`);
      return this.resp as any | undefined;
    } catch (error) {
      console.log('something goes wrong');
    }
  }
}
