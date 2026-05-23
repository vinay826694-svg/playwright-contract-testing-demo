import { Verifier } from "@pact-foundation/pact";

(async ()=>{

await new Verifier({

providerBaseUrl:
'https://jsonplaceholder.typicode.com',

pactUrls:[
'./pacts/QAConsumer-UserAPI.json'
]

}).verifyProvider();

})();