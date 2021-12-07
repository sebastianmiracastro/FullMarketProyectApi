import { HeaderReg } from '../../UI/RegisterViewUI/HeaderContentRegister/HeaderContentRegister';
import { MainReg } from '../../UI/RegisterViewUI/MainContentRegister/MainContentRegister'
import './LayoutRegisterView.css';

export const Header = () => {
    return(
        <>
            <div className="Page">
                <HeaderReg />
                <MainReg />
            </div>
        </>
    )
}