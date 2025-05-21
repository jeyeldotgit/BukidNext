export type Course = {
  id: number;
  title: string;
  language: string;
  description: string;
};

export type Crop = {
  price_id: number;
  crop_id: number;
  price: number;
  month: number;
  year: number;
  crops: {
    name: string;
  }[];
};
