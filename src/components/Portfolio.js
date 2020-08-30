import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core"
import Nav from './Nav'
import project1 from "../img/recipe1.png"
import project2 from "../img/Screenshot (3).png"
import project3 from "../img/Screenshot (2).png"
import project4 from "../img/weather1.png"

const useStyles= makeStyles({
    mainContainer:{
        background:"#233",
        height:"100%"
    },
    cardContainer:{
        maxWidth:345,
        margin:"3rem",
        margin:"5rem auto "
    }
})

const Portfolio = () => {
    const classes= useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            <Nav/>
             <Grid container justify="center">

                 {/* Project 1 */}
                 <Grid item xs={12} sm={8} md={6}>
                 <Card className={classes.cardContainer}>
                     <CardActionArea>
                         <CardMedia 
                         component="img" 
                         alt="Project 1" 
                         height="140" 
                         image={project1}/>

                      <CardContent>
                          <Typography gutterBottom variant="h5">
                           Recipe App
                          </Typography>

                          <Typography variant="body2" color="textSecondary" component="p">
                          Project "Lulu's Recipe" began on May 4th, 2020 and was produced by Hedi,
                            Mykhas,
                            Napoleon, and I. The project is dedicated towards helping individuals search for, create,
                            and store recipes all in one application.
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Button size="small" color="primary" href="https://bhagyashree9402.github.io/Recipe-App/">
                              PROJECT
                          </Button>
                          <Button size="small" color="primary" href="https://github.com/Bhagyashree9402/Recipe-App.git">
                              GIT REPO
                          </Button>
                      </CardActions>
                     </CardActionArea>
                 </Card>
             </Grid>

              {/* Project 2 */}
              <Grid item xs={12} sm={8} md={6}>
                 <Card className={classes.cardContainer}>
                     <CardActionArea>
                         <CardMedia 
                         component="img" 
                         alt="Project 2" 
                         height="140" 
                         image={project2}/>

                      <CardContent>
                          <Typography gutterBottom variant="h5">
                            Pokemon Trade
                          </Typography>

                          <Typography variant="body2" color="textSecondary" component="p">
                            Project "Pokemon Trade" began on July 8th,2020 and was produced by Napoleon,
                            Kenny,Said and I. The project is meant for users to store cards into their own personal database
                            and allows users to search for Pokemon through API.
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Button size="small" color="primary" href="https://poketrade-heroku-app.herokuapp.com/home.html">
                              PROJECT
                          </Button>
                          <Button size="small" color="primary" href="https://github.com/Bhagyashree9402/Chat-Build-Around-P2.git">
                              GIT REPO
                          </Button>
                      </CardActions>
                     </CardActionArea>
                 </Card>
             </Grid>

              {/* Project 3 */}
              <Grid item xs={12} sm={8} md={6}>
                 <Card className={classes.cardContainer}>
                     <CardActionArea>
                         <CardMedia 
                         component="img" 
                         alt="Project 3" 
                         height="140" 
                         image={project3}/>

                      <CardContent>
                          <Typography gutterBottom variant="h5">
                           Employee Tracker
                          </Typography>

                          <Typography variant="body2" color="textSecondary" component="p">
                            To view and manage the departments, roles, and employees in a company to organize and plan business.
                            User can add and delete employee,role,department and also can update employee role and employee
                             manager based on the specific id enrolled to each employee.
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Button size="small" color="primary" href="https://drive.google.com/file/d/1AkQFxOivz01rA2xnXZjXbzbvsoiR41D4/view">
                              PROJECT
                          </Button>
                          <Button size="small" color="primary" href="https://github.com/Bhagyashree9402/Employee_Tracker.git">
                              GIT REPO
                          </Button>
                      </CardActions>
                     </CardActionArea>
                 </Card>
             </Grid>

              {/* Project 4 */}
              <Grid item xs={12} sm={8} md={6}>
                 <Card className={classes.cardContainer}>
                     <CardActionArea>
                         <CardMedia 
                         component="img" 
                         alt="Project 4" 
                         height="140" 
                         image={project4}/>

                      <CardContent>
                          <Typography gutterBottom variant="h5">
                           Weather Dashboard
                          </Typography>

                          <Typography variant="body2" color="textSecondary" component="p">
                            This project is to build a weather dashboard that will run in the browser
                            and
                            feature
                            dynamically updated HTML and CSS.Used the OpenWeather API to retrieve weather data for
                            cities
                            and localstorage to store any persistent data.
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Button size="small" color="primary" href="https://bhagyashree9402.github.io/sixth_assignment/">
                              PROJECT
                          </Button>
                          <Button size="small" color="primary" href="https://github.com/Bhagyashree9402/sixth_assignment.git">
                              GIT REPO
                          </Button>
                      </CardActions>
                     </CardActionArea>
                 </Card>
             </Grid>
             </Grid>
            
        </Box>
    )
}

export default Portfolio
