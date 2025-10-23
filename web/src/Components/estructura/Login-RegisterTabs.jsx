import { useState } from 'react';
import { UserContext } from '../../Contexts/UserContext.jsx';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import TabButtons from '../tabs/TabButtons.jsx';
import TabContent from '../tabs/TabContent.jsx';
import LoginForm from '../forms/LoginForm.jsx';
import RegisterForm from '../forms/RegisterForm.jsx';


const loginData = [
    {name:'Login',component: LoginForm},
    {name:'Register',component: RegisterForm},
]

export default function LoginRegisterTabs() {

    // estado y funcionalidad de cambio de tabs
    const [activeTab, setActiveTab] = useState(0);
    
    

    // uso del contexto
    const { login, register } = useContext(UserContext)
    const navigate = useNavigate();

    return (
        <div className="main__container">
            <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} loginData={loginData}/>
            <TabContent activeTab={activeTab} loginData={loginData}/>
        </div>
    );
}