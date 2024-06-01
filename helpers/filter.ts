import type { aboutAllFiltered } from '~/interfaces/load';
import type { T } from '~/interfaces/load';

export default function getFilter(
  allInfo: any,
  filtArmor: aboutAllFiltered[],
  filtMisc: aboutAllFiltered[],
  filtWeapons: aboutAllFiltered[],
  extractedData: aboutAllFiltered[],
) {
  allInfo.value.filter((item: aboutAllFiltered) => {
    if (item.type === 'misc') {
      filtMisc.push(item);
    }
  });
  allInfo.value.filter((item: aboutAllFiltered) => {
    if (item.type === 'weapon') {
      filtWeapons.push(item);
    }
  });
  allInfo.value.filter((item: aboutAllFiltered) => {
    if (item.type === 'armor') {
      filtArmor.push(item);
    }
  });

  extractedData.value.map((item: T) => {
    item['isTrue'] = false;

    if (item['cooldown']) {
      item['cooldown'] = new Date();
      const seconds: string | number = item['cooldown'].getSeconds() + `s`;
      item['cooldown'] = seconds;
    }
  });
  return { allInfo, filtArmor, filtMisc, filtWeapons, extractedData };
}
