import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = ()=>{
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const logoutUser = ()=>{
    localStorage.clear();
    window.location.href="/login"
  }

  if(token && user.Usertype == "Admin")
  {
    var header = 
    <>
             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className = 'nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to='/admin' className='nav-links' onClick={closeMobileMenu}>
                    <i class="fas fa-user-cog admin"></i> Admin 
                    </Link>
                </li>
                
                <li className = 'nav-item'>
                    <Link to='#' className='nav-links' onClick={closeMobileMenu}>
                    <i class="fas fa-user-shield "></i>{user.fullname}
                    </Link>
                </li>
        
            <li>
            <button className="btn btn-primary w-100 mt-4" name="logout" type="button" onClick ={logoutUser}> Logout </button>
            </li>
          
            </ul>
          
    </>
  }
  else if(token && user.Usertype == "Customer")
  {
    var header =
    <>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className = 'nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>            
                <li className = 'nav-item'>
                    <Link to='#' className='nav-links' onClick={closeMobileMenu}>
                    <i class="fas fa-user-alt user"></i> {user.fullname}
                    </Link>
                </li>
        
            <li>
            <button className="btn btn-primary w-100 mt-4" name="logout" type="button" onClick ={logoutUser}> Logout </button>
            </li>
          
            </ul>
       
    </>
  }

  else{
    var header =
    <>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className = 'nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className ='nav-item'>
                    <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                        Log In
                    </Link>
                </li>
          
            </ul>
       
    </> 
  }


    return (
        <>
        <nav className='navbar fixed-top'>
           <div className='navbar-container'>
             <Link to='/' className='navbar-logo' onClick=
             {closeMobileMenu}>
                 BUS<i class="fas fa-bus"></i> TRACKER
            </Link>  
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
           
                {header}    
           
         </div>  
        </nav>
        </>
    )
}

export default Navbar;
