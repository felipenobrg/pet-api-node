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
  constructor(private respository: PetRepository) { }
  createPet(req: Request, res: Response) {
    const { isAdopted, specie, dateOfBirth, name } = <PetEntity>req.body;

    if (!Object.values(EnumEspecie).includes(specie)) {
      return res.status(400).json({ error: "Especie inválida" });
    }

    const newPet: PetEntity = new PetEntity()
    newPet.id = geraId(),
      newPet.isAdopted = isAdopted,
      newPet.specie = specie,
      newPet.dateOfBirth = dateOfBirth,
      newPet.name = name,
      this.respository.createPet(newPet)
    return res.status(201).json(newPet);
  }

  async petList(req: Request, res: Response) {
    const listPets = await this.respository.petList();
    return res.status(200).json(listPets)
  }

  async updatePet(req: Request, res: Response) {
    const { id } = req.params;
    const { sucess, message } = await this.respository.updatePet(
      Number(id)
    req.body as PetEntity
    )

    if (!sucess) {
      return res.status(404).json({ message })
    }
    return res.sendStatus(200);
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
