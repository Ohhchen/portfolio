import { Card, CardHeader, CardBody, CardFooter, Text, Button } from '@chakra-ui/react'
import './styles/CEDaRCMS.css'
import image1 from '../Assets/Projects/CEDaR CMS/Modified Assets/Page 1.png'
import image2 from '../Assets/Projects/CEDaR CMS/Modified Assets/Page 2.png'
import image3 from '../Assets/Projects/CEDaR CMS/Modified Assets/Page 3.png'
import image4 from '../Assets/Projects/CEDaR CMS/Modified Assets/Page 4.png'
import image5 from '../Assets/Projects/CEDaR CMS/Modified Assets/Page 5.png'
import image6 from '../Assets/Projects/CEDaR CMS/Modified Assets/Page 6.png'

const CEDaRCMS = ({ backToHome, nextProject }) => {

    return (
        <div className='container'>
            <div className='about-projects'>
                <div>
                    <Text textStyle='h1' color='base.black'>CEDaR CMS</Text>
                </div>
                <Card variant='projects'>
                    <CardHeader>
                        <Text textStyle='h3_card' color='blue.dark'>Mission</Text>
                    </CardHeader>
                    <CardBody>
                        <Text textStyle='p' color='blue.dark'>As a research space, the projects CEDaR space takes on are with First Nations and Indigenous community, so we want to practice ethical standards of data lifecycle practices with the data that our community collaborators entrust us to work with by building a Content Management System (CMS) to maintain a healthy researcher to community collaborator work load balance.</Text>
                    </CardBody>
                </Card>
                <Card variant='projects'>
                    <CardHeader>
                        <Text textStyle='h3_card' color='blue.dark'>Target Audience</Text>
                    </CardHeader>
                    <CardBody>
                        <Text textStyle='p' color='blue.dark'>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                </Card>
                <Card variant='projects'>
                    <CardHeader>
                        <Text textStyle='h3_card' color='blue.dark'>Tech Stack</Text>
                    </CardHeader>
                    <CardBody>
                        <Text textStyle='p' color='blue.dark'>stack</Text>
                    </CardBody>
                </Card>
                <Card variant='projects'>
                    <CardHeader>
                        <Text textStyle='h3_card' color='blue.dark'>Tech Stack</Text>
                    </CardHeader>
                    <CardBody>
                        <Text textStyle='p' color='blue.dark'>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                </Card>
            </div>
            <div className='pictures-container'>
                <Text textStyle='h2' color='base.black'>The Finished Product</Text>
                <div className='pictures'>
                    <img src={image1} height='792' alt="" />
                    <img src={image2} height='792' alt="" />
                    <img src={image3} height='792' alt="" />
                    <img src={image4} height='792' alt="" />
                    <img src={image5} height='792' alt="" />
                    <img src={image6} height='792' alt="" />
                </div>
            </div>
            <div className='nav-buttons'>
                <Button variant='secondary' onClick={backToHome}>Back to Home</Button>
                <Button variant='tiertiary' onClick={nextProject}>Next Project</Button>
            </div>
        </div>
    )
}

export default CEDaRCMS