import { useNavigate } from "react-router-dom";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import React, { useContext } from "react";
import { LoginContext } from "./LoginProvider.jsx";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Navbar() {
  const navigate = useNavigate();
  const account = useContext(LoginContext);

  return (
    <Flex fontSize={"2xl"} textAlign={"space-evenly"} mb={5} gap={3}>
      <Box
        onClick={() => navigate("/")}
        cursor={"pointer"}
        _hover={{
          bgColor: "gray.200",
          fontWeight: "bold",
        }}
      >
        HOME
      </Box>
      {account.isLoggedIn() && (
        <Box
          onClick={() => navigate("/write")}
          cursor={"pointer"}
          _hover={{
            bgColor: "gray.200",
            fontWeight: "bold",
          }}
        >
          글쓰기
        </Box>
      )}
      <Spacer />
      {account.isLoggedIn() && (
        <Box
          onClick={() => navigate(`/member/${account.id}`)}
          cursor={"pointer"}
          _hover={{
            bgColor: "gray.200",
            fontWeight: "bold",
          }}
        >
          <FontAwesomeIcon icon={faUser} beatFade />
          &nbsp;
          {account.nickName}
        </Box>
      )}
      {account.isAdmin() && (
        <Box
          onClick={() => navigate("/member/list")}
          cursor={"pointer"}
          _hover={{
            bgColor: "gray.200",
            fontWeight: "bold",
          }}
        >
          회원목록
        </Box>
      )}
      {account.isLoggedIn() || (
        <Box
          onClick={() => navigate("/signup")}
          cursor={"pointer"}
          _hover={{
            bgColor: "gray.200",
            fontWeight: "bold",
          }}
        >
          회원가입
        </Box>
      )}
      {account.isLoggedIn() || (
        <Box
          onClick={() => navigate("/login")}
          cursor={"pointer"}
          _hover={{
            bgColor: "gray.200",
            fontWeight: "bold",
          }}
        >
          로그인
        </Box>
      )}
      {account.isLoggedIn() && (
        <Box
          onClick={() => {
            account.logout();
            navigate("/login");
          }}
          cursor={"pointer"}
          _hover={{
            color: "tomato",
            bgColor: "gray.200",
            fontWeight: "bold",
          }}
        >
          로그아웃
        </Box>
      )}
    </Flex>
  );
}
