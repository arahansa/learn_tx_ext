function auditLogDec(target: any,
                     methodName: string,
                     descriptor?: PropertyDescriptor ) {
    let originalFunction = target[methodName];
    let auditFunction = function() {
        console.log(`auditLogDec : overide of ${methodName} called `);
        originalFunction.call(this, arguments);
    }
    target[methodName] = auditFunction;
    return target[methodName]
}

class ClassWithAuditDec {
    @auditLogDec
    print(output: string) {
        console.log(`ClassWithMethodDec.print`
            + `(${output}) called.`);
    }
}
let auditClass = new ClassWithAuditDec();
auditClass.print("test");
auditClass.print("test1");
