import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import profile2 from "../images/scuba-dive.jpg";

/*import img1 from "./images/surfing.jpg";
import img2 from "./images/Kayaking.jpg";
import img3 from "./images/paddleBoarding.jpg";
import img4 from "./images/Parasailing.jpg";
import img5 from "./images/Basilica_church.jpg";
import img6 from "./images/boothnathtemple.jpg";
import img7 from "./images/immaculateConceptionChurch.jpg";
import img8 from "./images/Marlikarjun_temple.JPG";
import img9 from "./images/Pokers1.jpg";
import img10 from "./images/Pool2.jpg";
import img11 from "./images/pool1.jpg";
import img12 from "./images/big6wals.jpg";*/
import { green } from '@material-ui/core/colors';

import "./activity.css"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
      <>

<div className="UserDetails">
                <i><b><h1> Goa Tour</h1></b></i>
           
            <div id="d0">
                <div id="d01">
                <button id="home" >HOME</button>{'  '}
                <button id="gallery" >GALLERY</button>{'  '}
                <button id="about us">ABOUT US</button>{'  '}
                <button id="signin">SIGNIN</button>{'  '}
                </div>
            </div>


            <div id="d4">
                <div id="d40">
                <button id="PersonalDetails">PERSONAL DETAILS</button>
                <button id="TravelDetails">TRAVEL DETAILS</button>
                <button id="AccDetail">ACCOMODATION DETAILS</button>
                <button id="ActivityDetails1">ACTIVITY DETAILS</button>
                </div>
            </div>




      <h1><i>Beach Acivities</i></h1>
      <br></br>
       <div class="row">
            <div class="col-3">
                    <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={'../images/surfing.jpg'}
                        title="Surfing"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Surfing
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Surfing is the sport of riding waves in an upright or prone position. Surfers catch the ocean, river, or man-made waves and glide across the surface.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                     <label>  Book your Activity:</label>  <input id="surfing" type="checkbox" height="500px" width="50px"/>
                    </CardActions>
                    </Card>

            </div>
            <div class="col-3">
                    <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={'../images/Kayaking.jpg'}
                        title=" KayaKing"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            KayaKing
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Kayaking is a fun activity that involves moving through water in a small water vessel with the aid of a double-bladed paddle.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                     <label>  Book your Activity:</label>  <input id="kayaking" type="checkbox" height="500px" width="50px"/>
                    </CardActions>
                    </Card>

            </div>
            <div class="col-3">
                    <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={'../images/paddleBoarding.jpg'}
                        title=" Paddle Boarding"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Paddle Boarding
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        It strengthens your core muscles, abs, legs, your back muscles and shoulders as well, thus accounting for improved strength and endurance.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <label>  Book your Activity:</label>  <input id="paddleboarding" type="checkbox" height="500px" width="50px"/>
                    </CardActions>
                    </Card>

            </div>
            <div class="col-3">
                        <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={'../images/Parasailing.jpg'}
                        title="Para Sailing"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Para Sailing
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Parasailing, also known as parascending, paraskiing or parakiting, is a recreational kiting activity where a person is towed behind a vehicle 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                
                    <label>  Book your Activity:</label>  <input id="parasailing" type="checkbox" height="500px" width="50px"/>
                    </CardActions>
                    </Card>
            </div>
        </div>
        <br></br><br></br><br></br>

        <h1><i>Temples and Churches  </i></h1>
      <br></br>

        <div class="row">
            <div class="col-3" >
                    <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={'../images/Basilica_church.jpg'}
                        title="Basillica Church"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Basillica Church
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        In Ancient Roman architecture, a basilica is a large public building with multiple functions, typically built alongside the town's forum. 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                
                    <label>  Book your Activity:</label>  <input id="barsilica" type="checkbox" height="500px" width="50px"/>
                    </CardActions>
                    </Card>

            </div>
            <div class="col-3">
                        <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={'../images/boothnathtemple.jpg'}
                        title=" Boothnath Temple"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Boothnath Temple
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        As per the ancient Sanscript inscription, this temple has stood on this spot for nearly 2500 years
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                
                <label>  Book your Activity:</label>  <input id="boothnath" type="checkbox" height="500px" width="50px"/>
                </CardActions>
                    </Card>
            </div>
            <div class="col-3">
                    <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={'./images/Marlikarjun_temple.JPG'}
                        title="Immaculate Conception Church"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Immaculate Conception Church
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        The Our Lady of the Immaculate Conception Church is located in Panjim, Goa, India. The Church conducts Mass every day in English and Konkani
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                
                    <label>  Book your Activity:</label>  <input id="immaculate" type="checkbox" height="500px" width="50px"/>
                    </CardActions>
                    </Card>

            </div>
            <div class="col-3">
                        <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={'../images/Marlikarjun_temple.JPG'}
                        title="  Marllikarjun Temple"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Marllikarjun Temple
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Its a beautiful temple with wood carvings and silver works. It's a Shivastal and Shaktistal. You can offer puja in this Shiv temple
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                
                <label>  Book your Activity:</label>  <input id="marlikarjun" type="checkbox" height="500px" width="50px"/>
                </CardActions>
                    </Card>
            </div>

            
        </div>
        <br></br><br></br><br></br>

        <h1><i>Casino Activities</i></h1>
      <br></br>

        <div class="row">

        <div class="col-3">
                        <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={img9}
                        title="Pokers"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Pokers
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        The main forms of Poker are Draw Poker and Stud Poker. In Draw Poker, all the cards are dealt face down to the players.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                
                <label>  Book your Activity:</label>  <input id="pokers" type="checkbox" height="500px" width="50px"/>
                </CardActions>
                    </Card>
            </div>

            <div class="col-3">
                        <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={img10}
                        title="    Pool"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Pool
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Pool is a classification of cue sports played on a table with six pockets along the rails , into which balls are deposited.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                
                <label>  Book your Activity:</label>  <input id="pool" type="checkbox" height="500px" width="50px"/>
                </CardActions>
                    </Card>
            </div>

            <div class="col-3">
                        <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={'../images/Pokers1.jpg'}
                        title="   Black Jack"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                           Black Jack 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Get a free blackjack strategy chart for any rules! Play our free blackjack strategy trainer game, learn card counting, or dive deep in our knowledge.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                
                <label>  Book your Activity:</label>  <input id="blackjack" type="checkbox" height="500px" width="50px"/>
                </CardActions>
                    </Card>
            </div>

            <div class="col-3">
                        <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={'../images/big6wals.jpg'}
                        title="Big 6 Walls"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Big 6 Walls
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        In each show one pair take on The Wall in three rounds that tests their general knowledge and trust in each other.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                
                <label>  Book your Activity:</label>  <input id="big6wall" type="checkbox" height="500px" width="50px"/>
                </CardActions>
                    </Card>
            </div>
    </div>

    

    <button id="submit"><b>Submit</b></button>

</div>
    </>

    
  );
}