
  import React from "react"
  import {Link} from "gatsby"
  
  const activeStyle = {
      color: '#FF6AB2',
    }
  
  
  const NavBar = ({ toggleNavbar, isActive }) => {    
      return(
          <div className={` navagation-wrap col-12 ${isActive ? 'mobile-wrap' : ''}`}> 
  
              <div id="main-nav-wrap">
                  <div className="logo-wrap">
                      <Link href="/">
                    <span style={{color: "black", fontWeight: "bold"}}>Wine</span><span className="primary-color">Catalog</span> </Link>
  
                  </div>
                  <div >
                      <div  className={` responsive-nav ${isActive ? 'mobile-nav' : ''}`}>
                          <ul className="nav">
                              <li><Link className="hack" activeStyle={activeStyle} to="/">Home</Link></li>
                              <li><Link to="/about/" activeStyle={activeStyle} className="hack">About</Link></li>
                              <li><Link to="/blog/" activeStyle={activeStyle} className="hack">Catalog</Link></li>
                              <li><Link to="/contact/" activeStyle={activeStyle} className="hack">Contact</Link></li>
                           
  
                            
                          </ul>
                      </div>
                   
                  </div>
                  <div id="hamburger-wrap">
                      <div  className={` burger-open ${isActive ? 'burger-close' : ''}`}
              
              data-target='nav-menu'
              onClick={toggleNavbar}
              aria-hidden={true}>
                          <span className="line line01"></span>
                          <span className="line line02"></span>
                          <span className="line line03"></span>
                      </div>
                  </div>
              </div>
          </div>
  
      )
  }
  export default NavBar
