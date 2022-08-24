import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align='center'>
            {showProfileData && (
                <Box mr='4' textAlign='right'>
                    <Text>Luan Cavalcanti</Text>
                    <Text color='gray.300' fontSize='small'>
                        Luanjcavalcanti@gmail.com</Text>
                </Box>
            )}

            <Avatar size='sm' name='Luan Cavalcanti' src='https://github.com/LuanCavalcant1.png' />
        </Flex>
    )
}