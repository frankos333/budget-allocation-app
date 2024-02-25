import { TabList, Tabs, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import TabOne from "../../pages/TabOne";
import TabTwo from "../../pages/TabTwo";

const ChannelTabs: React.FC<{
  tabIndex: number;
  setTabIndex: (idx: number) => void;
  tabs: string[];
}> = ({ tabIndex, setTabIndex, tabs }) => {
  return (
    <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)}>
      <TabList border="none">
        {tabs.map((tab, idx) => (
          <Tab color={idx === tabIndex ? "black" : "#7E7E7E"}>{tab}</Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel pl={0}>
          <TabOne />
        </TabPanel>
        <TabPanel pl={0}>
          <TabTwo />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ChannelTabs;
