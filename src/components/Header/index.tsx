import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
    return (
        <Flex w='100%'
            as='header'
            maxW={1480}
            h='20'
            mx='auto'
            mt='4'
            align='center'
            px='6'
        >
            <Logo />
            <SearchBox />

            <Flex align='center'
                ml='auto'
            >

                <NotificationNav />
                <Profile />
            </Flex>
        </Flex>
    )
}