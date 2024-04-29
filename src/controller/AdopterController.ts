import AdopterEntity from "../entities/AdopterEntity";

export default class AdopterController {
    async createAdopter(req: Request, res: Response) {
        try {
          const { name, cellphone, address, photo, password } = <AdopterEntity>req.body;
      
          const newAdopter = new AdopterEntity(
            name,
            password,
            cellphone,
            photo,
            address
          );
      
          await this.repository.createAdopter(newAdopter);
          return res.status(201).json(newAdopter);
        } catch (error) {
          return res.status(500).json({ error: 'Erro ao criar o adotante' });
        }
      }
}