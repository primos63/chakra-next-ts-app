import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  useColorMode,
} from '@chakra-ui/react'
import { BodyStyle } from '../components/BodyStyle'

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container height='100vh'>
      <BodyStyle
        sx={{
          body: {
            dark: {
              background: 'blue.800',
              color: 'whiteAlpha.900',
            },
            light: {
              background: 'blue.100',
              color: 'gray.900',
            },
          },
        }}
      />
      <Flex alignItems='center'>
        <Link flexGrow={1} href='/about'>
          About Us
        </Link>

        <IconButton
          rounded='full'
          aria-label='Toggle dark mode'
          bgColor='transparent'
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          _hover={{
            bgColor: 'transparent',
          }}
        />
      </Flex>
      <Box>HOME PAGE</Box>
    </Container>
  )
}
export default Index
