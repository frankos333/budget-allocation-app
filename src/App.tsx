import { useContext, useState } from "react";
import {
  ChakraProvider,
  Container,
  Heading,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import { ChannelsContext } from "./context/channels";
import ChannelTabs from "./components/budget/ChannelTabs";
import { TABS } from "./constants";
function App() {
  const { onAddChannel } = useContext(ChannelsContext);
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = TABS;
  function onAddClick() {
    setTabIndex(0);
    onAddChannel();
  }

  return (
    <ChakraProvider>
      <Container maxW="container.2xl" p={12}>
        <Heading fontSize="24" fontWeight="500" mb={8} color="#182033">
          Build your budget plan
        </Heading>
        <Heading fontSize="18" fontWeight="600" mb={2} color="#182033">
          Setup channels
        </Heading>
        <Flex justifyContent="space-between" pr={3}>
          <Text color="#99A4C2" w="650px" mb={6}>
            Setup your added channels by adding baseline budgets out of your
            total budget. See the forecast impact with the help of tips and
            insights.
          </Text>
          <Button
            backgroundColor="gray.50"
            border="1px solid #B2BBD580"
            fontSize={14}
            color="#707EA7"
            onClick={() => onAddClick()}
          >
            <Text pr={1} pb={0.5} fontSize={16} fontWeight={600}>
              +
            </Text>{" "}
            Add Channel
          </Button>
        </Flex>
        <ChannelTabs tabIndex={tabIndex} setTabIndex={setTabIndex} tabs={tabs}/>
      </Container>
    </ChakraProvider>
  );
}

export default App;
