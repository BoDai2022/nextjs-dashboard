export default async function Page(){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return <p>This is the customers Page</p>
}
