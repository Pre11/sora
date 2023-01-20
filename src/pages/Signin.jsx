import React from 'react'

function Signin() {
  return (
    <div>
       <div  className="auth-layout-wrap" style={{backgroundImage: "url(dist-assets/images/bg.jpg)"}}>
        <div  className="auth-content">
            <div  className="card o-hidden" style={{background: "rgb(255 255 255 / 65%) " , boxShadow: "rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset " , padding: "10px ", borderRadius: "10px"}}>
                <div  className="row">
                    <div  className="col-md-12">
                        <div  className="p-4">
                            <div  className="auth-logo text-center mb-4"><img src="dist-assets/images/Jindal-steel-power.png" alt="logo"/>
                            </div>
                            <h1  className="mb-3 text-center text-18"><strong>Sign in to JSPL Safety</strong></h1>
                            <form>
                                <div  className="form-group">
                                    <label htmlFor="user">Username</label>
                                    <input  className="form-control form-control-rounded" id="user" type="email" name="user"/>
                                </div>
                                <div  className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input  className="form-control form-control-rounded" id="password" type="password"/>
                                </div>
                                <a href="javascript:login();"  className="btn btn-rounded btn-primary btn-block mt-2">Sign In</a>
                            </form>
                            <div  className="mt-3 text-center"><a  className="text-muted" href="forgot.html">
                                    <u>Forgot Password?</u></a></div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signin
