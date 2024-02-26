import {
  Box,
  Flex,
  Text,
  Icon,
  NumberInput,
  NumberInputField,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { MdOutlineEdit } from "react-icons/md";
import { useContext, useState } from "react";
import { Channel } from "../../types/Channel";
import { ChannelsContext } from "../../context/channels";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

const MonthlyBudgetInput: React.FC<{
  label: string;
  idx: number;
  channel: Channel;
}> = ({ label, idx, channel }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [monthlyBudget, setMonthlyBudget] = useState(
    channel.budgetBreakdown[idx]
  );
  const { onMonthlyBudgetChange } = useContext(ChannelsContext);

  function onSave(idx: number, value: number) {
    onMonthlyBudgetChange(idx, value, channel.id);
    setIsEditMode(false);
  }

  function onClose() {
    setMonthlyBudget(channel.budgetBreakdown[idx]);
    setIsEditMode(false);
  }

  return (
    <Box
      py={6}
      mr={2}
      boxShadow="0px 1px 1px 0px #cbcbcb38"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Flex
        key={idx}
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        h="100%"
        w={130}
      >
        <Text fontSize={11} color="#99A4C2" fontWeight={700}>
          {label.slice(0, 3)} {new Date().getFullYear().toString().slice(-2)}
        </Text>
        <Flex alignItems="center">
          {!isEditMode && (
            <Text fontSize={14} fontWeight={500}>
              $ {channel.budgetBreakdown[idx].toLocaleString()}
            </Text>
          )}
          {!isEditMode && isHovered && (
            <Icon
              as={MdOutlineEdit}
              color="gray.500"
              cursor="pointer"
              onClick={() => setIsEditMode(true)}
            />
          )}
        </Flex>
        {isEditMode && (
          <InputGroup>
            <NumberInput
              value={`$ ${monthlyBudget.toLocaleString()}`}
              onChange={(val) => setMonthlyBudget(+val)}
              mt={6}
            >
              <NumberInputField
                p={2}
                mx={2}
                h={8}
                fontSize={14}
              />
              <InputRightElement onClick={(e) => e.stopPropagation()}>
                <CheckIcon
                  color="green.500"
                  cursor="pointer"
                  p={1}
                  fontSize={18}
                  mb={2}
                  onClick={() => onSave(idx, monthlyBudget)}
                  _hover={{
                    background: "green.200",
                    borderRadius: "50%",
                    border: "1px solid #B2BBD5",
                  }}
                />
                <CloseIcon
                  color="red.500"
                  cursor="pointer"
                  p={1}
                  fontSize={16}
                  mb={2}
                  onClick={() => onClose()}
                  _hover={{
                    background: "red.200",
                    borderRadius: "50%",
                    border: "1px solid #B2BBD5",
                  }}
                />
              </InputRightElement>
            </NumberInput>
          </InputGroup>
        )}
      </Flex>
    </Box>
  );
};

export default MonthlyBudgetInput;
