import { test, expect } from '@playwright/test';

test('Validate User API Contract', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    // Contract validation

    expect(typeof body.id)
        .toBe('number');

    expect(typeof body.name)
        .toBe('string');

    expect(typeof body.email)
        .toBe('string');

    expect(typeof body.address)
        .toBe('object');

    expect(typeof body.address.city)
        .toBe('string');

});