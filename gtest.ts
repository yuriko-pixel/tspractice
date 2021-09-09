interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = 'Got not value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if(element.length > 1) {
        descriptionText = 'Got' + element.length + 'elements';
    }
    return [element,descriptionText];
}

// console.log(countAndDescribe('Hi there'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return 'Value: ' + obj[key];
}

// console.log(extractAndConvert({name: 'Max'}, 'name'))

function combine<T extends boolean | string | number>(obj: boolean | string | number,obj2: boolean | string | number) {
    let Arr = [];
    Arr.push(obj, obj2);
    return Arr;
}

// console.log(combine('Tekito', 3));

interface CourseGoal {
    title:string;
    description: StorageManager;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: StorageManager, date: Date):CourseGoal {
    let courseGoal : Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

// const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');

class DataStorage {
    private data: (string | number | boolean)[] = [];
    addItem(item: string | number | boolean ) {
        this.data.push(item);
    }
    removeItem(item: string | number | boolean) {
        if(this.data.indexOf(item) === -1) {
            return
        }
        this.data.splice(this.data.indexOf(item),1);
    }
    getItems() {
        return [...this.data];
    }
}

// const textStorage = new DataStorage();
// textStorage.addItem('Max');
// textStorage.addItem('Manu');
// textStorage.removeItem('Max');
// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>();

function Logger(logString: string) {
    return function(constructor: Function) {
        console.log('Logging...');
        console.log(constructor);
    }
}

@Logger('')
class Carousel {
    name = 'Max';
    constructor() {
        console.log('Creating person object...');
    }
}

function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
        console.log('Rendering template')
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if(hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h2>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...')
    }
}

// const pers = new Carousel();