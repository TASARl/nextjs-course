import {useRouter} from 'next/router'

function ClientProjectsPage(){
    const router = useRouter()

    console.log(router.query)

    function loadProjectHandler(){
        // router.push('/clients/max/projec1') 
        // router.replace('/clients/max/projec') // bunula yaparsak geri tuşu çalışmaz
        router.push({
            pathname: '/clients/[id]/[projectid]',
            query: {id: "ere", projectid: "32"}
        })

    }

    return (
        <div>
            <h1>Client Projects Pages</h1>
            <button onClick={loadProjectHandler}>Load Project</button>
        </div>
    )
}

export default ClientProjectsPage;