import { Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ChannelRow } from "../components/channel/ChannelRow";
import { ChannelsContext } from "../context/channels";

const TabOne: React.FC = () => {
  const { channels, selectedChannel, setSelectedChannel } =
    useContext(ChannelsContext);

  return (
    <Flex direction="column">
      {channels.map((channel, idx) => {
        const isExpanded = selectedChannel === channel.id;
        return (
          <ChannelRow
            key={idx}
            channel={channel}
            expanded={isExpanded}
            toggleExpansion={() =>
              setSelectedChannel(isExpanded ? null : channel.id)
            }
          />
        );
      })}
    </Flex>
  );
};

export default TabOne;
