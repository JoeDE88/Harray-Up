import { Box } from "@mui/material";
import LoginRegisterTabs from "../Components/estructura/Login-RegisterTabs.jsx";
import { AppBar } from "@mui/material";
import Lemon from '../assets/icons/lemon.png'

export default function LoginPage() {
  return (
    <div className="login-box">
      <div className="login-title">
          {/* <Button component={RouterLink} to="/"> */}
          <img src={Lemon} style={{imageRendering:'pixelated'}} />
          {/* </Button> */}
          <h1 id="title"> Harray Up!</h1>
    </div>
    <div className="login-body">
        <LoginRegisterTabs />
    </div>
  </div>
  );
};