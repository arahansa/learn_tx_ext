function errorPromise() : Promise<void> {
    return new Promise<void>
    (
        (   resolve: () => void,
            reject: () => void
        ) => {
            reject();
        }
    );
}

function callErrorPromise() {
    console.log(`calling errorPromise`);
    errorPromise().then(
        () => { console.log(`no error.`) }
    ).catch(
        () => { console.log(`an error occurred`)}
    );
}

callErrorPromise();

