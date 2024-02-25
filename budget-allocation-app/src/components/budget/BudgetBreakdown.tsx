import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Flex,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BudgetAllocation } from "../../types/Channel";
import { ChannelsContext } from "../../context/channels";
import { MONTHS } from "../../constants";

const BudgetBreakdown: React.FC<{}> = () => {
  const { onMonthlyBudgetChange, activeChannel } = useContext(ChannelsContext);
  const currentYear = new Date().toLocaleString("en-US", { year: "2-digit" });
  const months = MONTHS;

  const handleChange = (event: any, index: number) => {
    onMonthlyBudgetChange(index, parseInt(event));
  };

  return (
    <Box
      bg="#F5F6FA"
      p={6}
      border="#B2BBD580"
      borderRadius={2}
      borderWidth={1}
      w="85%"
    >
      <Heading fontSize={16} fontWeight={600} color="#182033" mb={2}>
        Budget Breakdown
      </Heading>
      <Text fontSize={14} fontWeight={400} color="#99A4C2" mb={6}>
        By default, your budget will be equally divided throughout the year. You
        can manually change the budget allocation, either now or later.
      </Text>
      <Flex flexWrap="wrap" gap={7}>
        {months.map((label, idx) => {
          return (
            <FormControl key={idx} w={40}>
              <FormLabel fontSize={14} color="#2F3B66" fontWeight={400}>
                {`${label.slice(0, 3)} ${currentYear}`}
              </FormLabel>
              <InputGroup>
                <NumberInput
                  value={`${activeChannel!.budgetBreakdown[
                    idx
                  ].toLocaleString()}`}
                  onChange={(event) => handleChange(event, idx)}
                  isDisabled={
                    activeChannel!.budgetAllocation === BudgetAllocation.EQUAL
                  }
                  fontWeight={500}
                  borderRadius={4}
                  borderColor="#B2BBD580"
                  boxShadow="0px 1px 2px 0px #E6E8F0"
                  _focus={{
                    borderColor: "#B2BBD580",
                    boxShadow: "0px 1px 2px 0px #E6E8F0",
                  }}
                >
                  <NumberInputField
                    pl={8}
                    color={
                      activeChannel?.budgetAllocation === BudgetAllocation.EQUAL
                        ? "#99A4C2"
                        : "#2A3558"
                    }
                    fontSize={14}
                  />
                </NumberInput>
                <InputLeftElement
                  pointerEvents="none"
                  color="#2A3558"
                  fontSize={14}
                  children="$"
                />
              </InputGroup>
            </FormControl>
          );
        })}
      </Flex>
    </Box>
  );
};

export default BudgetBreakdown;
