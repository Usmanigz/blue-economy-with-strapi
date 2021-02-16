import Link from 'next/link'
import Layout from '../components/layout'

function Menus({ data }) {

    // console.log(data.values[0])

    return ([
        <Layout>
            <section id="blog">
                <div className="container header">
                    <div className="row" >
                        {data.values.map((menu, i) =>(
                            <div className={ menu[0] != "" ? "col-md-12" : "col-md-4" }>
                                { 
                                menu[0] != "" ? <div ><h4>{menu[0]}</h4></div> :
                                <div className="row">
                                    <div className="col-md-10">
                                        <h6>{menu[1]}</h6>
                                    </div>
                                    <div className="col-md-2" style={{marginTop: '1.5rem'}}>{menu[3]}</div>
                                    <div className="col-md-12"><p >{menu[2]}</p></div>
                                    
                                    
                                </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    ])
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

export default Menus