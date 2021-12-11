function RepositoryItem(props) {
    return (
        <>
            <h3>Id: {props.repo.id}</h3>
            <h3>Nome: {props.repo.name}</h3>
            <a href={props.repo.owner.url}>Url do repositório</a>
        </>
    )
}

export default RepositoryItem;