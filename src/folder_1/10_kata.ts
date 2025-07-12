export function* helloWorldGenerator() {
    yield 'Hello';
    yield 'World';
}

export default function HelloWorld() {
    return Array.from(helloWorldGenerator()).join(' ');
}
