import Link from "next/link";
import Layout from "../components/layout";

function About({ data }) {
    return (
        <Layout>
                <div key={data.id}>
                    <div className="row">
                        <div className="col-sm-8 col-md-8">
                            <h1>{data[0].title}</h1>
                            <p>{data[0].body}</p>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <img src={data[0].image[0].url} />
                        </div>
                    </div>
                </div>
        </Layout>
    )
}

export async function getServerSideProps() {

    const res = await fetch(`https://demo-blueeconomy.herokuapp.com/abouts`)
    const data = await res.json()

    return {
        props:
        {
            data: data,
        }
    }
}

export default About