import React from "react";
import Contacts from "components/Contacts";
import UserAddForm from "components/UserAddForm";
import Filter from "components/Filter";
import { Container, Title } from "components/Phonebook/Phonebook.styled"

export default function Phonebook() {
    return (
        <Container>
            <Title>Phonebook</Title>
            <UserAddForm />
            <Filter />
            <Contacts />
        </Container>
    );
};