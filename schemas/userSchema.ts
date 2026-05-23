export const userSchema = {

type: "object",

properties: {

id: {
type: "number"
},

name: {
type: "string"
},

email: {
type: "string"
},

address: {

type: "object",

properties: {

city: {
type: "string"
}

},

required:["city"]

}

},

required:[
"id",
"name",
"email",
"address"
]

}