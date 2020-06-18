import React, { useCallback } from "react";
import { useStore } from "effector-react";

import { getLastDate } from "utils/date";

import { getBedroomLastDataFx } from "core/model/bedroom/events";
import { $bedroomLastData } from "core/model/bedroom/store";
import { getLivingRoomFeedsFx } from "core/model/livingRoom/events";
import { $livingRoomLastData } from "core/model/livingRoom/store";

import BedroomPanel from "modules/bedroomPanel";
import LivingRoomPanel from "modules/livingRoomPanel";

import LastUpdate from "components/last-update";

import "styles/page.scss";

const Main: React.FC = () => {
  const bedroomLastData = useStore($bedroomLastData);
  const livingRoomLastData = useStore($livingRoomLastData);
  const isLoadingBedroom = useStore(getBedroomLastDataFx.pending);
  const isLoadingLivingRoom = useStore(getLivingRoomFeedsFx.pending);
  const LastUpdateTime = getLastDate(
    bedroomLastData.lastUpdate,
    livingRoomLastData.lastUpdate
  );
  const isLoading = isLoadingBedroom || isLoadingLivingRoom;

  const updateData = useCallback(() => {
    getBedroomLastDataFx();
    getLivingRoomFeedsFx();
  }, []);

  return (
    <div className="page">
      <div className="page__last-update">
        <LastUpdate
          timestamp={LastUpdateTime}
          isLoading={isLoading}
          clickHandler={updateData}
        />
      </div>
      <BedroomPanel />
      <LivingRoomPanel />
    </div>
  );
};

export default Main;
