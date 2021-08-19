import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/layout'
import {
  Container,
  Flex,
  IconButton,
  Link,
  useColorMode,
} from '@chakra-ui/react'
import { BodyStyle } from '../../components/BodyStyle'

export default function AboutPage() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container height='100vh'>
      <BodyStyle
        sx={{
          body: {
            dark: {
              background: 'green.800',
              color: 'whiteAlpha.900',
            },
            light: {
              background: 'green.100',
              color: 'gray.900',
            },
          },
        }}
      />

      <Flex alignItems='center'>
        <Link flexGrow={1} href='/'>
          Home
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

      <Box>About us</Box>
    </Container>
  )
}
