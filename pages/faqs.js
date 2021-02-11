import Layout from "../components/layout";

function FAQs({ data }) {
    console.log(data)
    return (
        <Layout>

            {/* Hero */}
            <section id="slider" class="hero p-0 odd featured">
                <div class="swiper-container no-slider animation slider-h-50 slider-h-auto">
                    <div class="swiper-wrapper">

                        {/* Item */}
                        <div class="swiper-slide slide-center">

                            {/* Media */}
                            <img src="assets/images/bg-wide.jpg" alt="Full Image" class="full-image" data-mask="80" />

                            <div class="slide-content row text-center">
                                <div class="col-12 mx-auto inner">
                                    <h1 class="mb-0 title effect-static-text">FAQs</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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