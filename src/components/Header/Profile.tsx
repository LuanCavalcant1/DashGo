import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile (){
    return(
        <Flex align='center'>
        <Box mr='4' textAlign='right'>
            <Text>Luan Cavalcanti</Text>
            <Text color='gray.300' fontSize='small'>
                Luanjcavalcanti@gmail.com</Text>
        </Box>
        <Avatar size='sm' name='Luan Cavalcanti' src='https://github.com/LuanCavalcant1.png' />
    </Flex>
    )
}