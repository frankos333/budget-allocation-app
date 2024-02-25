import {
  Box,
  Flex,
  Menu,
  Text,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { CheckIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { PaidReviewsIcon } from "../icons/PaidReviewsIcon";
import { BudgetSection } from "../budget/BudgetSection";
import { BsThreeDots } from "react-icons/bs";
import { Channel } from "../../types/Channel";
import { useContext, useState } from "react";
import { ChannelsContext } from "../../context/channels";

const ChannelRow: React.FC<{
  channel: Channel;
  expanded: boolean;
  toggleExpansion: () => void;
}> = ({ channel, expanded, toggleExpansion }) => {
  const { onDeleteChannel, onEditChannel } = useContext(ChannelsContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const onEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditMode(!isEditMode);
    setIsMenuOpen(false);
  };

  return (
    <Box
      w="100%"
      borderWidth="1px"
      borderRadius="sm"
      borderColor="#B2BBD580"
      mb={6}
    >
      <Flex
        onClick={toggleExpansion}
        alignItems="center"
        backgroundColor="#F6F7FB"
        p="10px 20px"
      >
        <TriangleDownIcon
          color="#B2BBD5"
          cursor="pointer"
          transform={expanded ? "" : "rotate(-90deg)"}
        />
        <PaidReviewsIcon mx={5} fontSize={36} />
        {isEditMode ? (
          <InputGroup width={300}>
            <Input
              type="text"
              placeholder="Enter channel name..."
              value={channel.name}
              size="sm"
              variant={"flushed"}
              autoFocus
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => {onEditChannel(channel.id, e.target.value)}}
            />
            <InputRightElement onClick={(e) => e.stopPropagation()}>
              <CheckIcon
                color="green.500"
                cursor="pointer"
                p={1}
                fontSize={20}
                mb={2}
                onClick={() => setIsEditMode(!isEditMode)}
                _hover={{
                  background: "green.200",
                  borderRadius: "50%",
                  border: "1px solid #B2BBD5",
                }}
              />
            </InputRightElement>
          </InputGroup>
        ) : (
          <Text fontWeight={500} fontSize={14}>
            {channel.name}
          </Text>
        )}
        <Menu isOpen={isMenuOpen}>
          <MenuButton
            onClickCapture={(e) => toggleMenu(e)}
            as={IconButton}
            background="inherit"
            ml="auto"
            color="#B2BBD5"
            _active={{ background: "none" }}
            _hover={{ background: "none" }}
            aria-label="Options"
            icon={<BsThreeDots />}
          />
          <MenuList w={120} fontWeight={500} fontSize={14} p={2}>
            <MenuItem onClickCapture={(e) => onEditClick(e)}>Edit</MenuItem>
            <MenuItem
              color="#EE2032"
              _hover={{ background: "#FDE8EA" }}
              onClickCapture={() => onDeleteChannel(channel.id)}
            >
              Remove
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      {expanded && (
        <Box p={12} backgroundColor="white">
          <BudgetSection />
        </Box>
      )}
    </Box>
  );
};

export { ChannelRow };
