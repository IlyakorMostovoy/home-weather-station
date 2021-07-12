import React, { useCallback, useEffect } from 'react';
import { useStore } from 'effector-react';

import { getLatestTimestamp } from 'utils/date';

import { getLivingroomLastDataFx } from 'core/model/livingroom/events';
import { $livingroomFeeds } from 'core/model/livingroom/store';
import { getKitchenLastDataFx } from 'core/model/kitchen/events';
import { $kitchenFeeds } from 'core/model/kitchen/store';

import LivingroomPanel from 'modules/livingroomPanel';
import KitchenPanel from 'modules/kitchenPanel';

import LastUpdate from 'components/last-update';

import 'styles/page.scss';

const Main: React.FC = () => {
  const livingroomFeeds = useStore($livingroomFeeds);
  const kitchenFeeds = useStore($kitchenFeeds);
  const isLoadingLivingroom = useStore(getLivingroomLastDataFx.pending);
  const isLoadingKitchen = useStore(getKitchenLastDataFx.pending);
  const LastUpdateTimestamp = getLatestTimestamp(
    livingroomFeeds.lastUpdate,
    kitchenFeeds.lastUpdate,
  );
  const isLoading = isLoadingLivingroom || isLoadingKitchen;
  const fetchLastData = useCallback(() => {
    getLivingroomLastDataFx();
    getKitchenLastDataFx();
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
      <LivingroomPanel />
      <KitchenPanel />
    </div>
  );
};

export default Main;
