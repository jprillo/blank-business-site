import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../components/layout'
import SEO from "../components/seo"
import "../style/main.scss"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>

<SEO title="Contact Us"
           description="Are you ready to start making the most out of your online business. Let's talk about your new website. Melbourne FL."
          />
          
<div className='hero-page'>
  <div className="flex">
    <div className="col-7" style={{margin: "0 auto"}}>    
      <h1 className="align-center">Contact</h1>     
      <h2 className="align-center">Ready start maximizing your business online?</h2> 
    </div>  
    
     
  </div>  
  </div>

        <section className="flex light-back2">
        

          
            <div className="content col-6">
            <h3>Let's talk about it. </h3>
              <form
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    <p>Your name</p>
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                   <p> Email</p>
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    <p>Message</p>
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div >
                  <button className="form-btn" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="col-6">
        <h3>Located in Melbourne Florida</h3>
        <p>Dedicated to getting the most out of your online business.</p>
        
        </div>
          
        </section>
      </Layout>
    )
  }
}