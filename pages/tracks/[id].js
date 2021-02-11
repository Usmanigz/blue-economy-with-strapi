import Layout from "../../components/layout";
import { useRouter } from 'next/router';

function Track({data}) {

    // const router = useRouter();
    // const id = router.query.id

    return (
        <Layout>
            <div className="container">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <img src={data.image[0].url}/>
                
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {

    var id = context.query.id

    const res = await fetch(`https://demo-blueeconomy.herokuapp.com/tracks/${id}`)
    const data = await res.json()

    return {
        props:
        {
            data: data,
        }
    }
}

export default Track