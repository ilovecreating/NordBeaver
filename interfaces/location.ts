import { Ref } from 'vue';

export interface User {
  cages: Ref<number>;
  item: Ref<string>;
  tooltip: Ref<string | number>;
  currentPosition: Ref<number>;
  isTooltipVisible: Ref<Boolean>;
  tooltipTop: Ref<number>;
  tooltipLeft: Ref<number>;
}
