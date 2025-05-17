import { injectable } from 'inversify';
import { Tapir, ITapir } from '../models/rabbit';

// Клас-репозиторій для роботи з зайцями
// Анотація injectable дозволяє впровадити цей репозиторій через IoC контейнер
@injectable()
export class TapirRepository {
    // Метод для отримання всіх зайців з бази даних
    public async findAll(): Promise<ITapir[]> {
        return Tapir.find();
    }

    // Метод для пошуку зайця за унікальним ідентифікатором
    public async findById(id: string): Promise<ITapir | null> {
        return Tapir.findById(id);
    }

    // Метод для створення нового зайця в базі даних
    public async create(rabbitData: ITapir): Promise<ITapir> {
        const rabbit = new Tapir(rabbitData);
        return rabbit.save();
    }

    // Метод для видалення зайця за ідентифікатором
    public async delete(id: string): Promise<boolean> {
        const result = await Tapir.findByIdAndDelete(id);
        return result !== null;
    }

    // Метод для повного оновлення даних про зайця (заміна всіх полів)
    public async update(id: string, rabbitData: ITapir): Promise<ITapir | null> {
        return Tapir.findByIdAndUpdate(id, rabbitData, { new: true });
    }

    // Метод для часткового оновлення даних про зайця (оновлення лише вказаних полів)
    public async patch(id: string, rabbitData: Partial<ITapir>): Promise<ITapir | null> {
        return Tapir.findByIdAndUpdate(id, { $set: rabbitData }, { new: true });
    }
}
