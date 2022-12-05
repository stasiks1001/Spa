import React ,{useContext} from 'react'
import { Nav , Navbar  ,NavDropdown } from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';

function NavBar() {
  const { lang , setLang} = useContext(LanguageContext);
  console.log(lang);
  let aboutStr, loginStr, homeStr,contactStr, productStr, coffeeStr,teaStr ;
  switch(lang){
    case 'En':
      aboutStr = 'About';
      loginStr = 'Login';
      homeStr = 'Home';
      contactStr = 'Contact';
      productStr = 'Products';
      coffeeStr = 'Coffee';
      teaStr = 'Tea';
      break;
    case 'De':
      aboutStr = 'Über uns';
      loginStr = 'Anmelden';
      homeStr = 'Startseite'
      contactStr = 'kontaktiere uns';
      productStr = 'Produkte';
      coffeeStr = 'Kaffee';
      teaStr = 'Tee';
      
      break;
      case 'Tr':
        aboutStr = 'Über uns';
        loginStr = 'Anmelden';
        homeStr = 'Startseite'
        contactStr = 'kontaktiere uns';
        productStr = 'Produkte';
        coffeeStr = 'Kahve';
        teaStr = 'çay';
        
        break; ;

      case 'Ar':
      aboutStr = 'عننا';
      loginStr = 'تسجيل دخول';
      homeStr = 'الصفحة الرئيسية';
      contactStr = 'اتصل بنا';
      productStr = 'منتجات';
      coffeeStr = 'قهوة';
      teaStr = 'شاي';
      break; 


      default :
      aboutStr = 'About';
      loginStr = 'Login';
      homeStr = 'Home';
      contactStr = 'Contact';
      productStr = 'Products';
      coffeeStr = 'Coffee';
      teaStr = 'Tea';

   }
  // const about = lang === 'En' ? 'About' : 
  //  (lang === 'De' ? 'Über uns' :'در باره');
  //  const login = lang === 'En' ? 'Login' :'Anmelden'
 
    return (
        <Navbar bg="dark" variant="dark" sticky ="top" expand="sm" >
          <Navbar.Brand>
            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" width="45" />
             <span >myWebsite</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
           <Nav >
            <LinkContainer  to ="/home" >
              <Nav.Link > {homeStr}</Nav.Link>           
            </LinkContainer>

            <LinkContainer  to ="/about"   >
              <Nav.Link   >{aboutStr} </Nav.Link>           
            </LinkContainer>

            <NavDropdown title={productStr}>

            <LinkContainer to ="/products/tea" >
              <NavDropdown.Item> {teaStr}</NavDropdown.Item>           
            </LinkContainer>

            <LinkContainer to ="/products/coffee">
              <NavDropdown.Item > {coffeeStr}</NavDropdown.Item>      
            </LinkContainer>

            </NavDropdown>
            

            <LinkContainer to ="/contact" >
              <Nav.Link> {contactStr}</Nav.Link>           
            </LinkContainer>
            <LinkContainer to ="/login" >
              <Nav.Link> {loginStr}</Nav.Link>           
            </LinkContainer>
            <Navbar.Brand>
              <i className="flag us"  onClick ={ ()=> setLang('En')  }   />
              <i className="flag de" onClick ={ ()=> setLang('De')  }   />
              <i className="flag eg" onClick ={ ()=> setLang('Ar')  }   />
              <i className="flag ru" onClick ={ ()=> setLang('Ru')  }   />
              <i className="flag tr" onClick ={ ()=> setLang('Tr')  }   />

            </Navbar.Brand>
           </Nav>
          </Navbar.Collapse>

        </Navbar>
    )
}

export default NavBar
