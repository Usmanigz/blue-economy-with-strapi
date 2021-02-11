import Link from "next/link";
import Layout from "../components/layout";

function About({ data }) {
    return (
        <Layout>
            {/* Hero */}
            <section id="slider" class="hero p-0 odd featured">
                <div class="swiper-container no-slider animation slider-h-50 slider-h-auto">
                    <div class="swiper-wrapper">
                        {/* Item 1 */}
                        <div class="swiper-slide slide-center">
                            {/* Media */}
                            <img src="/assets/images/bg-wide.jpg" alt="Full Image" class="full-image" data-mask="80" />
                            <div class="slide-content row text-center">
                                <div class="col-12 mx-auto inner">

                                    {/* Content */}
                                    <nav data-aos="zoom-out-up" data-aos-delay="800" aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">About Us</li>
                                        </ol>
                                    </nav>
                                    <h1 class="mb-0 title effect-static-text">About Us</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
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