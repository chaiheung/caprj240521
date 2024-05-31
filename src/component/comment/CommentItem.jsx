import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import axios from "axios";
import { LoginContext } from "../LoginProvider.jsx";
import {
  faCalendarDays,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { CommentEdit } from "./CommentEdit.jsx";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export function CommentItem({ comment, isProcessing, setIsProcessing }) {
  const [isEditing, setIsEditing] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const account = useContext(LoginContext);
  const toast = useToast();

  function handleRemoveClick() {
    setIsProcessing(true);
    axios
      .delete(`/api/comment/remove`, {
        data: { id: comment.id },
      })
      .then((res) => {})
      .catch((err) => {})
      .finally(() => {
        onClose();
        setIsProcessing(false);
        toast({
          description: "댓글이 삭제되었습니다.",
          status: "info",
          position: "top",
        });
      });
  }

  return (
    <Box key={comment.id} border={"0px solid black"} my={3}>
      <Flex mb={7}>
        <Flex fontWeight={900}>
          <Box mr={3}>
            <FontAwesomeIcon icon={faUser} />
          </Box>
          <Text>{comment.nickName}:</Text>
        </Flex>
        <Spacer />
        <Flex gap={2}>
          <Box>
            <FontAwesomeIcon icon={faCalendarDays} />
          </Box>
          <Box>{comment.inserted}</Box>
        </Flex>
      </Flex>
      {isEditing || (
        <Flex>
          <Box whiteSpace="pre">{comment.comment}</Box>
          <Spacer />
          {account.hasAccess(comment.memberId) && (
            <Stack>
              <Box>
                <ButtonGroup>
                  <Button
                    borderRadius={"20%"}
                    colorScheme={"purple"}
                    onClick={() => setIsEditing(true)}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Button>
                  <Button
                    borderRadius={"20%"}
                    isLoading={isProcessing}
                    colorScheme="red"
                    onClick={onOpen}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </Button>
                </ButtonGroup>
              </Box>
            </Stack>
          )}
        </Flex>
      )}
      {isEditing && (
        <CommentEdit
          comment={comment}
          setIsEditing={setIsEditing}
          setIsProcessing={setIsProcessing}
          isProcessing={isProcessing}
        />
      )}
      {account.hasAccess(comment.memberId) && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>삭제 확인</ModalHeader>
            <ModalBody>댓글을 삭제 하시겠습니까?</ModalBody>
            <ModalFooter>
              <Button mr={2} onClick={onClose}>
                취소
              </Button>
              <Button
                isLoading={isProcessing}
                colorScheme={"red"}
                onClick={handleRemoveClick}
              >
                삭제
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
}
