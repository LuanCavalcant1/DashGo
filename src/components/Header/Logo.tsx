import { Text } from "@chakra-ui/react";

export function Logo(){
    return(
        <Text fontSize={['xl','2xl','4xl']}
                fontWeight='bold'
                letterSpacing='tight'
                w='64'>
                DashGo
                <Text as='span'
                    ml='1'
                    color='blue.500'
                >
                    .
                </Text>
            </Text>
    );
}