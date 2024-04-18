import PetEntity from "../../entities/PetEntity";

export default interface InterfacePetRepository {
    createPet(pet: PetEntity): void;
    petList(): Array<PetEntity>
    updatePet(id: number, pet: PetEntity): void
    deletePet(id: number, pet: PetEntity): void
}