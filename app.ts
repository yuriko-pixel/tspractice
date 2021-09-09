let userInput: unknown;
let userName: string;

userInput = 5;
userInput = NaN;

if(typeof userInput === 'string') {
  userName = userInput;
}

function generationError(message:string, code: number): never {
  throw {message:message, errorCode: code};
}

const result = generationError('AN ERROR OCCURED', 200);
console.log(result);