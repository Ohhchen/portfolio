import { Card, CardHeader, CardBody, CardFooter, Text, Button } from '@chakra-ui/react'
import './styles/ProjectPages.css'
import image1 from '../Assets/Projects/SXG Twine Game/Modified Assets/Image 1.png'
import image2 from '../Assets/Projects/SXG Twine Game/Modified Assets/Image 2.png'
import image3 from '../Assets/Projects/SXG Twine Game/Modified Assets/Image 3.png'
import image4 from '../Assets/Projects/SXG Twine Game/Modified Assets/Image 4.png'
import image5 from '../Assets/Projects/SXG Twine Game/Modified Assets/Image 5.png'
import image6 from '../Assets/Projects/SXG Twine Game/Modified Assets/Image 6.png'

const SXGTwine = ({ backToHome, nextProject }) => {


    return (
        <div className='container'>
            <div className='about-projects'>
                <div className='projectTitle'>
                    <Text textStyle='h1' color='base.black'>SXG Twine Game</Text>
                </div>
                <div className='cards'>
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
                            <div className='targetAudience'>
                                <div className='targetAudience-tags'>
                                    <Text textStyle='p_bold' color='base.white'>Youth programs staffs</Text>
                                </div>
                                <div className='targetAudience-tags'>
                                    <Text textStyle='p_bold' color='base.white'>Youths of SXG</Text>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className='cards'>
                    <Card variant='projects'>
                        <CardHeader>
                            <Text textStyle='h3_card' color='blue.dark'>Tech Stack</Text>
                        </CardHeader>
                        <CardBody>
                            <div className='teckStack'>
                                <div className='teckStack-tags'>
                                    <Text textStyle='p_bold' color='bright.yellow'>Twine</Text>
                                </div>
                                <div className='teckStack-tags'>
                                    <Text textStyle='p_bold' color='bright.green'>Photoshop</Text>
                                </div>
                                <div className='teckStack-tags'>
                                    <Text textStyle='p_bold' color='base.beige'>CSS</Text>
                                </div>
                                <div className='teckStack-tags'>
                                    <Text textStyle='p_bold' color='bright.orange'>Google Maps API</Text>
                                </div>
                                <div className='teckStack-tags'>
                                    <Text textStyle='p_bold' color='bright.green'>Javascript</Text>
                                </div>
                                <div className='teckStack-tags'>
                                    <Text textStyle='p_bold' color='bright.orange'>Illustrator</Text>
                                </div>
                                <div className='teckStack-tags'>
                                    <Text textStyle='p_bold' color='base.beige'>HTML</Text>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card variant='projects'>
                        <CardHeader>
                            <Text textStyle='h3_card' color='blue.dark'>Solution</Text>
                        </CardHeader>
                        <CardBody>
                            <Text textStyle='p' color='blue.dark'>After researching and reviewing the CMS options available, we decided to build our own because each community’s protocol is different, therefore the context required with data will be different. In order to customize context to each community, we have to make the CMS scalable.</Text>
                        </CardBody>
                    </Card>
                    <Card variant='projects'>
                        <CardHeader>
                            <Text textStyle='h3_card' color='blue.dark'>Roles</Text>
                        </CardHeader>
                        <CardBody>
                            <div className='roles'>
                                <div className='roles-tags'>
                                    <Text textStyle='p_bold' color='blue.dark'>Frontend Developer</Text>
                                </div>
                                <div className='roles-tags'>
                                    <Text textStyle='p_bold' color='blue.dark'>Project Manager</Text>
                                </div>
                                <div className='roles-tags'>
                                    <Text textStyle='p_bold' color='blue.dark'>UX/UI Designer</Text>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
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

export default SXGTwine