import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { borderRadius, height, lineHeight, maxHeight, padding } from '@mui/system';
import imageCan from './illustration-hero.svg'
import music_icon from './icon-music.svg'

function Content() {
  return (
    <div>
 <Card 
  
    style={{
      boxShadow:'0px 12px 25px -10px #163b8d',
      borderRadius:'20px',
      width: 450,
      margin:'50px auto 0 auto',
      height: 700,
    }}
  > 
    <CardMedia
    component="img"
    height="200px"
    src = {imageCan}
  />
  <div style={{paddingLeft:30 , paddingRight:30}}>
    <CardContent >
      <Typography variant="h5"  marginTop='40px' 
      fontWeight='800'
      fontFamily="unset">
        Order Summary
      </Typography>
      <Typography
        style={{
          marginTop:20,
          marginBottom: 12,

        }}
        color="textSecondary"
      >
        You can now listen to millions of songs, audiobooks and podcasts on any
        device anywhere you like! 
      </Typography>
      <div style={{ marginTop:20,width:'100%', height:100, backgroundColor:"#f8f9fe", borderRadius:10, position:'relative'}}>
            <img src={music_icon} style={{
              position:'absolute',
              top: 0,
              bottom: 0,
              margin: 'auto',
              left: 20
            }}/>
             <Typography variant="h7"  
             style={{position:'absolute', left: 90, top:30}}
              fontWeight='800'
               fontFamily="unset">
                 Annual Plans
      </Typography>
      <Typography variant="h7"  
             style={{position:'absolute', left: 90, top:55}}
              fontWeight='300'
               fontFamily="unset">
                 $49.55/year
      </Typography>
        <Button style={{position:'absolute',right:10, top: 35, color:"#382ae1", }} variant="text">change</Button>
      </div>
      <Button variant="contained" style={{borderRadius:10,backgroundColor:"#382ae1" ,position:'relative',marginTop:30, width:'100%', height:50, textTransform:'capitalize'}}>Proceed to Payment</Button>
      <Button variant="text" style={{borderRadius:10,color:"#163b8d", position:'relative',marginTop:10, width:'100%', height:50, textTransform:'capitalize'}}>Cancel Order</Button>
    </CardContent> 
 
  
    </div>
  </Card>
  
    </div>
)
}

export default Content
