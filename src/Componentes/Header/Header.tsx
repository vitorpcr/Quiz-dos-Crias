import './Header.css'

export const Header = () =>{
    return(
        <header className='header'>
            <div className='menu-bar'>
               <div className='menu'>
                  <h1>Logo</h1>
                  <div className='nav-bar'>
                     <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#opcoes">Opções</a></li>
                        <li><a href="#login">Login</a></li>
                     </ul>
                  </div>
                   
                </div>
            </div>
            
            
        </header>
    )
}