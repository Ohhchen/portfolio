import { Card, CardHeader, CardBody, Text, Button } from '@chakra-ui/react'
// import './styles/ProjectPages.css'
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import './styles/ProjectPages-Xsmall.css'
import './styles/ProjectPages-Small.css'
import './styles/ProjectPages-Medium.css'
import './styles/ProjectPages-Large.css'
import './styles/ProjectPages-Xlarge.css'
import image1 from '../Assets/Projects/City Poems Project/Modified Assets/Image 1.png'
import image2 from '../Assets/Projects/City Poems Project/Final/Image 1.png'
import image3 from '../Assets/Projects/City Poems Project/Final/Image 2.png'
import image4 from '../Assets/Projects/City Poems Project/Final/Image 3.png'
import image5 from '../Assets/Projects/City Poems Project/Final/Image 4.png'

const CityPoems = ({ backToHome, nextProject }) => {
    const [navBarExpanded, setNavBarExpanded] = useState(false)

    return (
        <>{navBarExpanded ?
            <div className="navbar-active">
                <motion.div whileHover={{ scale: 1.5 }}>
                    <IoCloseSharp size={'4em'} color={'#005FED'} onClick={() => setNavBarExpanded(false)} />
                </motion.div>
                <Button variant='link' onClick={() => { window.scrollTo(0, 0); setNavBarExpanded(false); }}>Home</Button>
                <Button variant='link' onClick={() => { window.scrollTo(0, 2840); setNavBarExpanded(false); }}>About</Button>
            </div>
            :
            <div className="navbar">
                <motion.div whileHover={{ scale: 1.5 }}>
                    <GiHamburgerMenu size={'3em'} color={'#005FED'} onClick={() => setNavBarExpanded(true)} />
                </motion.div>
            </div>
        }
        <div className='container'>
            <div className='about-projects'>
                <div className='projectTitle'>
                    <Text textStyle='h1' color='base.black'>City Poems</Text>
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
                            <Text textStyle='h3_card' color='blue.dark'>Solution</Text>
                        </CardHeader>
                        <CardBody>
                            <Text textStyle='p' color='blue.dark'>After researching and reviewing the CMS options available, we decided to build our own because each community’s protocol is different, therefore the context required with data will be different. In order to customize context to each community, we have to make the CMS scalable.</Text>
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
                                    <Text textStyle='p_bold' color='bright.green'>Unity</Text>
                                </div>
                                <div className='teckStack-tags'>
                                    <Text textStyle='p_bold' color='base.beige'>Animate (Adobe)</Text>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card variant='projects'>
                        <CardHeader>
                            <Text textStyle='h3_card' color='blue.dark'>Target Audience</Text>
                        </CardHeader>
                        <CardBody>
                            <div className='targetAudience'>
                                <div className='targetAudience-tags'>
                                    <Text textStyle='p_bold' color='base.white'>Poetry enthusiasts</Text>
                                </div>
                                <div className='targetAudience-tags'>
                                    <Text textStyle='p_bold' color='base.white'>Visitors of Vancouver</Text>
                                </div>
                                <div className='targetAudience-tags'>
                                    <Text textStyle='p_bold' color='base.white'>Residence of Vancouver</Text>
                                </div>
                                <div className='targetAudience-tags'>
                                    <Text textStyle='p_bold' color='base.white'>Adventurists</Text>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card variant='projects'>
                        <CardHeader>
                            <Text textStyle='h3_card' color='blue.dark'>Roles</Text>
                        </CardHeader>
                        <CardBody>
                            <div className='roles'>
                                <div className='roles-tags'>
                                    <Text textStyle='p_bold' color='blue.dark'>Project Manager</Text>
                                </div>
                                <div className='roles-tags'>
                                    <Text textStyle='p_bold' color='blue.dark'>UX/UI Designer</Text>
                                </div>
                                <div className='roles-tags'>
                                    <Text textStyle='p_bold' color='blue.dark'>Art Director</Text>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className='pictures-container'>
                <Text textStyle='h2' color='base.black'>The Finished Product</Text>
                <div className='pictures'>
                    <img src={image1} width='792' alt="" />
                    <img src={image2} height='792' alt="" />
                    <img src={image3} height='792' alt="" />
                    <img src={image4} height='792' alt="" />
                    <img src={image5} height='792' alt="" />
                </div>
            </div>
            <div className='nav-buttons'>
                <Button variant='secondary' onClick={() => { backToHome(); window.scrollTo(0,0); }}>Back to Home</Button>
                <Button variant='tiertiary' onClick={() => { nextProject(); window.scrollTo(0,0); }}>Next Project</Button>
            </div>
        </div></>
    )
}

export default CityPoems