import { Box, useRadio } from "@chakra-ui/react";

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        fontSize={12}
        fontWeight={500}
        h={10}
        borderRadius={3}
        _checked={{
          bg: "white",
          color: "#2A3558",
          boxShadow: "1px 1px 2px 1px #E6E8F0",
        }}
        bg="gray.100"
        color="#707EA7"
        borderColor="#B2BBD580"
        boxShadow="0px 1px 2px 0px #E6E8F0"
        px={7}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export { RadioCard };
