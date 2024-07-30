import { Card, CardHeader, CardBody, Text, Button } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import './styles/ProjectPages-Xsmall.css'
import './styles/ProjectPages-Small.css'
import './styles/ProjectPages-Medium.css'
import './styles/ProjectPages-Large.css'
import './styles/ProjectPages-Xlarge.css'
// import './styles/ProjectPages.css'
import image1 from '../Assets/Projects/CEDaR CMS/Modified Assets/Page 1.png'
import image2 from '../Assets/Projects/CEDaR CMS/Modified Assets/Page 2.png'
import image3 from '../Assets/Projects/CEDaR CMS/Modified Assets/Page 3.png'
import image4 from '../Assets/Projects/CEDaR CMS/Modified Assets/Page 4.png'
import image5 from '../Assets/Projects/CEDaR CMS/Modified Assets/Page 5.png'
import image6 from '../Assets/Projects/CEDaR CMS/Modified Assets/Page 6.png'

const CEDaRCMS = ({ backToHome, nextProject }) => {
    const [navBarExpanded, setNavBarExpanded] = useState(false)

    return (
        <>{navBarExpanded ?
            <motion.div className="navbar-active"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'spring', ease: 'linear' }}>
                <motion.div whileHover={{ scale: 1.5 }}>
                    <IoCloseSharp size={'4em'} color={'#005FED'} onClick={() => setNavBarExpanded(false)} />
                </motion.div>
                <Button variant='link' onClick={() => { window.scrollTo(0, 0); setNavBarExpanded(false); backToHome(); }}>Home</Button>
                <Button variant='link'>
                    <a href='#whoami' onClick={() => { setNavBarExpanded(false); backToHome(); }}>
                        About
                    </a>
                </Button>
            </motion.div>
            :
            <div className="navbar">
                <motion.div whileHover={{ scale: 1.5 }}>
                    <GiHamburgerMenu size={'3em'} color={'#005FED'} onClick={() => setNavBarExpanded(true)} />
                </motion.div>
            </div>
        }
            <div className='container'>
                <div className='about-projects'>
                    <motion.div
                        className='projectTitle'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 }}>
                        <Text textStyle='h1' color='base.black'>CEDaR CMS</Text>
                    </motion.div>
                    <motion.div
                        className='cards'
                        initial={{ opacity: 0, y: 500 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}>
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
                                <Text textStyle='p' color='blue.dark'>After researching and reviewing the CMS options available, we decided to build our own because each community’s protocol is different, therefore the context required with data will be different. In order to customize context to each community, we have made the CMS scalable to each project and community's needs.</Text>
                            </CardBody>
                        </Card>
                    </motion.div>
                    <motion.div
                        className='cards'
                        initial={{ opacity: 0, y: 500 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}>
                        <Card variant='projects'>
                            <CardHeader>
                                <Text textStyle='h3_card' color='blue.dark'>Tech Stack</Text>
                            </CardHeader>
                            <CardBody>
                                <div className='teckStack'>
                                    <div className='teckStack-tags'>
                                        <Text textStyle='p_bold' color='bright.yellow'>Drupal</Text>
                                    </div>
                                    <div className='teckStack-tags'>
                                        <Text textStyle='p_bold' color='bright.green'>React</Text>
                                    </div>
                                    <div className='teckStack-tags'>
                                        <Text textStyle='p_bold' color='base.beige'>CSS</Text>
                                    </div>
                                    <div className='teckStack-tags'>
                                        <Text textStyle='p_bold' color='bright.orange'>SQL</Text>
                                    </div>
                                    <div className='teckStack-tags'>
                                        <Text textStyle='p_bold' color='bright.green'>Javascript</Text>
                                    </div>
                                    <div className='teckStack-tags'>
                                        <Text textStyle='p_bold' color='bright.orange'>API</Text>
                                    </div>
                                    <div className='teckStack-tags'>
                                        <Text textStyle='p_bold' color='base.beige'>HTML</Text>
                                    </div>
                                    <div className='teckStack-tags'>
                                        <Text textStyle='p_bold' color='bright.yellow'>Chakra UI</Text>
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
                                        <Text textStyle='p_bold' color='base.white'>CEDaR staff</Text>
                                    </div>
                                    <div className='targetAudience-tags'>
                                        <Text textStyle='p_bold' color='base.white'>CEDaR student employees</Text>
                                    </div>
                                    <div className='targetAudience-tags'>
                                        <Text textStyle='p_bold' color='base.white'>Community collaborators</Text>
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
                                        <Text textStyle='p_bold' color='blue.dark'>Frontend Developer</Text>
                                    </div>
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
                    </motion.div>
                </div>
                <motion.div
                    className='pictures-container'
                    initial={{ opacity: 0, y: 500 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}>
                    <Text textStyle='h2' color='base.black'>The Finished Product</Text>
                    <div className='pictures'>
                        <img src={image1} height='792' alt="" />
                        <img src={image2} height='792' alt="" />
                        <img src={image3} height='792' alt="" />
                        <img src={image4} height='792' alt="" />
                        <img src={image5} height='792' alt="" />
                        <img src={image6} height='792' alt="" />
                    </div>
                </motion.div>
                <div className='nav-buttons'>
                    <Button variant='secondary' onClick={() => { backToHome(); window.scrollTo(0, 0); }}>Back to Home</Button>
                    <Button variant='tiertiary' onClick={() => { nextProject(); window.scrollTo(0, 0); }}>Next Project</Button>
                </div>
            </div ></>
    )
}

export default CEDaRCMS