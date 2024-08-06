import React from "react";
import Label from "../../components/ui/Label";
import Input from "../../components/ui/Input";
import TextArea from "../../components/ui/TextArea";
import Button from "../../components/ui/Button";
import Select from "../../components/ui/Select";
import Title from "../../components/ui/Title";

const CreatePost = () => {
  return (
    <>
      <Title>Crear un Post</Title>
      <form className="w-full mt-4 grid grid-cols-[100%] grid-rows-[repeat(8,1fr)_auto_200px_1fr] lg:grid-cols-4 lg:grid-rows-[repeat(3,1fr)_10rem_1fr] gap-x-3 gap-y-5">
        <Label>
          Cédula de identidad
          <input className="w-full h-8 px-2 border-2 border-solid border-sky-300 rounded focus-visible:outline-none" type="number" name="ci" placeholder="Ej. 12345678" />
        </Label>
        <Label>
          Nombres
          <Input type="text" name="names" placeholder="Ej. Juan" />
        </Label>
        <Label>
          Apellidos
          <Input type="text" name="lastnames" placeholder="Ej. Perez" />
        </Label>
        <Label>
          Foto de la persona
          <input type="file" name="image" />
        </Label>
        <Label >
          Estado
          <Select className="w-full h-7 px-2 border-2 border-solid border-sky-300 rounded focus-visible:outline-none text-black" name="state">
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
        <Label>
          Edad
          <Input type="number" name="age" placeholder="Ej. 25" />
        </Label>
        <Label>
          Fecha de último avistamiento
          <Input type="date" name="last_sight_date" />
        </Label>
        <Label>
          Ubicación de último avistamiento
          <Input
            type="text"
            name="last_sight_location"
            placeholder="Ej. Calle 123"
          />
        </Label>
        <div className="mb-2 grid-cols-subgrid col-span-4">
          <h3>Status de la persona</h3>
          <div className="mt-2 flex flex-wrap gap-5">
            <Label direction="row">
              <input type="radio" name="status" value="secuestrado" />
              Secuestrado
            </Label>
            <Label direction="row">
              <input type="radio" name="status" value="preso" />
              Preso
            </Label>
            <Label direction="row">
              <input type="radio" name="status" value="desaparecido" />
              Desaparecido
            </Label>
            <Label direction="row">
              <input type="radio" name="status" value="encontrado" />
              Encontrado
            </Label>
            <Label direction="row">
              <input type="radio" name="status" value="fallecido" />
              Fallecido
            </Label>
          </div>
        </div>
        <div className="grid grid-cols-subgrid col-span-4">
          <Label className="col-span-2">
            Descripción
            <TextArea
              name="description"
              placeholder="Ej. La ultima vez visto tenia una camisa azul, jeans..."
            />
          </Label>
        </div>
        <Button type="submit">
          Publicar
        </Button>
      </form>
    </>
  );
};

export default CreatePost;
