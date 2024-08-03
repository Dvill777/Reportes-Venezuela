import React from "react";
import { Form, Label, Select, Status, SubmitButton, TextArea, Input } from "./styles";

const CreatePost = () => {
  return (
    <>
      <h1>Crear un Post</h1>
      <Form>
        <Label $gridArea="ci">
          Cédula de identidad
          <Input type="number" name="ci" />
        </Label>
        <Label $gridArea="names">
          Nombres
          <Input type="text" name="names" />
        </Label>
        <Label $gridArea="lastnames">
          Apellidos
          <Input type="text" name="lastnames" />
        </Label>
        <Label $gridArea="image">
          Foto de la persona
          <input type="file" name="image" />
        </Label>
        <Label $gridArea="state">
          Estado
          <Select name="state">
            <option value="Amazonas">Amazonas</option>
            <option value="Anzoategui">Anzoátegui</option>
            <option value="Apure">Apure</option>
            <option value="Aragua">Aragua</option>
            <option value="Barinas">Barinas</option>
            <option value="Bolivar">Bolivar</option>
            <option value="Carabobo">Carabobo</option>
            <option value="Cojedes">Cojedes</option>
            <option value="Delta Amacuro">Delta Amacuro</option>
            <option value="Distrito Capital">Distrito Capital</option>
            <option value="Falcon">Falcón</option>
            <option value="Guarico">Guárico</option>
            <option value="Lara">Lara</option>
            <option value="Merida">Mérida</option>
            <option value="Miranda">Miranda</option>
            <option value="Monagas">Monagas</option>
            <option value="Nueva Esparta">Nueva Esparta</option>
            <option value="Portuguesa">Portuguesa</option>
            <option value="Sucre">Sucre</option>
            <option value="Tachira">Táchira</option>
            <option value="Trujillo">Trujillo</option>
            <option value="Vargas">Vargas</option>
            <option value="Yaracuy">Yaracuy</option>
            <option value="Zulia">Zulia</option>
          </Select>
        </Label>
        <Label $gridArea="age">
          Edad
          <Input type="number" name="age" />
        </Label>
        <Label $gridArea="last_sight_date">
          Fecha de último avistamiento
          <Input type="date" name="last_sight_date" />
        </Label>
        <Label $gridArea="last_sight_location">
          Ubicación de último avistamiento
          <Input type="text" name="last_sight_location" />
        </Label>
        <Status $gridArea="status">
          <h3>Status de la persona</h3>
          <div>
            <Label $direction="row">
              <input type="radio" name="status" value="secuestrado" />
              Secuestrado
            </Label>
            <Label $direction="row">
              <input type="radio" name="status" value="preso" />
              Preso
            </Label>
            <Label $direction="row">
              <input type="radio" name="status" value="desaparecido" />
              Desaparecido
            </Label>
            <Label $direction="row">
              <input type="radio" name="status" value="encontrado" />
              Encontrado
            </Label>
            <Label $direction="row">
              <input type="radio" name="status" value="fallecido" />
              Fallecido
            </Label>
          </div>
        </Status>
        <Label $gridArea="description">
          Descripción
          <TextArea name="description" />
        </Label>
        <SubmitButton type="submit" $gridArea="submit">Publicar</SubmitButton>
      </Form>
    </>
  );
};

export default CreatePost;
