import { Schema, model } from 'mongoose';

// Інтерфейс для об'єкта "Заєць"
interface ITapir {
    name: string; // Ім'я зайця
    age: number; // Вік зайця у роках
    height: number; // Висота зайця в сантиметрах
    weight: number; // Вага зайця в кілограмах
    gender: 'male' | 'female'; // Стать зайця: 'male' - самець, 'female' - самка
    description?: string; // Опис зайця (необов'язкове поле)
    dateAdded: Date; // Дата додавання запису до бази даних
    feeding: 'fruits' | 'leaf' | 'algae' | 'berries';
}

// Схема MongoDB для моделі "Заєць"
const tapirSchema = new Schema<ITapir>({
    name: {
        type: String,
        required: true, // Поле є обов'язковим
    },
    age: {
        type: Number,
        required: true, // Поле є обов'язковим
    },
    height: {
        type: Number,
        required: true, // Поле є обов'язковим
    },
    weight: {
        type: Number,
        required: true, // Поле є обов'язковим
    },
    gender: {
        type: String,
        required: true, // Поле є обов'язковим
        enum: ['male', 'female'], // Допустимі значення: 'male' або 'female'
    },
    description: String, // Необов'язкове текстове поле
    dateAdded: {
        type: Date,
        default: Date.now, // Значення за замовчуванням - поточна дата і час
    },
    feeding: {
        type: String,
        required: true, // Поле є обов'язковим
        enum: ['fruits', 'leaf', 'algae', 'berries'],
    },
});

// Створення моделі Mongoose на основі схеми
export const Tapir = model<ITapir>('Tapir', tapirSchema);
export type { ITapir }; // Експортуємо інтерфейс для використання в інших файлах
