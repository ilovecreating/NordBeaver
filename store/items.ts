import { defineStore } from 'pinia';
import { User } from '~/interfaces/location';
export const useItemsStore = defineStore('items', () => {
  // для получения непустых ячеек
  const cages = ref(100);
  const item = ref('');
  const tooltip = ref('');
  const currentPosition = ref(0);
  const isTooltipVisible = ref(false);
  const tooltipTop = ref(0);
  const tooltipLeft = ref(0);

  const states: User = {
    cages,
    item: item,
    tooltip: tooltip,
    currentPosition: currentPosition,
    isTooltipVisible: isTooltipVisible,
    tooltipTop: tooltipTop,
    tooltipLeft: tooltipLeft,
  };
  return {
    // Удали allItems, armors, weapons, miscs так как это временная информация. Когда сервер очнётся, она будет не нужна.

    hasChanged: true,
    ...states,
  };
});
