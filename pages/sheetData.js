import Link from 'next/link'
import Layout from '../components/layout'

function Index({ data }) {

    // console.log(data.values[0])

    return (
        <Layout>
            <section id="blog">
                <div className="container header">
                    <div className="row">
                        {data.values.map((menu, i) =>(
                            <div className="col-md-4" key={i}>
                                {menu[0] != null ? <div ><h4>{menu[0]}</h4></div> : '' }
                                <h6>{menu[1]} &nbsp;&nbsp;&nbsp; {menu[3]}</h6>
                                <p>{menu[2]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}


/* Getting Data from Server */
export async function getServerSideProps() {

    const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1uGTREVTEnQi9XCmzRfF2YGIJp8XeK7TlB6LwC8Di1QA/values/A1:Z998?key=AIzaSyB6l5oIYjpHM5e91-j59TMVk9keLO3ef9A`)
    const data = await res.json()

    /* Returning data */
    return {
        props:
        {
            data: data,
        }
    }
}

export default Index