import React from 'react'
import { Card } from 'react-bootstrap'
import './Page3.css'
import imgCard1 from '../img/img-card1.jpg'
import imgCard2 from '../img/img-card2.png'
import imgCard3 from '../img/img-card3.jpg'
const Page3 = () => {
  return (
    <div>
        <div className='page3Container'>
           <h1 className='page3Head'>Upcoming Collection</h1>

         <div className='page3CardContainer'>
         <Card className='cardWrap'>
      <Card.Img  className ="cardImg" variant="top" src={imgCard1} />
      <Card.Body>
        <Card.Title className='cardTitle'>Custom Pendant </Card.Title>
        <Card.Text  className='card1-text'>
        <b>Floating Heart
        (Your Choice of Gem)</b><br></br>
        $350 and up
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='cardWrap'>
      <Card.Img  className ="cardImg" variant="top" src={imgCard2}/>
      <Card.Body>
        <Card.Title className='cardTitle'>Custom Earrings</Card.Title>
        <Card.Text className='card1-text'>
        
        <b>Three-Studded
        (Your Choice of Stones)</b><br></br>
        $500 and up
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='cardWrap'>
      <Card.Img variant="top"  className ="cardImg" src={imgCard3} />
      <Card.Body>
        <Card.Title  className='cardTitle'>Custom Charm Bracelet</Card.Title>
        <Card.Text className='cardText'>
        
       <b> Beaded Bracelet in Gold/Silver</b><br></br>
        $550 and up
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
  )
}

export default Page3
