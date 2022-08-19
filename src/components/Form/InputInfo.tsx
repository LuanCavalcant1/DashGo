import React from "react";
import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";

interface InputInterface extends InputProps {
    name:string;
    label?:string;
}

export function InputInfo ({name, label, ...rest}:InputInterface){
    return(
        <FormControl>
            { !!label && <FormLabel htmlFor={name}>{label} </FormLabel>}
            <Input name={name} type='email' id={name} focusBorderColor='pink.500' bgColor='gray.900' variant='filled' _hover={{ bgcolor: 'gray.900' }} size='lg' {... rest}/>
          </FormControl>
    )
}