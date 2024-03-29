import React from 'react'
import {makeStyles,withStyles} from "@material-ui/core/styles"
import {TextField,Typography,Button,Grid,Box} from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import Nav from "./Nav"

const useStyles= makeStyles(theme=>({
    form:{
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        position:"absolute",
    },
    Button:{
        marginTop:"1rem",
        color:"tomato",
        borderColor:"tomato",
    }
}))

const InputField= withStyles({
    root:{
        "& label.Mui-focused": {
            color:"tomato",
        },
        "& label":{
            color:"tan",
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset":{
                borderColor:"tan"
            },
            "&:hover fieldSet":{
                borderColor:"tan",
            },
            "&.Mui-focused fieldSet":{
                borderColor:"tan"
            }
        }
    },
})(TextField);


const Contact = () => {

    const classes = useStyles()
    return (
        <Box component="div" style={{background:"#233",height:"100vh"}}>
            <Nav/>
           <Grid container justify="center">
            <Box component="form" className={classes.form}>
            {/* <Typography variant="h5" style={{color:"tomato",textAlign:"center",textTransform:"uppercase"}}>
              Contact me
            </Typography> */}
            {/* <InputField fullWidth={true} 
            label="Name" 
            variant="outlined" 
            inputProps={{style:{color:"white"}}} 
            margin="dense" 
            size="medium"/>
            <br/>
            <InputField fullWidth={true}
             label="Email" 
             variant="outlined"
            inputProps={{style:{color:"white"}}} 
             margin="dense" 
            size="medium"/>
            <br/>
            <InputField fullWidth={true} 
            label="Company Name" 
            variant="outlined"
            inputProps={{style:{color:"white"}}} 
             margin="dense" 
            size="medium"
            /> */}
            <br/>
            <Button className={classes.Button} variant="outlined"
            href="mailto:bhagyashree9402@gmail.com" 
             fullWidth={true} 
             endIcon={<SendIcon />}>
                contact me
            </Button>
            
            </Box>
           </Grid>
        </Box>
    )
}

export default Contact
