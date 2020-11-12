import React, { useCallback, useEffect } from "react";
import { useStore } from "effector-react";

import { getBedroomFeedsFx } from "core/model/bedroom/events";
import { $bedroomFeeds } from "core/model/bedroom/store";

import BedroomPanel from "modules/bedroomPanel";

import LastUpdate from "components/last-update";

import "styles/page.scss";

const Bedroom: React.FC = () => {
  const { lastUpdate } = useStore($bedroomFeeds);
  const isLoading = useStore(getBedroomFeedsFx.pending);
  const fetchFeeds = useCallback(() => {
    getBedroomFeedsFx();
  }, []);

  useEffect(() => {
    fetchFeeds();
  }, [fetchFeeds]);

  return (
    <div className="page">
      <div className="page__last-update">
        <LastUpdate
          timestamp={lastUpdate}
          isLoading={isLoading}
          clickHandler={fetchFeeds}
        />
      </div>
      <BedroomPanel />
    </div>
  );
};

export default Bedroom;
