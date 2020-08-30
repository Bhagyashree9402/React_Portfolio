import React from 'react'
import {makeStyles} from "@material-ui/styles"
import {BottomNavigation,BottomNavigationAction} from "@material-ui/core"
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles= makeStyles({
 root:{
     "& .MuiBottomNavigationAction-root":{
         minWidth:0,
         maxWidth:250,
     },
     "& .MuiSvgIcon-root":{
         fill:"tan",
         "&:hover":{
             fill:"tomato",
             fontSize:"1.8rem"
         }
     }
 }
})

const Footer = () => {
    const classes=useStyles();
    return (
       <BottomNavigation width="auto" style={{background:"#222"}}>
        <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            href="https://www.linkedin.com/in/bhagyashree-acharya-547036112/"
            icon={<LinkedInIcon/>}
          />

        <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            href="https://github.com/Bhagyashree9402"
            icon={<GitHubIcon/>}
          />

        <BottomNavigationAction
            className={classes.root}
            href="https://www.instagram.com/shree_sun_hj/"
            style={{padding:0}}
            icon={<InstagramIcon/>}
          />
    
       </BottomNavigation>
    )
}

export default Footer
