// 데커레이터 팩터리의 주안점
// 1. 데커레이터 함수는 자바스크립트 런타임이 자동으로 인자를 채워서 호출
// 2. 데커레이터 팩토리는 함수 정의를 반환해야함
// 3. 데커레이터 팩토리에서 정의한 인자는 데커레이터 함수 안에서 사용할 수 있다.

function decoratorFactory(name: string){
    return function (constructor: Function){
        console.log(`decorator function called with ${name}`)
    }
}

@decoratorFactory('testName')
class ClassWithDecoratorFactory{

}
