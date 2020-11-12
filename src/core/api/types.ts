export type LivingroomFeedResponse = {
  created_at: string;
  entry_id: number;
  field1: string;
  field2: string;
  field3: string;
};

export type LivingroomResponse = {
  channel: {
    id: number;
    name: string;
    latitude: string;
    longitude: string;
    field1: string;
    field2: string;
    field3: string;
    created_at: string;
    updated_at: string;
    last_entry_id: number;
  };
  feeds: Array<LivingroomFeedResponse>;
};

export type KitchenFeedResponse = {
  created_at: string;
  entry_id: number;
  field1: string;
  field2: string;
};

export type KitchenResponse = {
  channel: {
    id: number;
    name: string;
    latitude: string;
    longitude: string;
    field1: string;
    field2: string;
    created_at: string;
    updated_at: string;
    last_entry_id: number;
  };
  feeds: Array<KitchenFeedResponse>;
};
