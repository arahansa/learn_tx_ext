function fnDelayedPromise(
    resolve: () => void,
    reject : () => void){
    function afterTimeout(){
        resolve();
    }
    setTimeout(afterTimeout, 2000)
}

function delayedResponsePromise() : Promise<void> {
    return new Promise<void>(
        fnDelayedPromise
    );
}

function delayedPromise() : Promise<void> {
    return new Promise<void>
    (
        (   resolve : () => void,
            reject: () => void
        ) => {
            function afterTimeout() {
                resolve();
            }

            setTimeout( afterTimeout, 1000);
        }
    );
}

function callDelayedPromise() {
    console.log(`calling delayedPromise`);
    delayedPromise().then(
        () => { console.log(`delayedPromise.then()`) }
    );
}

callDelayedPromise()
