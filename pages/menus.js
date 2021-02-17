import Layout from '../components/layout'
import { getWhyNextReasons } from "../lib/menus";

export default function IndexPage({ reasons }) {
  // console.log(reasons)
  return (
    <Layout>
      <section id="blog">
          <div className="container header">
              <div className="row" >
                  {reasons.map((menu, i) =>(
                      <div className={ menu[0] != "" ? "col-md-12" : "col-md-4" } key={i}>
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
  );
}

export async function getServerSideProps(context) {
  const reasons = await getWhyNextReasons();

  return {
    props: {
      reasons,
    }
  };
}

// export async function getStaticProps(context) {
//   const reasons = await getWhyNextReasons();

//   return {
//     props: {
//       reasons,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every second
//     revalidate: 1, // In seconds
//   };
// }
