import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import './LoginSheet.css';
import React from "react";
import logo from "../../images/logo2.png";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function LoginSheet() {
    return (
        <div>
            <div id="container" >
                <div id="flexedBox"></div>
                <Sheet style={{ background: 'rgba(29, 25, 23, 0.7)'}}
                       sx={{
                           width: 1/2,
                           mx: 'auto', // margin left & right
                           my: 0, // margin top & botom
                           py: 30, // padding top & bottom
                           px: 4, // padding left & right
                           display: 'flex',
                           flexDirection: 'column',
                           gap: 5,
                       }}
                >
                    <div>
                        <div id="gridedBox">
                            <img id="logo" src={logo}/>
                        </div>
                        <Typography level="h4" component="h1" sx={{ color: 'rgba(171, 36, 36)', fontWeight: 'bold', textAlign: 'center' }}>
                            <span>Welcome!</span>
                        </Typography>
                        <Typography level="body2" component="h1" sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                            <span>Sign in to continue.</span>
                        </Typography>
                    </div>
                    <p></p>
                    <FormControl width="40">
                        <FormLabel sx={{alignSelf: 'center',color: 'white'}}>Email</FormLabel>
                        <Input
                            // html input attribute
                            error
                            id="outlined-error-helper-text"
                            sx={{border: '1px', width: 2/5, alignSelf: 'center', color: 'grey'}}
                            name="email"
                            type="email"
                            placeholder="jobFever@email.com"
                        />
                    </FormControl>
                    <FormControl id="inputLighter">
                        <FormLabel sx={{border: '1px', alignSelf: 'center', color: 'white'}}>Password</FormLabel>
                        <Input
                            error
                            id="outlined-error-helper-text"
                            sx={{width: 2/5, alignSelf: 'center', color: 'grey'}}
                            id="outlined-error"
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                        <Typography
                            endDecorator={<a style={{color: 'white'}} href="">Forgot a password?</a>}
                            fontSize="sm"
                            sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center', alignSelf: 'center'}}
                        ></Typography>
                    </FormControl>
                    <Button sx={{ ':hover': {
                    bgcolor: '#852222',
                    color: 'white'}, width: 1/4, alignSelf: 'center', mt: 1, backgroundColor: 'rgba(171, 36, 36)' /* margin top */ }}>
                    Log in
                    </Button>
                    <Typography
                    endDecorator={<a style={{color: 'rgba(171, 36, 36)' }} href="/sign-up">Sign up</a>}
                    fontSize="sm"
                    sx={{ alignSelf: 'center',color: 'white', fontWeight: 'bold', textAlign: 'center' }}
                    >
                    <span>Don't have an account?</span>
                    </Typography>
                    <Sheet id="flexedBox" style={{ background: 'transparent'}} sx={{mx: 'auto', display: 'flex', flexDirection: 'row', alignSelf: 'center', color: 'white'}}>
                        <div id="gridedBox">
                        <FacebookOutlinedIcon></FacebookOutlinedIcon>
                        <InstagramIcon></InstagramIcon>
                        <WhatsAppIcon></WhatsAppIcon>
                        </div>
                    </Sheet>
                    </Sheet>
                    </div>
                    </div>
                    );
                }

                    export default LoginSheet;