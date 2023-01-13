import Head from "next/head";
import Header from "../components/Header";
import Banner from "./Banner";
import ProductFeeds from "./ProductFeeds";

export default function Home({products}) {
    return (
        <div className="bg-gray-100">
            <Head>
                <title>Amazon 2.0</title>
            </Head>

            {/* Header */}
            <Header />
            {/* Header */}

            <main className="max-w-screen-xl mx-auto ">
                {/* Banner */}
                <Banner />
                {/* Banner */}

                <ProductFeeds products={products} />
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
  
   const products = await fetch("https://fakestoreapi.com/products").then((res) => {
    return  res.json()
   });
   
   return { 
    props: {
      products
    }
   }
   
};



