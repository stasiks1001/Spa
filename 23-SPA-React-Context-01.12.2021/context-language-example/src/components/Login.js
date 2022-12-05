import React, {useState , useContext} from 'react';
import LanguageContext from '../context/LanguageContext';


function Login() {
    const { lang } = useContext(LanguageContext)
//     const login = lang ==='En' ? "Login" : "Anmelden" ;
//    // const loginDe = "Anmelden"
//     const email = lang === 'En' ?  'Email' : 'Benutzer E-Mail';
//    // const emailDe= 'Benutzer E-Mail';
//     const password = lang ==='En' ? 'User Password' :  'Benutzer Kennwört';
//    // const passwordDe = 'Benutzer Kennwört';
//     const emailDesc = lang ==='En' ? "We'll never share your email with anyone else." : "Wir werden Ihre E-Mail niemals mit anderen teilen.";
//    // const emailDescDe = "Wir werden Ihre E-Mail niemals mit anderen teilen.";
let login,email,password,emailDesc;
     switch(lang){
       case 'En' :
           login = 'Login';
           email = 'Email';
           password = 'Password';
           emailDesc = "We'll never share your email with anyone else."

        //
           break;
       case 'De' :
        login = 'Anmelden';
        email = 'Benutzer E-Mail';
        password = 'Benutzer Kennwört';
        emailDesc = "Wir werden Ihre E-Mail niemals mit anderen teilen."
       //
       break;
       case 'Ar' :
        login =  'تسجيل دخول';
        email = 'البريد الإلكتروني';
        password = 'كلمة المرور';
        emailDesc = "لن نشارك بريدك الإلكتروني مع أي شخص."
        //
       break;
       default :
       login = 'Login';
       email = 'Email';
       password = 'Password';
       emailDesc = "We'll never share your email with anyone else."

       //
     }


   
    const onChange = (e)=>{
        
    }
    return (
  <div className="container">
     
    <div className="mb-5 mt-3">
        <h1 > {login}  </h1>
    </div>  
    
    <form >
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">{email}</label>
            <input    type="email" className="form-control" name="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">{emailDesc}</div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">{password}</label>
            <input   type="password" className="form-control" name ="password" />
        </div>
        
        <button type="submit" className="btn btn-primary">{login}</button>
    </form>
  </div>  
    )
}

export default Login