import { Card, CardHeader, CardBody, CardFooter, Text, Button } from '@chakra-ui/react'
import './styles/ProjectPages.css'
import image1 from '../Assets/Projects/Hopeland Systems/Modified Assets/Website/Image 1.png'
import image2 from '../Assets/Projects/Hopeland Systems/Modified Assets/Website/Image 2.png'
import image3 from '../Assets/Projects/Hopeland Systems/Modified Assets/Website/Image 3.png'
import image4 from '../Assets/Projects/Hopeland Systems/Modified Assets/Website/Image 4.png'
import image5 from '../Assets/Projects/Hopeland Systems/Modified Assets/Website/MobileImages.png'
import image6 from '../Assets/Projects/Hopeland Systems/Modified Assets/Product/Image 1.png'
import image7 from '../Assets/Projects/Hopeland Systems/Modified Assets/Product/Image 2.png'
import image8 from '../Assets/Projects/Hopeland Systems/Modified Assets/Product/Image 3.png'
import image9 from '../Assets/Projects/Hopeland Systems/Modified Assets/Product/Image 4.png'
import image10 from '../Assets/Projects/Hopeland Systems/Modified Assets/Product/Image 5.png'

const HopelandSystems = ({ backToHome, nextProject }) => {


    return (
        <div className='container'>
            <div className='about-projects'>
                <div className='projectTitle'>
                    <Text textStyle='h1' color='base.black'>Hopeland System</Text>
                </div>
                <div className='cards'>
                    <Card variant='projects'>
                        <CardHeader>
                            <Text textStyle='h3_card' color='blue.dark'>Mission</Text>
                        </CardHeader>
                        <CardBody>
                            <li style={{ 'list-style-type': 'none' }}>
                                <Text textStyle='p' color='blue.dark'>1. Design and build a website for the client, Hopeland Systems</Text>
                            </li>
                            <li style={{ 'list-style-type': 'none' }}>
                                <Text textStyle='p' color='blue.dark'>2. Design the product, which is a desktop application of for the client, Hopeland Systems in collaboration with the student team responsible for building the product</Text>
                            </li>
                        </CardBody>
                    </Card>
                    <Card variant='projects'>
                        <CardHeader>
                            <Text textStyle='h3_card' color='blue.dark'>Target Audience</Text>
                        </CardHeader>
                        <CardBody>
                            <div className='targetAudience'>
                                <div className='targetAudience-tags'>
                                    <Text textStyle='p_bold' color='base.white'>Clients of Hopeland Systems</Text>
                                </div>
                                <div className='targetAudience-tags'>
                                    <Text textStyle='p_bold' color='base.white'>The general public who is curious about Hopeland Systems</Text>
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
                                    <Text textStyle='p_bold' color='bright.yellow'>Figma</Text>
                                </div>
                                <div className='teckStack-tags'>
                                    <Text textStyle='p_bold' color='bright.green'>Photoshop</Text>
                                </div>
                                <div className='teckStack-tags'>
                                    <Text textStyle='p_bold' color='base.beige'>Illustrator</Text>
                                </div>
                                <div className='teckStack-tags'>
                                    <Text textStyle='p_bold' color='bright.orange'>Animate (Adobe)</Text>
                                </div>
                                <div className='teckStack-tags'>
                                    <Text textStyle='p_bold' color='bright.green'>Webflow</Text>
                                </div>
                                <div className='teckStack-tags'>
                                    <Text textStyle='p_bold' color='bright.orange'>Wordpress</Text>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card variant='projects'>
                        <CardHeader>
                            <Text textStyle='h3_card' color='blue.dark'>Solution</Text>
                        </CardHeader>
                        <CardBody>
                            <Text textStyle='p' color='blue.dark'>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                    </Card>
                    <Card variant='projects'>
                        <CardHeader>
                            <Text textStyle='h3_card' color='blue.dark'>Roles</Text>
                        </CardHeader>
                        <CardBody>
                            <div className='roles'>
                                <div className='roles-tags'>
                                    <Text textStyle='p_bold' color='blue.dark'>Web Developer</Text>
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
                <Text textStyle='h2' color='base.black'>The Finished Product - Website</Text>
                <div className='pictures'>
                    <img src={image1} height='792' alt="" />
                    <img src={image2} height='792' alt="" />
                    <img src={image3} height='792' alt="" />
                    <img src={image4} height='792' alt="" />
                    <img src={image5} height='792' alt="" />
                </div>
            </div>
            <div className='pictures-container'>
                <Text textStyle='h2' color='base.black'>The Finished Product - Product</Text>
                <div className='pictures'>
                    <img src={image6} height='792' alt="" />
                    <img src={image7} height='792' alt="" />
                    <img src={image8} height='792' alt="" />
                    <img src={image9} height='792' alt="" />
                    <img src={image10} height='792' alt="" />
                </div>
            </div>
            <div className='nav-buttons'>
                <Button variant='secondary' onClick={backToHome}>Back to Home</Button>
                <Button variant='tiertiary' onClick={nextProject}>Next Project</Button>
            </div>
        </div>
    )
}

export default HopelandSystems