function delayedPromiseWithParam() : Promise<string> {
    return new Promise<string>(
        (
            resolve: (str: string ) => void,
            reject: (str:string ) => void
        ) => {

            function afterWait() {
                resolve("resolved_within_promise");
            }
            setTimeout( afterWait , 2000 );
        }
    );
}

function callPromiseWithParam() {
    console.log(`calling delayedPromiseWithParam`);
    delayedPromiseWithParam().then( (message: string) => {
        console.log(`Promise.then() returned ${message} `);
    } );
}

callPromiseWithParam();
