export interface aboutAll {
  id: any;
  imageUrl: string;
  name: string;
  type: string;
  aboutAllArmory: armory;
}

export interface aboutAllFiltered extends aboutAll {
  charges?: number;
  cooldown?: number;
  count?: number;
}

export interface T {
  cooldown?: Date | string;
}

export interface armory extends aboutAll {
  allItems: string;
  armors: string;
  misc: string;
  weapons: string;
}
