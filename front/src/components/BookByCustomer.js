import React from 'react'
import '../App.css';
import axios from 'axios'

class BookByCustomer extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.postFormData = this.postFormData.bind(this)
    this.state = {
      lastname: null,
      firstname: null,
      city: null,
      date: null,
    }
  }


  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  postFormData() {
    axios.post('http://localhost:8000/api/customers', {
    custom_firstname: this.state.firstname,
    custom_lastname: this.state.lastname,
    custom_city: this.state.city,
      showdate: this.state.showdate,

    })
    alert("Votre réservation a été créé! Incroyable n'est ce pas ?")
  }


  render() {
    return (
      <div className='formAdminContainer'>
          <h3 className="OurWilders">RESERVER</h3>
        <form onSubmit={this.handleSubmit}>
          <div className='form-example'>
            <label htmlFor='lastname'>Nom</label>
            <input
              type='text'
              name='lastname'
              id='lastname'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example'>
            <label htmlFor='firstname'>Prénom</label>
            <input
              type='text'
              name='firstname'
              id='firstname'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example'>
            <label htmlFor='city'>Ville</label>
            <input
              type='text'
              name='city'
              id='city'
              onChange={this.change}
              required
            />
          </div>
          <div className='form-example'>
            <label htmlFor='showdate'>Date de Show</label>
            <input
              type='text'
              name='zip'
              id='showdate'
              onChange={this.change}
              required
            />
          </div>
          <div className='inputForm'>
            <input className="homeButton"
              onClick={this.postFormData}
              type='submit'
              value='VALIDER >'
            />
          </div>
          </form>  
        </div>
    )
  }
}
export default BookByCustomer