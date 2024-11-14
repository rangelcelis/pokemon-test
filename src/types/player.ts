export type Player = {
  name: string;
  url: string;
  sprites: {
    front_default: string;
    back_default: string;
  };
  move: {
    name: string;
    power: number;
  };
};
