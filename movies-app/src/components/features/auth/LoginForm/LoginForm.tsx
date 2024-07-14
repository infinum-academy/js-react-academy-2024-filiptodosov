"use client";

import {  Button, chakra,  FormControl, FormErrorMessage, FormLabel, Heading, Input } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { loginMutator, mutator } from "@/fetchers/mutators";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";

interface ILoginFormInputs {
    email: string,
    password: string,
}


export const LoginForm = () => {
    const { register, handleSubmit } = useForm<ILoginFormInputs>();
    const {trigger} = useSWRMutation(swrKeys.login, loginMutator
    );

    const onLogin = async (data:ILoginFormInputs) => {
        await trigger(data);
    }

    return (
            <chakra.form flexDirection="column" display="flex" gap="10px" onSubmit={handleSubmit(onLogin)}>
            <Heading as="h2" textAlign="center" marginTop={3}>Login</Heading>
            <FormControl isRequired={true}>
                <FormLabel>Email</FormLabel>
                <Input {...register('email')} required={true} type="email"></Input>
            </FormControl>
            <FormControl isRequired={true} isInvalid={false}>
                <FormLabel>Password</FormLabel>
                <Input {...register('password')} required={true} type="password" ></Input>
                <FormErrorMessage>Passwords must match.</FormErrorMessage>
            </FormControl>  
            <Button type="submit">Login</Button>
        </chakra.form>
    )
}