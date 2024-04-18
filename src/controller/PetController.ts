import { Request, Response } from 'express';
import type PetTypes from "../types/PetTypes";
import EnumEspecie from "../enum/EnumSpecie";
import TypePet from "../types/PetTypes";
import PetRepository from '../repositories/PetRepository';
import PetEntity from '../entities/PetEntity';

let petList: Array<TypePet> = [];

let id = 0;
function geraId() {
  id = id + 1;
  return id;
}

export default class PetController {
  constructor(private respository: PetRepository) {}
  createPet(req: Request, res: Response) {
    const { isAdopted, specie, dateOfBirth, name } = <PetEntity>req.body;

    if (!Object.values(EnumEspecie).includes(specie)) {
      return res.status(400).json({ error: "Especie inválida" });
    }

    const newPet: PetEntity = new PetEntity()
      newPet.id= geraId(),
      newPet.isAdopted=isAdopted,
      newPet.specie=specie,
      newPet.dateOfBirth=dateOfBirth,
      newPet.name=name,
    this.respository.createPet(newPet)
    return res.status(201).json(newPet);
  }

  petList(req: Request, res: Response) {
    return res.status(200).json(petList);
  }

  updatePet(req: Request, res: Response) {
    const { id } = req.params;
    const { name, dateOfBirth, specie, isAdopted } = req.body as TypePet;
    const pet = petList.find((pet) => pet.id === Number(id));
    if (!pet) {
      return res.status(400).json({ mensagem: "Pet não encontrado" });
    }
    pet.name = name;
    pet.dateOfBirth = dateOfBirth;
    pet.specie = specie;
    pet.isAdopted = isAdopted;
    return res.status(200).json(pet);
  }

  deletePet(req: Request, res: Response) {
    const { id } = req.params;
    const pet = petList.find((pet) => pet.id === Number(id));
    if (!pet) {
      return res.status(400).json({ mensagem: "Pet não encontrado" });
    }
    const index = petList.indexOf(pet);
    petList.splice(index, 1);
    return res.status(204).json();
  }
}
