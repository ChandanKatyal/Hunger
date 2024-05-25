import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h1>Your Details!!!</h1>
        <form className='myForm' onSubmit={()=>{ alert('Hello!! Your booking is submitted'); }}>
            <input type='text' placeholder='Full Name' required/>
            <input type='email' placeholder='Type your E-mail' required/>
            <input type="tel" placeholder='Contact No...' pattern="[1-9]{1}[0-9]{9}" required/>
            <textarea placeholder='Write Here the number of members for whom you want to book a table or how many tables you require...' required></textarea>
            <input type='submit' value='SUBMIT'/>
        </form>
    </div>
  )
}

export default Contact