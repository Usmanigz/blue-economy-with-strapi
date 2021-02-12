import Link from "next/link";
import Layout from "../components/layout";

function About({ data }) {
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
                                    <h1 className="mb-0 title effect-static-text">About</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about">
                <div className="container header" key={data.id}>
                    <div className="row">
                        <div className="col-sm-8 col-md-8">
                            <h3>{data[0].title}</h3>
                            <p>{data[0].description}</p>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <img src={data[0].image[0].url} style={{marginTop: '150px'}} />
                        </div>
                    </div>
                </div>

            </section>
            
            
        </Layout>
    )
}

export async function getStaticProps() {

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