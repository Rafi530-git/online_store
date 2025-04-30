import React from 'react'

const Contact = () => {
  return (
    <>
        <section className="why_section layout_padding">
         <div className="container">
            <div className="heading_container heading_center d-flex mb-4">
               <h2 className="d-inline">
                  Contact <span>Us</span>
               </h2>
            </div>
            <div className="row">
               <div className="col-lg-8 offset-lg-2">
                  <div className="full p-5" style={{backgroundColor:"#002c3e", borderRadius:"1.5rem"}}>
                     <form action="index.html">
                        <fieldset>
                           <input className='bg-transparent text-white rounded-lg' type="text" placeholder="Enter your full name" name="name" required />
                           <input className='bg-transparent text-white rounded-lg' type="email" placeholder="Enter your email address" name="email" required />
                           <input className='bg-transparent text-white rounded-lg' type="text" placeholder="Enter subject" name="subject" required />
                           <textarea className='bg-transparent text-white rounded-lg' placeholder="Enter your message" required></textarea>
                           <input type="submit"  value="Submit" style={{backgroundColor:"#f7444e"}} className='rounded-lg'/>
                        </fieldset>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Contact