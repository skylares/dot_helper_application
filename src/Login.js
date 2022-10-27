import {
  PrimaryButton,
  SecondaryButton, 
  LoginBox,
  LoginContainer,
  LoginInput
} from "./StyledComponents";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Login({ setLoggedIn }) {
  return (
    <LoginContainer>
 
      <Box 
        component="img"
        display="flex"
        
        justifyContent="center"
        sx={{
          height: 299,
          width: 450, 
          mb: "25px",
          maxHeight: { xs: 300, md: 167 },
          maxWidth: { xs: 450, md: 400 },
        }}
        alt="The house from the offer."
        src="DotHelper-11.png"


      />
      <LoginBox>
        <Typography
          sx={{ color: "#666666", mb: "25px" }}
          variant="h4"
          gutterBottom
          component="div"
        >
          Log in
        </Typography>
        <FormControl sx={{ width: "80%" }}>
          <LoginInput
            id="email"
            placeholder="Email or Username"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
          <LoginInput placeholder="Password" id="password" />
          <PrimaryButton
            sx={{ margin: "10px 0" }}
            variant="contained"
            onClick={() => setLoggedIn(true)}
          >
            Log In  with Email
          </PrimaryButton>
          <SecondaryButton
              sx={{
                textTransform: "none",
                fontWeight: 400,
                fontSize: "12px",
                width: "100%",
                marginTop: "10px"
              }}
              onClick={() => setLoggedIn(true)}

            >
              
              Continue as Guest
            </SecondaryButton>
          
        </FormControl>
      </LoginBox>
    </LoginContainer>
  );
}

