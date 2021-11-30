import { HeaderLogin } from '../../UI/LoginViewUI/HeaderContentLoginPage/HeaderContentLogin'
import { Main } from '../../UI/LoginViewUI/MainContentLoginPage/MainContentLogin'
import './LayoutLoginView.css'

export const LoginPage = () => {
    return(
        <>
            <div className="Page">
                <HeaderLogin />
                <Main/>
            </div>
        </>
    )
}