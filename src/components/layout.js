import React from "react"
import NavBar from "./navbar" 
import facebook from "../img/facebook.svg"
import twitter from "../img/twitter.svg"





class Layout extends React.Component {

  constructor (props) {
    super(props)
    this.state = { isActive: false }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    const {  children } = this.props
   
    
    return (
      <div >    
        <header>  
                 
        <NavBar isActive={this.state.isActive} toggleNavbar={() => this.toggleNavbar()} />
                
          </header>
        <main className="contain">{children}</main>   

         
        <footer className="secondary-back">
         


          <a  href="https://formalflamingo.com">Formal Flamingo Web Design</a>
          © {new Date().getFullYear()}
        </footer>
      
      </div>
    )
  }
}

export default Layout
