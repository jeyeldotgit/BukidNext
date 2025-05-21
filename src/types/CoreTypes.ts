export type Course = {
  id: number;
  title: string;
  language: string;
  description: string;
};

export type Crops = {
  name: string;
  category: string;
};

export type CropsPrice = {
  price_id: number | unknown;
  crop_id: number;
  price: number;
  month: number;
  year: number;
  crops: Crops[];
};
