const add = (a:number, b:number) => a+b;

const printOutput: (a:number, b:number) => void = output => console.log(output);

const button = document.querySelector('button');

if(button) {
    button.addEventListener('click', event=>console.log(event));
}

printOutput(add(5,1),add(3,2));

const hobbies = ['Sports','Cooking','Harry','Potter','?'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
    firstName: 'Max',
    age: 13
}

const deep = {...person};
const shallow = person;

console.log('deep', deep === person);
console.log('deep2', deep == person);
console.log('shallow', shallow === person);
console.log('shallow', shallow == person);

const addfunc = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult+curValue;
    },0)
}

const addNumbers = addfunc(5,10,2,3.7) ;
console.log(addNumbers)

const [hobby1, hobby2,...remainingHObbies] = hobbies;
console.log(hobby1,hobby2,remainingHObbies)

const {age,firstName} = person;
console.log(age,firstName)

