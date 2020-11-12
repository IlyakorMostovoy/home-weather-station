import React, { useCallback, useEffect } from "react";
import { useStore } from "effector-react";

import { getLatestTimestamp } from "utils/date";

import { getBedroomLastDataFx } from "core/model/bedroom/events";
import { $bedroomFeeds } from "core/model/bedroom/store";
import { getLivingroomLastDataFx } from "core/model/livingroom/events";
import { $livingroomFeeds } from "core/model/livingroom/store";

import BedroomPanel from "modules/bedroomPanel";
import LivingroomPanel from "modules/livingroomPanel";

import LastUpdate from "components/last-update";

import "styles/page.scss";

const Main: React.FC = () => {
  const bedroomFeeds = useStore($bedroomFeeds);
  const livingroomFeeds = useStore($livingroomFeeds);
  const isLoadingBedroom = useStore(getBedroomLastDataFx.pending);
  const isLoadingLivingroom = useStore(getLivingroomLastDataFx.pending);
  const LastUpdateTimestamp = getLatestTimestamp(
    bedroomFeeds.lastUpdate,
    livingroomFeeds.lastUpdate
  );
  const isLoading = isLoadingBedroom || isLoadingLivingroom;
  const fetchLastData = useCallback(() => {
    getBedroomLastDataFx();
    getLivingroomLastDataFx();
  }, []);

  useEffect(() => {
    fetchLastData();
  }, [fetchLastData]);

  return (
    <div className="page">
      <div className="page__last-update">
        <LastUpdate
          timestamp={LastUpdateTimestamp}
          isLoading={isLoading}
          clickHandler={fetchLastData}
        />
      </div>
      <BedroomPanel />
      <LivingroomPanel />
    </div>
  );
};

export default Main;
