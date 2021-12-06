import react from "react";
import { MainUserProfile } from '../../UI/UserProfileUI/MainUserProfile/MainUserProfile';
import { HeaderUsProfile } from '../../UI/UserProfileUI/HeaderUserProfile/HeaderUserProfile';

export const ContentUserProfile = () => {
    return(
        <>
        <div className="Page">
            <HeaderUsProfile/>
            <MainUserProfile/>
        </div>
    </>
    )
}