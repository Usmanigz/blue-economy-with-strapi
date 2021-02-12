import Layout from "../../components/layout";
import { useRouter } from 'next/router';

function Track({data}) {

    // const router = useRouter();
    // const id = router.query.id

    return (
        <Layout>
            {/* Hero */}
            <section id="slider" className="hero p-0 odd featured">
                <div className="swiper-container no-slider animation slider-h-50 slider-h-auto">
                    <div className="swiper-wrapper">

                        {/* Item */}
                        <div className="swiper-slide slide-center">

                            {/* Media */}
                            <img src="assets/images/bg-wide.jpg" alt="Full Image" className="full-image" data-mask="80" />

                            <div className="slide-content row text-center">
                                <div className="col-12 mx-auto inner">
                                    <h1 className="mb-0 title effect-static-text">{data.title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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