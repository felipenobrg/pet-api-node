import EnumSpecie from "../enum/EnumSpecie";

type TypePet = {
  id: number;
  name: string;
  specie: EnumSpecie;
  isAdopted: boolean;
  dateOfBirth: Date;
};

export default TypePet;
