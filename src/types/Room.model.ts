export type ConnectionType = {
  name: string;
  color?: string;
};

export type Room = {
  id: string;
  name: string;
  slug: string;
  connectiontypes: Array<ConnectionType>;
};
