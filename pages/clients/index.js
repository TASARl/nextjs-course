import Link from "next/link";

function ClientsPage() {
    const clients = [
        {id:"deni" , name:"deniz"},
        {id:"ere" , name:"eren"},
        {id:"ham" , name:"hamdi"},
    ];
    
    return (
        <div>
            <h1>Clients Pages</h1>
            <ul>
                {clients.map(client => <li key={client.id}>
                    <Link href={`/clients/${client.id}`}>{client.name}</Link>
                </li>)}

                {clients.map(client => <li key={client.id}>
                    <Link href={{
                        pathname: "/clients/[id]", 
                        query: {id: client.id}
                    }}>{client.name}</Link>
                </li>)}

                <li><Link href="/clients/den">Deniz</Link></li>
                <li><Link href="/clients/ere">Eren</Link></li>
            </ul>
        </div>
    )
}

export default ClientsPage;