import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";

export function CommentItem({ comment }) {
  return (
    <Box key={comment.id} border={"1px solid black"} my={3}>
      <Flex>
        <Box fontWeight={"bold"}>{comment.nickName}</Box>
        <Spacer />
        <Box>{comment.inserted}</Box>
      </Flex>
      <Box>{comment.comment}</Box>
    </Box>
  );
}
