import { Heading, Select } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import { BudgetFrequency } from "../../types/Channel";
import { useContext } from "react";
import { ChannelsContext } from "../../context/channels";

const BudgetBreakdown: React.FC<{}> = () => {
  const { activeChannel, onBudgetFrequencyChange } =
    useContext(ChannelsContext);
  return (
    <>
      <Heading size="xs" fontWeight={400} color="gray.500" fontSize={14} mb={2}>
        Budget Frequency
      </Heading>
      <Select
        w={226}
        icon={<MdArrowDropDown />}
        color="#2A3558"
        value={activeChannel!.budgetFrequency}
        onChange={(e) =>
          onBudgetFrequencyChange(e.target.value as BudgetFrequency)
        }
      >
        <option value={BudgetFrequency.ANNUALLY}>Annually</option>
        <option value={BudgetFrequency.MONTHLY}>Monthly</option>
        <option value={BudgetFrequency.QUARTERLY}>Quarterly</option>
      </Select>
    </>
  );
};

export default BudgetBreakdown;
