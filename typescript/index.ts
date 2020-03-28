interface Istate4 {
    name: string
    age: number
    readonly phone: string
}

// 对于联合类型的函数，可以采用重载的方式
function getValue(name: string): string;
function getValue(name: number): number
function getValue(name: string | number): string | number {
    return name
}

const obj: Array<Istate4> = []
obj[0] = {
    name: '222',
    age: 22,
    phone: "33333"
}
function createArrt<T>(): Array<T> {
    return []
}