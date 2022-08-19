import React from 'react'
import { Button, Flex, Input, Stack } from '@chakra-ui/react'
import { InputInfo } from '../components/Form/InputInfo'




export default function SignIn() {
  return (
    <Flex
      w='100vh'
      h='100vh'
      alignItems='center'
      justify='center'
    >

      <Flex as='form'
        w='100%'
        maxW={360}
        bg='gray.800'
        p='8'
        borderRadius='8'
        flexDir='column'
      >

        <Stack spacing='4'>

          <InputInfo name='email' type='email' label='Email'></InputInfo>
          <InputInfo name='password' type='password' label='Senha'></InputInfo>
         
        </Stack>

        <Button type='submit' mt='6' colorScheme='blackAlpha' size='lg'> Entrar </Button>

      </Flex>
    </Flex>
  )
}
