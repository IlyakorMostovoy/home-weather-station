import { Effect, createEffect } from "effector";

import { getLivingRoomFeeds } from "core/api/livingRoom";

import { LivingRoom } from "./types";

export const getLivingRoomFeedsFx: Effect<
  void,
  LivingRoom,
  Error
> = createEffect({
  async handler() {
    const data = await getLivingRoomFeeds(2);

    return data;
  },
});
