import { HStack, useRadioGroup } from "@chakra-ui/react";
import { RadioCard } from "../utils/RadioCard";
import { useContext } from "react";
import { ChannelsContext } from "../../context/channels";
import { BudgetAllocation } from "../../types/Channel";

const BudgetAllocationInput: React.FC<{
  setAllocationRule: (value: BudgetAllocation) => void;
}> = ({ setAllocationRule }) => {
  const options = [
    { label: "Equal", value: BudgetAllocation.EQUAL },
    { label: "Manual", value: BudgetAllocation.MANUAL },
  ];

  const { activeChannel } = useContext(ChannelsContext);
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: activeChannel?.budgetAllocation,
    onChange: setAllocationRule,
  });

  const group = getRootProps();

  return (
    <HStack gap={0} {...group}>
      {options.map(({ label, value }) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {label}
          </RadioCard>
        );
      })}
    </HStack>
  );
};

export default BudgetAllocationInput;
