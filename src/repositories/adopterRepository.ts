import AdopterEntity from "../entities/AdopterEntity";
import InterfaceAdopterRepository from "./interfaces/interfaceAdopterRepository";

export default class AdopterRepository implements InterfaceAdopterRepository {
    async createAdopter(adopter: AdopterEntity): Promise<void> {
        await this.repository.save(adopter);
      }
}