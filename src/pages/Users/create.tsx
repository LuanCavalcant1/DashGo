import { Box, Button, Divider, Flex, Heading, HStack, Input, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
   
}


const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('Email obrigatório').email('Email invalido'),
    password: yup.string().required('Senha obrigatória').min(6, 'No minimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
})

export default function CreateUser() {
    const { register, handleSubmit, formState: { errors }, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })
    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000))

        console.log(values)
    }
    

    return (
        <Box>
            <Header />
            <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
                <Sidebar />

                <Box as='form'
                    flex='1'
                    borderRadius={8}
                    bg='gray.800'
                    p='8'
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size='lg' fontWeight='normal'>
                        Criar usuário
                    </Heading>
                    <Divider my='' borderColor='gray.700'></Divider>
                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px'
                            spacing='8'
                            w='100%'>
                            <Input name="name"
                                placeholder="Nome Completo"
                                {...register('name')}
                            >
                            </Input>
                            <Input name="email"
                                type='email'
                                placeholder="Email"
                                {...register}
                            >

                            </Input>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth='240px'
                            spacing='8'
                            w='100%'>
                            <Input name="password"
                             type='password'
                              placeholder="Senha"
                                {...register}
                              >
                              </Input>
                            <Input name="password_confirmation"
                             type='password'
                              placeholder="Confirmação da senha"
                                {...register}
                              >
                              </Input>
                        </SimpleGrid>
                    </VStack>

                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/Users' passHref>
                                <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                            <Button type='submit'
                             colorScheme='blue'
                             isLoading={formState.isSubmitting}
                             >
                                Salvar
                             </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}