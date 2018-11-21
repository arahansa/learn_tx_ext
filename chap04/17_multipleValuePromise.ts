

interface IPromiseMessage {
    message: string;
    id: number;
}

function promiseWithInterface() : Promise<IPromiseMessage> {
    return new Promise<IPromiseMessage> (
        (
            resolve: (message: IPromiseMessage) => void,
            reject: (message: IPromiseMessage) => void
        )  => {
            resolve({message: "test", id: 1});
        }
    );
}

promiseWithInterface().then(value=>console.log('value : ', value))
