import { Box, Container, TextField, Typography } from "@mui/material"
import { Button } from "@mui/material"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"

import { NavLink, useNavigate } from "react-router-dom"
import { auth, db } from "../../Firebase/Database"

export const SignUp =()=>{
    const[fullName , SetFullName] = useState("")
    const[Email , SetEmail] = useState("")
    const[Password , SetPassword] = useState("")
    const dbCollection = collection(db , "user")

    const navigation = useNavigate()

    const signupHandler=(e)=>{
       e.preventDefault()
       console.log("auth" , auth)
       createUserWithEmailAndPassword(auth , Email , Password)
       .then(async (run)=>{
        console.log(run , "run")
        await addDoc(dbCollection , obj)
        const obj ={
            fullName,
            Email
        }
        navigation('/login')


       })
       .catch((error)=>{
        console.log(error , "error")
        alert(error)
       })
    }

    return(
        <div>
            <Container sx={ {alignItems:"center" , padding:"auto" , display : "flex", height:"100vh", justifyContent:"center" }  }>
        
            <Box component="form" onSubmit={signupHandler} sx={{width:"auto" , backgroundColor:" rgb(255, 255, 255)", padding:"5%" , borderRadius:"20px"}}>
                <Typography variant="h4" sx={{margin:"10px 0px"}}>Signup</Typography>
                <TextField id="outlined-basic" label="Name" variant="outlined" type="text" onChange={(e)=>{
                SetFullName(e.target.value)
            }}/><br/><br/>
            <TextField id="outlined-basic" label="Email Address" variant="outlined" type="email" onChange={(e)=>{
                SetEmail(e.target.value)
            }}/>
            <br /><br />
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" onChange={(e)=>{SetPassword(e.target.value)}}/>
            <Container sx={{a:{textDecoration:"none" , color: "black" , fontWeight:"600"}}}><Button component="button" type="submit" sx={{textDecoration:"none" , color: "black" , fontWeight:"600"}}>Sign In</Button> <Button><NavLink to="/login">Sign Up</NavLink></Button></Container>
            </Box>
        </Container>
        </div>
    )
}

