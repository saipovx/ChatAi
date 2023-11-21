import { Link, useLocation } from 'react-router-dom'
import h from './HeaderAuth.module.scss'

export default function HeaderAuth () {

    const location = useLocation()

    return (
        <>
        
        <header className={h.headerAuth}>

                <nav className={h.headerAuth__nav}>

                    {location.pathname === '/' ? 

                    <Link to={'/Login'} className={h.headerAuth__nav__btn}>
                        Вход
                    </Link>

                    :

                    <Link to={'/'} className={h.headerAuth__nav__btn}>
                    Регистрация
                    </Link>                  
                    
                    }
                    
                </nav>

        </header>

        </>
    )

}