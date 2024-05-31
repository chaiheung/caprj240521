import { useNavigate } from "react-router-dom";
import { Box, Center, Flex, Hide, Show, Spacer } from "@chakra-ui/react";
import React, { useContext } from "react";
import { LoginContext } from "./LoginProvider.jsx";
import {
  faHouse,
  faPencil,
  faRightFromBracket,
  faRightToBracket,
  faUser,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Navbar() {
  const navigate = useNavigate();
  const account = useContext(LoginContext);

  return (
    <Flex
      fontSize={"2xl"}
      textAlign={"space-evenly"}
      gap={3}
      height={20}
      bgColor="gray.100"
    >
      <Center
        onClick={() => navigate("/")}
        cursor={"pointer"}
        _hover={{
          color: "white",
          bgColor: "gray.500",
          fontWeight: "bold",
        }}
        p={8}
        fontSize={20}
        fontWeight={600}
      >
        <Show below={"lg"}>
          <FontAwesomeIcon icon={faHouse} beatFade />
        </Show>
        <Hide below={"lg"}>HOME</Hide>
      </Center>
      {account.isLoggedIn() && (
        <Center
          onClick={() => navigate("/write")}
          cursor={"pointer"}
          _hover={{
            color: "white",
            bgColor: "gray.500",
            fontWeight: "bold",
          }}
          p={8}
          fontSize={20}
          fontWeight={600}
        >
          <Show below={"lg"}>
            <FontAwesomeIcon icon={faPencil} beatFade />
          </Show>
          <Hide below={"lg"}>글쓰기</Hide>
        </Center>
      )}
      <Spacer />
      {account.isLoggedIn() && (
        <Center
          onClick={() => navigate(`/member/${account.id}`)}
          cursor={"pointer"}
          _hover={{
            color: "white",
            bgColor: "gray.500",
            fontWeight: "bold",
          }}
          p={8}
          fontSize={20}
          fontWeight={600}
        >
          <Flex gap={2}>
            <Box>
              <FontAwesomeIcon icon={faUser} beatFade />
            </Box>
            <Box>
              <Hide below={"lg"}>{account.nickName}</Hide>
            </Box>
          </Flex>
        </Center>
      )}
      {account.isAdmin() && (
        <Center
          onClick={() => navigate("/member/list")}
          cursor={"pointer"}
          _hover={{
            color: "white",
            bgColor: "gray.500",
            fontWeight: "bold",
          }}
          p={8}
          fontSize={20}
          fontWeight={600}
        >
          <FontAwesomeIcon icon={faUsers} beatFade />
        </Center>
      )}
      {account.isLoggedIn() || (
        <Center
          onClick={() => navigate("/signup")}
          cursor={"pointer"}
          _hover={{
            color: "white",
            bgColor: "gray.500",
            fontWeight: "bold",
          }}
          p={8}
          fontSize={20}
          fontWeight={600}
        >
          <FontAwesomeIcon icon={faUserPlus} beatFade />
        </Center>
      )}
      {account.isLoggedIn() || (
        <Center
          onClick={() => navigate("/login")}
          cursor={"pointer"}
          _hover={{
            color: "aquamarine",
            bgColor: "gray.500",
            fontWeight: "bold",
          }}
          p={8}
          fontSize={20}
          fontWeight={600}
        >
          <FontAwesomeIcon icon={faRightToBracket} />
        </Center>
      )}
      {account.isLoggedIn() && (
        <Center
          onClick={() => {
            account.logout();
            navigate("/login");
          }}
          cursor={"pointer"}
          _hover={{
            color: "tomato",
            bgColor: "gray.500",
            fontWeight: "bold",
          }}
          p={8}
          fontSize={20}
          fontWeight={600}
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
        </Center>
      )}
    </Flex>
  );
}
