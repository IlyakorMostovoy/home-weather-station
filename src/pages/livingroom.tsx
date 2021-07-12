import React, { useCallback, useEffect } from 'react';
import { useStore } from 'effector-react';

import { getLivingroomFeedsFx } from 'core/model/livingroom/events';
import { $livingroomFeeds } from 'core/model/livingroom/store';

import LivingroomPanel from 'modules/livingroomPanel';

import LastUpdate from 'components/last-update';

import 'styles/page.scss';

const Livingroom: React.FC = () => {
  const { lastUpdate } = useStore($livingroomFeeds);
  const isLoading = useStore(getLivingroomFeedsFx.pending);
  const fetchFeeds = useCallback(() => {
    getLivingroomFeedsFx();
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
      <LivingroomPanel />
    </div>
  );
};

export default Livingroom;
