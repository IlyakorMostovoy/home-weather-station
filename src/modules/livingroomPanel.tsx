import React from "react";
import { useStore } from "effector-react";

import { $livingroomFeeds } from "core/model/livingroom/store";

import Section from "components/section";
import Title from "components/title";
import Panel from "components/panel";
import MeasureIndicator from "components/measure-indicator";

const LivingroomPanel: React.FC = () => {
  const Feeds = useStore($livingroomFeeds);

  return (
    <Section>
      <Title text="Livingroom" />
      <Panel>
        <MeasureIndicator
          room="livingroom"
          type="temperature"
          data={Feeds.temperature}
        />
        <MeasureIndicator
          room="livingroom"
          type="humidity"
          data={Feeds.humidity}
        />
      </Panel>
    </Section>
  );
};

export default LivingroomPanel;
