import React, { Component } from 'react'

export default class testform extends Component {
  render() {
    return (
    <>
      <form action="">
<h3>New Account?</h3>
<div class="form-holder">
<span class="lnr lnr-user"></span>
<input type="text" class="form-control" placeholder="Username"/>
</div>
<div class="form-holder">
<span class="lnr lnr-phone-handset"></span>
<input type="text" class="form-control" placeholder="Phone Number"/>
</div>
<div class="form-holder">
<span class="lnr lnr-envelope"></span>
<input type="text" class="form-control" placeholder="Mail"/>
</div>
<div class="form-holder">
<span class="lnr lnr-lock"></span>
<input type="password" class="form-control" placeholder="Password"/>
</div>
<div class="form-holder">
<span class="lnr lnr-lock"></span>
<input type="password" class="form-control" placeholder="Confirm Password"/>
</div>
<button>
<span>Register</span>
</button>
</form>

       
    </>
    )
  }
}


