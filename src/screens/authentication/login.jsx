import { Box, Button , FormGroup, TextField, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { useEffect, useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../Firebase/Database"
import { useNavigate , NavLink  } from "react-router-dom"

export const Login =()=>{
    const [Email , CheckEmail] = useState()
    const [Password , CheckPassword] = useState()
    const navigation = useNavigate()
    const user = localStorage.getItem("uid")
    useEffect(()=>{
        if(user){
            navigation("/")
        }

    })
    const LoginHandler=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth , Email ,Password)
        .then((run)=>{
            localStorage.setItem("uid" , run.user.id)
            navigation('/')
            

        })
        .catch((error)=>{
            console.log("error" , error)
            alert(error)

        }
        )

     }
    return(

        <div>
            <Container sx={ {alignItems:"center" , padding:"auto" , display : "flex", height:"100vh", justifyContent:"center"}  }>
        
            <Box component="form" onSubmit={LoginHandler} sx={{width:"auto" , backgroundColor:" rgb(255, 255, 255)", padding:"5%" , borderRadius:"20px"}}>
                <Typography variant="h4" sx={{margin:"10px 0px"}}>Login</Typography>
            <TextField id="outlined-basic" label="Email Address" variant="outlined" type="email" onChange={(e)=>{
                CheckEmail(e.target.value)
            }}/>
            <br /><br />
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" onChange={(e)=>{CheckPassword(e.target.value)}}/>
            <Container sx={{a:{textDecoration:"none" , color: "black" , fontWeight:"600"}}}><Button component="button" type="submit" sx={{textDecoration:"none" , color: "black" , fontWeight:"600"}}>Sign In</Button> <Button><NavLink to="/signup">Sign Up</NavLink></Button></Container>
            </Box>
        </Container>
        </div>
    )
}

