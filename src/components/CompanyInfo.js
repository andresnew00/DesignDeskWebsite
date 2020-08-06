import React from 'react';
import InfoRectangle from './Information-rectangle';
import {ReactComponent as Conversation} from '../assets/online-conversation.svg';

export default function CompanyInfo() {
    return(
        <div className="CompanyInfo-wrapper">
            <InfoRectangle showButton={false}/>
            <div className="conversation-wrapper">
                <Conversation />
            </div>
        </div>
    );
}