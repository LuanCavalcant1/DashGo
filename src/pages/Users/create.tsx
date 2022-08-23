import { Box, Button, Divider, Flex, Heading, HStack, Input, SimpleGrid, VStack } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
    return (
        <Box>
            <Header />
        <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
            <Sidebar />

            <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
            <Heading size='lg' fontWeight='normal'>
                Criar usuário
            </Heading>
            <Divider my='' borderColor='gray.700'></Divider>
            <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px'
             spacing='8'
             w='100%'>
                <Input name="name" placeholder="Nome Completo"></Input>
                <Input name="email" type='email' placeholder="Email"></Input>
             </SimpleGrid>

             <SimpleGrid minChildWidth='240px'
             spacing='8'
             w='100%'>
                <Input name="password" type='password' placeholder="Senha"></Input>
                <Input name="password_confirmation" type='password' placeholder="Confirmação da senha"></Input>
             </SimpleGrid>
            </VStack>

            <Flex mt='8' justify='flex-end'>
                <HStack spacing='4'>
                <Button colorScheme='whiteAlpha'>Cancelar</Button>
                <Button colorScheme='blue'>Salvar</Button>  
                </HStack>
            </Flex>
            </Box>
        </Flex>
        </Box>
    );
}