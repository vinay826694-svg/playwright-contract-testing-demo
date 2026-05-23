import { PactV3, MatchersV3 } from "@pact-foundation/pact";
import { test, expect } from "@playwright/test";

const provider = new PactV3({
    consumer: "QAConsumer",
    provider: "UserAPI"
});

test('Generate User Contract', async () => {

await provider
.addInteraction({

states: [
    {
        description: "User exists"
    }
],

uponReceiving: "request for user details",

withRequest: {

method: "GET",

path: "/users/1"

},

willRespondWith: {

status: 200,

body: {

id: MatchersV3.integer(),

name: MatchersV3.string(),

email: MatchersV3.string()

}

}

})

.executeTest(async(mockServer)=>{

const response = await fetch(
`${mockServer.url}/users/1`
);

const body = await response.json();

expect(body.id).toBeDefined();

});

});