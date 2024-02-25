import { createContext, useState } from "react";
import { BudgetAllocation, BudgetFrequency, Channel } from "../types/Channel";
import { mockChannels } from "../mockChannels";
import { CHANNEL_BASE_FORM } from "../constants";

type ProviderProps = {
  children: React.ReactNode;
};

export type ContextInterface = {
  channels: Channel[];
  selectedChannel: string | null;
  activeChannel: Channel | null;

  setSelectedChannel: (channel: string | null) => void;
  onBudgetAllocationChange: (budgetAllocation: BudgetAllocation) => void;
  onMonthlyBudgetChange: (month: number, value: number) => void;
  onBaselineBudgetChange: (value: number) => void;
  onBudgetFrequencyChange: (budgetFrequency: BudgetFrequency) => void;
  onDeleteChannel: (channelId: string) => void;
  onEditChannel: (channelId: string, name: string) => void;
  onAddChannel: () => void;
};

export const ChannelsContext = createContext<ContextInterface>(
  {} as ContextInterface
);

const ChannelsProvider: React.FC<ProviderProps> = ({ children }) => {
  const [channels, setChannels] = useState<Channel[]>([...mockChannels]);
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);

  const activeChannel = selectedChannel
    ? channels.find((channel) => channel.id === selectedChannel)!
    : null;

  function onBudgetAllocationChange(budgetAllocation: BudgetAllocation) {
    return onBaselineBudgetChange(0, budgetAllocation);
  }

  function onMonthlyBudgetChange(month: number, value: number) {
    const channelId = activeChannel!.id;
    const updatedChannels = channels.map((channel) => {
      if (channel.id !== channelId) {
        return channel;
      }

      const budgetBreakdown = channel.budgetBreakdown.map((val, idx) => {
        if (idx === month) {
          return value;
        }

        return val;
      });
      const budgetBase = budgetBreakdown.reduce((acc, curr) => acc + +curr, 0);
      return { ...channel, budgetBreakdown, budgetBase };
    });
    setChannels(updatedChannels);
  }

  function onBaselineBudgetChange(
    value: number,
    budgetAllocation: BudgetAllocation = BudgetAllocation.EQUAL
  ) {
    const channelId = activeChannel!.id;

    const updatedChannels = channels.map((channel) => {
      if (channel.id !== channelId) {
        return channel;
      }
      const budgetBase = value;
      const monthlyBudget = budgetBase / 12;
      const budgetBreakdown = Array(12).fill(monthlyBudget);
      return { ...channel, budgetBase, budgetBreakdown, budgetAllocation };
    });

    setChannels(updatedChannels);
  }

  function onBudgetFrequencyChange(budgetFrequency: BudgetFrequency) {
    const channelId = activeChannel!.id;
    const updatedChannels = channels.map((channel) => {
      if (channel.id !== channelId) {
        return channel;
      }
      return { ...channel, budgetFrequency };
    });
    setChannels(updatedChannels);
  }

  function onDeleteChannel(channelId: string) {
    const updatedChannels = channels.filter(
      (channel) => channel.id !== channelId
    );
    setChannels(updatedChannels);
  }

  function onEditChannel(channelId: string, name: string) {
    const updatedChannels = channels.map((channel) => {
      if (channel.id !== channelId) {
        return channel;
      }
      return { ...channel, name };
    });
    setChannels(updatedChannels);
  }

  function onAddChannel() {
    const newChannel: Channel = CHANNEL_BASE_FORM;
    setChannels([newChannel, ...channels]);
    setSelectedChannel(newChannel.id);
  }

  return (
    <ChannelsContext.Provider
      value={{
        channels,
        selectedChannel,
        activeChannel,
        setSelectedChannel,
        onBudgetAllocationChange,
        onMonthlyBudgetChange,
        onBaselineBudgetChange,
        onBudgetFrequencyChange,
        onDeleteChannel,
        onEditChannel,
        onAddChannel,
      }}
    >
      {children}
    </ChannelsContext.Provider>
  );
};

export default ChannelsProvider;
