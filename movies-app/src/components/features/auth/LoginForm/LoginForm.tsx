"use client";

import {
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { loginMutator } from "@/fetchers/mutators";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { useSWRConfig } from "swr";

interface ILoginFormInputs {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const toast = useToast();
  const { mutate } = useSWRConfig();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm<ILoginFormInputs>();
  const { trigger } = useSWRMutation(swrKeys.login, loginMutator, {
    onError: (error) => {
      toast({
        title: "Oops!",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
    onSuccess: () => {
      toast({
        title: "Yay!",
        description:
          "You have successfully logged in. You will be redirected to the shows page.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      mutate(swrKeys.myProfile);
    },
  });

  const onLogin = async (data: ILoginFormInputs) => {
    await trigger(data);
  };

  return (
    <>
      <chakra.form
        flexDirection="column"
        display="flex"
        gap="10px"
        onSubmit={handleSubmit(onLogin)}
      >
        <Heading as="h2" textAlign="center" marginTop={3}>
          Login
        </Heading>
        <FormControl isRequired={true}>
          <FormLabel>Email</FormLabel>
          <Input {...register("email")} required={true} type="email"></Input>
        </FormControl>
        <FormControl
          isRequired={true}
          isInvalid={false}
          isDisabled={!isDirty || !isValid}
        >
          <FormLabel>Password</FormLabel>
          <Input
            {...register("password")}
            required={true}
            type="password"
          ></Input>
          <FormErrorMessage>Passwords must match.</FormErrorMessage>
        </FormControl>
        <Button disabled={!isDirty || !isValid} type="submit">
          Login
        </Button>
      </chakra.form>
    </>
  );
};
