"use client";

import { Alert, AlertIcon, Button, chakra, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { mutator } from "@/fetchers/mutators";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { useState } from "react";

interface IRegisterFormInputs {
    email: string,
    password: string,
    password_confirmation:string
}


export const RegisterForm = () => {
    const [passwordsDoNotMatch, setpasswordsDoNotMatch] = useState(false);
    const [isRegistered, setisRegistered] = useState(false);

    const { register, handleSubmit } = useForm<IRegisterFormInputs>();
    const {trigger} = useSWRMutation(swrKeys.register, mutator, {
        onSuccess: ()=>{
            setisRegistered(true);
        }
    });

    const onRegister = async (data:IRegisterFormInputs) => {
        if(data.password !== data.password_confirmation) {
            setpasswordsDoNotMatch(true);
        }else {
            setpasswordsDoNotMatch(false);
            await trigger(data);
        }
    }

    return (
        <>
        {isRegistered && (<Alert status='success' marginTop={5}>
                    <AlertIcon />
                    You have successfully registered. You can now log in.
                    </Alert>)}
        {!isRegistered && (
                        <chakra.form flexDirection="column" display="flex" gap="10px" onSubmit={handleSubmit(onRegister)}>
                        <Heading as="h2" textAlign="center" marginTop={3}>Register</Heading>
                        <FormControl isRequired={true}>
                            <FormLabel>Email</FormLabel>
                            <Input {...register('email')} required={true} type="email"></Input>
                        </FormControl>
                        <FormControl isRequired={true} isInvalid={passwordsDoNotMatch}>
                            <FormLabel>Password</FormLabel>
                            <Input {...register('password')} required={true} type="password"></Input>
                        </FormControl>
                        <FormControl isRequired={true} isInvalid={passwordsDoNotMatch}>
                            <FormLabel>Password Confirmation</FormLabel>
                            <Input {...register('password_confirmation')} required={true} type="password" ></Input>
                            <FormErrorMessage>Passwords must match.</FormErrorMessage>
                        </FormControl>  
                        <Button type="submit">Register</Button>
                    </chakra.form>
        )}

        </>
    )
}




