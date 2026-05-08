import { test, expect } from '@playwright/test';

test(
    'GET Posts API Test',
    async ({ request }) => {

        const response =
            await request.get(
                'https://jsonplaceholder.typicode.com/posts'
            );

        expect(
            response.status()
        ).toBe(200);

        const responseBody =
            await response.json();

        expect(
            responseBody.length
        ).toBeGreaterThan(0);
    }
);