import Layout from "../../components/layout";
import Link from 'next/link'
import { useRouter } from 'next/router';

const limit = 3

function Index({ data, page, count}) {

    const router = useRouter();

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

                                    {/* Content */}
                                    <nav data-aos="zoom-out-up" data-aos-delay="800" aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">Blog</li>
                                        </ol>
                                    </nav>

                                    <h1 class="mb-0 title effect-static-text">Tracks</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>   

            <div className="container header">
                <div className="row items">
                    {data.map((tracks, i) =>(
                        <div className="col-12 col-md-6 col-lg-4 item" key={i}>
                            <div className="card">
                                <img src={tracks.image[0].url} style={{height: '250px'}}/>
                                <h4>{tracks.title}</h4>
                                <p>{tracks.description.substring(0, 90) + "..."}</p>
                                <Link href={`tracks/${tracks.id}`}>
                                    <a className="btn outline-button">Read More</a>
                                </Link>
                                { }
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div class="row">
                    <div class="col-12">
                        <nav>
                            <ul class="pagination justify-content-center">
                                <li class="page-item">
                                    <button onClick={() => router.push(`/tracks/?page=${page - 1}`)} disabled={page <= 1} className="page-link">
                                        <i class="icon-arrow-left"></i>
                                    </button>
                                </li>

                                <li class="page-item active">
                                    <button className="page-link">{page}</button>
                                    
                                </li>

                                <li class="page-item">
                                    <button onClick={() => router.push(`/tracks/?page=${page + 1}`)} disabled={count <= (page*limit)  } className="page-link">
                                        <i class="icon-arrow-right"></i>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* End Pagination */}
            </div>
        </Layout>
    )
}


/* Getting Data from Server */
export async function getServerSideProps({ query: {page=1 } }) {

    var start = (page-1)*limit

    const res = await fetch(`https://demo-blueeconomy.herokuapp.com/tracks?_start=${start}&_limit=${limit}`)
    const data = await res.json()

    const resCount = await fetch(`https://demo-blueeconomy.herokuapp.com/tracks/count`)
    const count = await resCount.json()

    /* Returning data */
    return {
        props:
        {
            data: data,
            page: +page,
            count: count
        }
    }
}

export default Index