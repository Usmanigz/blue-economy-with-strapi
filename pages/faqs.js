import Layout from "../components/layout";

function FAQs({ data }) {
    return (
        <Layout>

            {/* Hero */}
            <section id="slider" className="hero p-0 odd featured">
                <div className="swiper-container no-slider animation slider-h-50 slider-h-auto">
                    <div className="swiper-wrapper">

                        {/* Item */}
                        <div className="swiper-slide slide-center">

                            {/* Media */}
                            <img src="/assets/images/bg-wide.jpg" alt="Full Image" className="full-image" data-mask="80" />

                            <div className="slide-content row text-center">
                                <div className="col-12 mx-auto inner">
                                    <h1 className="mb-0 title effect-static-text">FAQs</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faq">
                <div className="container header">
                {data.map((faq, i) =>(
                    <div key={i}>
                        <h3>{faq.title}</h3>
                        <p className="pad15px">{faq.description}</p>
                        { }
                    </div> 
                ))}

            </div>

            </section>

            
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