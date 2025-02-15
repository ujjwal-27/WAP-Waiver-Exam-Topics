const walkDog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkedDog = true;

            if (walkedDog) {
                resolve('You have walked the dog.');

            } else {
                reject('You forgot to walk the dog');
            }

        }, 2000);
    });
}

const doLaundry = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const didLaundry = true;

            if (didLaundry) {
                resolve('You have done the laundry.');

            } else {
                reject('You forgot to do the laundry');
            }

        }, 1500);
    });
}

const cleanRoom = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanedRoom = true;

            if (cleanedRoom) {
                resolve('You have cleaned the room.');

            } else {
                reject('You forgot to clean the room');
            }

        }, 500);
    });
}


walkDog()
    .then((message) => {
        console.log(message);
        return doLaundry();
    })
    .then((message) => {
        console.log(message);
        return cleanRoom();
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
