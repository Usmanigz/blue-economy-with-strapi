import Layout from "../components/layout";

function FAQs({ data }) {
    console.log(data)
    return (
        <Layout>
            <div className="container header">
                {data.map((faq, i) =>(
                    <div key={i}>
                        <h3>{faq.title}</h3>
                        <p className="pad15px">{faq.description}</p>
                        { }
                    </div> 
                ))}

            </div>
        </Layout>
    )
}

export async function getServerSideProps() {

    const res = await fetch(`https://demo-blueeconomy.herokuapp.com/fa-qs`)
    const data = await res.json()

    return {
        props:
        {
            data: data,
        }
    }
}

export default FAQs

// {data.data.map((article, i) =>(
//     <div key={i}>
//         <li>{article.title}</li>
//         <img src={article.image} />
//         {/* {id = id+1} */}
//     </div>
//     // 
    
// ))}