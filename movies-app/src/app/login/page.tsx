"use client";

import { LoginForm } from "@/components/features/auth/LoginForm/LoginForm";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { Container, Heading } from "@chakra-ui/react";


export default function Login() {
  return (
    <Container>
        <AuthRedirect to="/shows" condition="loggedIn" />
        <LoginForm />
    </Container>
  );
}
