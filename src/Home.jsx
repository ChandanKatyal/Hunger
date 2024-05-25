import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { css } from "@emotion/react";
import PropagateLoader from 'react-spinners/PropagateLoader';
import './index.css';

function Home() {

    const [loading, setLoading] = useState(false);
    const override = css `
  display:block;
  border-color:red;
  margin-top:20%;
  `;
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])


    return ( < div className = "App" >

        {
            loading ? < PropagateLoader color = { "#3d2514" }
            loading = { loading }
            css = { override }
            size = { 40 }
            /> : < > 
            <Navbar/>
            <Header/>
            <Products/>
            <About/>
            <Contact/>
            <Footer/>
            </>
        }

        </div>
    );
}

export default Home;