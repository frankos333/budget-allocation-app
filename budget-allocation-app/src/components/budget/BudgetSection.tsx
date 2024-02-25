import { Flex, Heading, NumberInput, NumberInputField } from "@chakra-ui/react";
import { useContext } from "react";
import BudgetAllocationInput from "./BudgetAllocationInput";
import BudgetBreakdown from "./BudgetBreakdown";
import { ChannelsContext } from "../../context/channels";
import { BudgetAllocation } from "../../types/Channel";
import BudgetFrequencyInput from "./BudgetFrequencyInput";
const BudgetSection: React.FC = () => {
  const { onBudgetAllocationChange, activeChannel, onBaselineBudgetChange } =
    useContext(ChannelsContext);

  return (
    <div>
      <Flex gap={14} mb={12}>
        <Flex direction="column">
          <BudgetFrequencyInput />
        </Flex>
        <Flex direction="column">
          <Heading
            size="xs"
            fontWeight={400}
            color="gray.500"
            fontSize={14}
            mb={2}
          >
            Baseline [{activeChannel!.budgetFrequency}] Budget
          </Heading>
          <NumberInput
            color={
              activeChannel?.budgetAllocation === BudgetAllocation.EQUAL
                ? "#2A3558"
                : "#99A4C2"
            }
            value={activeChannel?.budgetBase.toLocaleString("en-us")}
            onChange={(val) => onBaselineBudgetChange(+val)}
            isDisabled={
              activeChannel?.budgetAllocation === BudgetAllocation.MANUAL
            }
          >
            <NumberInputField />
          </NumberInput>
        </Flex>
        <Flex direction="column">
          <Heading
            size="xs"
            fontWeight={400}
            color="gray.500"
            fontSize={14}
            mb={2}
          >
            Budget Allocation
          </Heading>
          <BudgetAllocationInput setAllocationRule={onBudgetAllocationChange} />
        </Flex>
      </Flex>
      <BudgetBreakdown />
    </div>
  );
};

export { BudgetSection };
