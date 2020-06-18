import React, { useEffect } from "react";
import { useStore } from "effector-react";

import { getBedroomLastDataFx } from "core/model/bedroom/events";
import { $bedroomLastData } from "core/model/bedroom/store";

import Section from "components/section";
import Title from "components/title";
import Panel from "components/panel";
import MeasureIndicator from "components/measure-indicator";

const BedroomPanel: React.FC = () => {
  useEffect(() => {
    getBedroomLastDataFx();
  }, []);

  const lastData = useStore($bedroomLastData);

  return (
    <Section>
      <Title text="Bedroom" />
      <Panel>
        <MeasureIndicator
          room="bedroom"
          type="temperature"
          data={lastData.temperature}
        />
        <MeasureIndicator
          room="bedroom"
          type="humidity"
          data={lastData.humidity}
        />
        <MeasureIndicator
          room="bedroom"
          type="pressure"
          data={lastData.pressure}
        />
      </Panel>
    </Section>
  );
};

export default BedroomPanel;
