import { useStore } from 'effector-react';

import { $kitchenFeeds } from 'core/model/kitchen/store';

import Section from 'components/section';
import Title from 'components/title';
import Panel from 'components/panel';
import MeasureIndicator from 'components/measure-indicator';

const KitchenPanel: React.FC = () => {
  const Feeds = useStore($kitchenFeeds);

  return (
    <Section>
      <Title text="Kitchen" />
      <Panel>
        <MeasureIndicator
          room="kitchen"
          type="temperature"
          data={Feeds.temperature}
        />
        <MeasureIndicator
          room="kitchen"
          type="humidity"
          data={Feeds.humidity}
        />
      </Panel>
    </Section>
  );
};

export default KitchenPanel;
