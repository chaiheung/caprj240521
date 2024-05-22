import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export function MemberSignup() {
  return (
    <Box>
      <Box>회원가입</Box>
      <Box>
        <Box>
          <FormControl>
            <FormLabel>계정</FormLabel>
            <Input />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>비밀번호</FormLabel>
            <Input />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>닉네임</FormLabel>
            <Input />
          </FormControl>
        </Box>
        <Box>
          <Button colorScheme={"blue"}>가입</Button>
        </Box>
      </Box>
    </Box>
  );
}
