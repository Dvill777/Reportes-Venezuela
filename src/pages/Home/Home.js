import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Title from "../../components/ui/Title";

const Home = () => {
  return (
    <>
      <Title>Reportes Venezuela</Title>
      <p className="text-lg mb-5">
        Bienvenido a Reportes Venezuela. En Reportes Venezuela, nos dedicamos a
        brindar un apoyo esencial para la localización de personas desaparecidas
        o secuestradas. Nuestro objetivo es ofrecer una plataforma centralizada
        y segura donde las familias y amigos puedan reportar la desaparición de
        sus seres queridos de manera rápida y eficiente.En Reportes Venezuela,
        comprendemos la angustia y desesperación que conlleva la desaparición de
        un ser querido. Nos comprometemos a trabajar incansablemente para ayudar
        a reunir a las familias y proporcionar el apoyo necesario durante este
        difícil proceso. Juntos, podemos marcar la diferencia.
      </p>
      <h2 className="text-3xl mb-5 font-bold">¿Cómo funciona?</h2>
      <p className="text-lg mb-5">
        Complete el formulario con toda la información relevante sobre la
        persona desaparecida. Esta información se guardará como un <b>post </b>
        el cual después se somete a revision y publicación en la sección de
        desapariciones o secuestros verificados.
      </p>
      <Link to="/crear-publicacion">
        <Button>Reportar una persona</Button>
      </Link>
    </>
  );
};

export default Home;
