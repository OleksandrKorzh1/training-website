// Експорт специфікації Swagger/OpenAPI для документації про API
export const swaggerSpec = {
    // Версія специфікації OpenAPI
    openapi: '3.0.0',
    // Загальна інформація про API
    info: {
        title: 'API Сайту про ',
        version: '1.0.0',
        description: 'Документація API для Сайту про Тапірів',
    },
    // Налаштування серверів для тестування API
    servers: [
        {
            url:
                process.env.CODESPACE_NAME !== undefined
                    ? `https://${process.env.CODESPACE_NAME}-5000.app.github.dev`
                    : 'http://localhost:5000',
            description: 'Development server',
        },
    ],
    // Визначення кінцевих точок (endpoints) REST API та операцій з ними
    paths: {
        '/api/tapirs': {
            // GET запит для отримання всіх зайців
            get: {
                summary: 'Отримати всіх зайців',
                responses: {
                    '200': {
                        description: 'Список всіх тапірів',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: { $ref: '#/components/schemas/Tapirs' },
                                },
                            },
                        },
                    },
                },
            },

            // POST запит для створення нового зайця
            post: {
                summary: 'Створити нового тапіра',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Tapirs' },
                        },
                    },
                },
                responses: {
                    '201': {
                        description: "Створений об'єкт тапіра",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Tapirs' },
                            },
                        },
                    },
                },
            },
        },

        // Операції для конкретного зайця за ID
        '/api/tapirs/{id}': {
            // GET запит для отримання тапіра за ID
            get: {
                summary: 'Отримати тапіра за ID',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID тапіра',
                    },
                ],
                responses: {
                    '200': {
                        description: "Об'єкт тапіра",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Tapirs' },
                            },
                        },
                    },
                    '404': { description: 'Тапіра не знайдено' },
                },
            },

            // PUT запит для повного оновлення зайця за ID
            put: {
                summary: 'Повністю оновити тапіра',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID тапіра',
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Tapirs' },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: "Оновлений об'єкт тапіра",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Tapirs' },
                            },
                        },
                    },
                    '404': { description: 'Тапіра не знайдено' },
                },
            },
            // PATCH запит для часткового оновлення зайця за ID
            patch: {
                summary: 'Частково оновити тапіра',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID тапіра',
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Tapirs' },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: "Оновлений об'єкт тапіра",
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Tapirs' },
                            },
                        },
                    },
                    '404': { description: 'Тапіра не знайдено' },
                },
            },
            // DELETE запит для видалення даних про зайця за ID
            delete: {
                summary: 'Видалити дані про тапіра',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'ID тапіра',
                    },
                ],
                responses: {
                    '200': { description: 'Повідомлення про успішне видалення' },
                    '404': { description: 'Тапіра не знайдено' },
                },
            },
        },
    },

    // Визначення компонентів для повторного використання
    components: {
        // Схеми даних
        schemas: {
            // Схема об'єкта Заєць
            Tapirs: {
                type: 'object',
                required: ['name', 'age', 'height', 'weight', 'gender', 'feeding'],
                properties: {
                    name: {
                        type: 'string',
                        description: "Ім'я тапіра",
                    },
                    age: {
                        type: 'number',
                        description: 'Вік тапіра у роках',
                    },
                    height: {
                        type: 'number',
                        description: 'Висота тапіра в сантиметрах',
                    },
                    weight: {
                        type: 'number',
                        description: 'Вага тапіра в кілограмах',
                    },
                    gender: {
                        type: 'string',
                        enum: ['male', 'female'],
                        description: 'Стать тапіра',
                    },
                    feeding: {
                        type: 'string',
                        enum: ['fruits', 'leaf', 'algae', 'berries'],
                        description: 'Стать тапіра',
                    },
                    description: {
                        type: 'string',
                        description: "Опис тапіра (необов'язкове поле)",
                    },
                },
            },
        },
    },
};
