import AdopterEntity from "../../entities/AdopterEntity";

export default interface InterfaceAdopterRepository {
  createAdopter(adopter: AdopterEntity): void | Promise<void>;
}