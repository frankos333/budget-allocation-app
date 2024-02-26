import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ChannelsContext } from "../context/channels";
import { PaidReviewsIcon } from "../components/icons/PaidReviewsIcon";
import { MONTHS } from "../constants";
import { BudgetAllocation } from "../types/Channel";
import MonthlyBudgetInput from "../components/budget/MonthlyBudgetInput";

const TabTwo: React.FC = () => {
  const { channels } = useContext(ChannelsContext);
  const manualChannels = channels.filter(
    (channel) => channel.budgetAllocation === BudgetAllocation.MANUAL
  );
  const months = MONTHS;
  return (
    <Container p={0} m={0} w="100%">
      <Heading fontSize={16} color="gray.600" mb={5}>
        Edit your manual allocation channels:
      </Heading>
      {manualChannels.map((channel) => (
        <Flex h={130} w="100%">
          <Box
            py={6}
            px={8}
            boxShadow="inset -4px 0px 2px 0px rgb(112 126 167 / 20%)"
            backgroundColor="#e2e9fa24"
            key={channel.id}
            minW={250}
          >
            <Flex direction="column" justifyContent="space-between" h="100%">
              <Text fontSize={11} color="#99A4C2" fontWeight={700}>
                CHANNEL
              </Text>
              <Flex alignItems="center">
                <PaidReviewsIcon fontSize={36} mr={4}></PaidReviewsIcon>
                {channel.name}
              </Flex>
            </Flex>
          </Box>
          <Flex
            overflowX="auto"
            whiteSpace="nowrap"
            minW="calc(100vw - 356px)"
            scrollBehavior={"smooth"}
            className="scrollbar-tiny"
          >
            {months.map((label, idx) => {
              return (
                <MonthlyBudgetInput
                  key={idx}
                  label={label}
                  idx={idx}
                  channel={channel}
                />
              );
            })}
          </Flex>
        </Flex>
      ))}
    </Container>
  );
};

export default TabTwo;
