import React from "react"
import Layout from "../components/layout"
import {Link} from "gatsby"

import "../style/main.scss"
import SEO from "../components/seo"



const AboutPage = () => {    
    return(
  
        <div>
           <Layout>
           <SEO title="About Us"
           description="catalog "
          />
            
<div className='hero-page'>
  <div className="flex">
    <div className="col-7" style={{margin: "0 auto"}}>    
      <h1 className="align-center">About Us</h1>     
      <h2 className="align-center">We are passionate about </h2> 
      <div className="btn-margin align-center">
      <Link className="primary-button" to="/contact/">Contact Us</Link>
      </div>
    </div>   
  </div>  
  </div>

 
 


            </Layout>  
        </div>
    )
}
export default AboutPage

