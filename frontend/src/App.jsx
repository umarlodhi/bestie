import { Container, Stack, Text } from "@chakra-ui/react"

import Navbar from "./components/Navbar"
import UserGrid from "./components/UserGrid"
function App() {

  return (
    <Stack minH={"100vh"}>
      <Navbar />
      <Container maxH={"1200px"} mt={4}>
        <Text
          fontSize={{ base: "3xl", md: "50"}}
          fontWeight={"bold"}
          letterSpacing={"2px"}
          textTransform={"uppercase"}
          mb={8}
        >
          <Text
            as={"span"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
          >My Bestie</Text>
          🚀
        </Text>

      </Container>
      <Container maxW={"1200px"}>
        <UserGrid />
      </Container>  
      
    </Stack>
  )
}

export default App
