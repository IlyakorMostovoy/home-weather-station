import React from "react";
import { useStore } from "effector-react";

import { $bedroomFeeds } from "core/model/bedroom/store";

import Section from "components/section";
import Title from "components/title";
import Panel from "components/panel";
import MeasureIndicator from "components/measure-indicator";

const BedroomPanel: React.FC = () => {
  const Feeds = useStore($bedroomFeeds);

  return (
    <Section>
      <Title text="Bedroom" />
      <Panel>
        <MeasureIndicator
          room="bedroom"
          type="temperature"
          data={Feeds.temperature}
        />
        <MeasureIndicator
          room="bedroom"
          type="humidity"
          data={Feeds.humidity}
        />
        <MeasureIndicator
          room="bedroom"
          type="pressure"
          data={Feeds.pressure}
        />
      </Panel>
    </Section>
  );
};

export default BedroomPanel;
