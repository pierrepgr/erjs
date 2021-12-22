export default function HelloWorld() {
    const name = 'Pierre'
    const title = <h1>Hello, { name }!</h1>

    return <div>
        { title }
    </div>
}