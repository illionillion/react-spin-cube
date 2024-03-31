import { Box, Center } from "@yamada-ui/react"
import "./animation.css"
function App() {

  return (
    <Box w="100vw" h="100dvh" pos="relative">
      <Box pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
        <Box pos="absolute" top="45%" left="50%" transform="translate(-45%, -50%)">
          <Center
            animationName="spincube"
            animationDuration="12s"
            animationTimingFunction="ease-in-out"
            animationIterationCount="infinite"
            transformStyle="preserve-3d"
            transform-origin="100px 100px 0"
          >
            <Center bgColor="#fff" w="200px" h="200px" pos="absolute" border="1px solid #ddd" transform="translateZ(100px)">
              ①
            </Center>
            <Center bgColor="#fff" w="200px" h="200px" pos="absolute" border="1px solid #ddd" transform="rotateY(90deg) translateZ(100px)">
              ②
            </Center>
            <Center bgColor="#fff" w="200px" h="200px" pos="absolute" border="1px solid #ddd" transform="rotateY(90deg) rotateX(90deg) translateZ(100px)">
              ③
            </Center>
            <Center bgColor="#fff" w="200px" h="200px" pos="absolute" border="1px solid #ddd" transform="rotateY(180deg) rotateZ(90deg) translateZ(100px)">
              ④
            </Center>
            <Center bgColor="#fff" w="200px" h="200px" pos="absolute" border="1px solid #ddd" transform="rotateY(-90deg) rotateZ(90deg) translateZ(100px)">
              ⑤
            </Center>
            <Center bgColor="#fff" w="200px" h="200px" pos="absolute" border="1px solid #ddd" transform="rotateX(-90deg) translateZ(100px)">
              ⑥
            </Center>
          </Center>
        </Box>
      </Box>
    </Box>
  )
}

export default App
