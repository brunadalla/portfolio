import { Container, Flex, Box } from "@/styles/Global"
import { Text } from "@/styles/Text"
import { Footer as FooterWrapper } from "./style"
import { UserImage } from "@/pages/home/style"
import { userData } from "@/utils/userData"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { SiCodewars } from "react-icons/si"
import { Button } from "@/styles/Buttons"
// import { HandEffect } from "../HandEffect";

export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper id='social-media'>
      <Container>
        <Flex>
          <UserImage
            src={`https://github.com/${userData.githubUser}.png`}
            alt={userData.nameUser}
            title={userData.nameUser}
            width={"70px"}
            height={"70px"}
          />
          <Box css={{ marginLeft: "$2" }}>
            <Text type='heading4' color='grey5' css={{ marginBottom: "$2" }}>
              Thank you! 💖{/* <HandEffect /> */}
            </Text>
            <Text type='body1' color='grey2'>
              Feel free to follow me on my social networks
            </Text>
          </Box>
        </Flex>
        <Flex
          css={{
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "$2",
          }}
        >
          <Button
            className='codewars'
            type='circle'
            as='a'
            target='_blank'
            href={`https://codewars.com/users/${userData.codewars}`}
          >
            <SiCodewars />
          </Button>
          <Button
            className='github'
            type='circle'
            as='a'
            target='_blank'
            href={`https://github.com/${userData.githubUser}`}
          >
            <FaGithub />
          </Button>
          <Button
            className='linkedin'
            type='circle'
            as='a'
            target='_blank'
            href={`https://linkedin.com/in/${userData.linkedinUser}`}
          >
            <FaLinkedinIn />
          </Button>
        </Flex>
      </Container>
    </FooterWrapper>
  )
}
