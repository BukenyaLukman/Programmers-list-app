
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()


    const paths = data.map(programmer => {
        return {
            params: {id: programmer.id.toString() }
        }
    })

    return {
       paths: paths,
       fallback: false,
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { programmer: data }
    }
}


const Details = ({programmer}) => {
    return (
        <div>
            <h1>{programmer.name}</h1>
            <p>{programmer.email}</p>
            <p>{programmer.website}</p>
            <p>{programmer.address.city}</p>
        </div>
    );
}

export default Details;