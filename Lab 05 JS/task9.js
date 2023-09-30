function objectKeysAndValues(obj) {
    if (Object.keys(obj).length === 0) {
        console.log('The object is empty.');
        return;
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (typeof value === 'object' && value !== null) {
                console.log(`${key}: (object)`);
                objectKeysAndValues(value);
            } else {
                console.log(`${key}: ${value}`);
            }
        }
    }
}
const myObject = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown'
    }
};
objectKeysAndValues(myObject);
