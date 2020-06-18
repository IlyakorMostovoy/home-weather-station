import React, { useEffect } from "react";
import { useStore } from "effector-react";

import { getLivingRoomFeedsFx } from "core/model/livingRoom/events";
import { $livingRoomLastData } from "core/model/livingRoom/store";

import Section from "components/section";
import Title from "components/title";
import Panel from "components/panel";
import MeasureIndicator from "components/measure-indicator";

const LivingRoomPanel: React.FC = () => {
  const lastData = useStore($livingRoomLastData);

  useEffect(() => {
    getLivingRoomFeedsFx();
  }, []);

  return (
    <Section>
      <Title text="Livingroom" />
      <Panel>
        <MeasureIndicator
          room="livingRoom"
          type="temperature"
          data={lastData.temperature}
        />
        <MeasureIndicator
          room="livingRoom"
          type="humidity"
          data={lastData.humidity}
        />
      </Panel>
    </Section>
  );
};

export default LivingRoomPanel;
