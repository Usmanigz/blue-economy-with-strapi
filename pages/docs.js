import Layout from '../components/layout'
import { google } from "googleapis";

export default function Index({rows}){

    console.log(rows)
    return (
        <Layout>
          <h5>See the response in console</h5>
          {
            <h1>{rows.title}</h1>
          }
          {/* {rows.map((element, i) => (
            <div key ={i}></div>

          ))} */}
        </Layout>
    );

}

export async function getServerSideProps() {

  try {
    const scopes = ["https://www.googleapis.com/auth/documents.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_DOCS_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_DOCS_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes
    );

    const docs = google.docs({version: 'v1', auth:jwt });

    const response = await docs.documents.get({
        documentId: process.env.DOCS_ID,
    });

    const rows = response.data
    console.log(rows)

    return {
        props: {
            rows
        }
    };

    if (rows.length) {

        return {
            props: {
                rows
            }
        };
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}