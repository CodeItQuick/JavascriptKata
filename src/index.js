export function* helloWorldGenerator() {
    yield 'Hello';
    yield ' ';
    yield 'World';
}

export default function HelloWorld() {
    return Array.from(helloWorldGenerator()).join('');
}
