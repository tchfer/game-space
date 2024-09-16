export interface Game {
  id: number;
  name: string;
  price: number;
  boxDimensions: BoxDimensions;
  description: string;
  image?: string;
}

export interface BoxDimensions {
  height: number;
  width: number;
  fullLength: number;
}
