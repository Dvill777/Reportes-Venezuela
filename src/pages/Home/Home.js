import React from "react";
import { Button, Container, Subtitle, Text, Title } from "./styles";

const Home = () => {
  return (
    <Container>
      <Title>Reportes Venezuela</Title>
      <Text>
        Bienvenido a Reportes Venezuela. En Reportes Venezuela, nos dedicamos a
        brindar un apoyo esencial para la localización de personas desaparecidas
        o secuestradas. Nuestro objetivo es ofrecer una plataforma centralizada
        y segura donde las familias y amigos puedan reportar la desaparición de
        sus seres queridos de manera rápida y eficiente.En Reportes Venezuela,
        comprendemos la angustia y desesperación que conlleva la desaparición de
        un ser querido. Nos comprometemos a trabajar incansablemente para ayudar
        a reunir a las familias y proporcionar el apoyo necesario durante este
        difícil proceso. Juntos, podemos marcar la diferencia.
      </Text>
      <Subtitle>¿Cómo funciona?</Subtitle>
      <Text>
        Complete el formulario con toda la información relevante sobre la
        persona desaparecida. Esta información se guardará como un <b>post </b>
        el cual después se somete a revision y publicación en la sección de
        desapariciones o secuestros verificados.
      </Text>
      <Button>Reportar una persona</Button>
    </Container>
  );
};

export default Home;
