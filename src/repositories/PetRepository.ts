import { Repository } from "typeorm";
import PetEntity from "../entities/PetEntity";
import InterfacePetRepository from "./interfaces/InterfacePetRepository";
import AdopterEntity from "../entities/AdopterEntity";

export default class PetRepository implements InterfacePetRepository {
    private repository: Repository<PetEntity>

    constructor(repository: Repository<PetEntity>) {
        this.repository = repository
    }

    createPet(pet: PetEntity): void {
        this.repository.save(pet)
    }

    async petList(): Promise<PetEntity[]> {
      return await this.repository.find()
    }

    async updatePet(id: number, newData: PetEntity): Promise<{success: boolean, message?: string}> {
        try {
            const petToUpdate = await this.repository.findOne({ where: { id }})

            if(!petToUpdate) {
                return { success: false, message: "Pet não encontrado"}
            }

            Object.assign(petToUpdate, newData)
            return { success: true}
        } catch (error) {
            console.log(error)
            return {
                success: false,
                message: "Ocorru um erro ao atualizar o pet"
            }
        }
    }

    async deletePet(id: number, newData: PetEntity): Promise<{success: boolean, message?: string}>{
        try {
            const petToRemove = await this.repository.findOne({ where: { id }})

            if(!petToRemove) {
                return { success: false, message: "Pet não encontrado"}
            }

            await this.repository.remove(petToRemove)
            return { success: true}
        } catch (error) {
            console.log(error)
            return {
                success: false,
                message: "Ocorru um erro ao deletar o pet"
            }
        }
    }

    async createAdopter(adopter: AdopterEntity): Promise<void> {
        await this.repository.save(adopter);
      }
}