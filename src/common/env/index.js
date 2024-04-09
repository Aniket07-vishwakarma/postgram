import base from "./base";

let environment;
switch (window.location.hostname) {
    case 'localhost':
        environment = { ...base }
        break;
    default: 
        environment = { ...base }
}

const env = environment;
export default env;