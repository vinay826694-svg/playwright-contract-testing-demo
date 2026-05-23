import { test, expect } from '@playwright/test';
import Ajv from 'ajv';

import { userSchema } from '../../schemas/userSchema';

const ajv = new Ajv();

test('Validate User Schema Contract', async ({ request }) => {

const response = await request.get(
'https://jsonplaceholder.typicode.com/users/1'
);

expect(response.status()).toBe(200);

const body = await response.json();

const validate = ajv.compile(
userSchema
);

const result = validate(body);

expect(result).toBe(true);

});