import { Card, CardHeader, CardBody, Text, Button } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
// import './styles/ProjectPages.css'
import './styles/ProjectPages-Xsmall.css'
import './styles/ProjectPages-Small.css'
import './styles/ProjectPages-Medium.css'
import './styles/ProjectPages-Large.css'
import './styles/ProjectPages-Xlarge.css'
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
                        <Text textStyle='h1' color='base.black'>Hopeland System</Text>
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
                                <li style={{ 'list-style-type': 'none' }}>
                                    <Text textStyle='p' color='blue.dark'>1. Design and build a website for the client, Hopeland Systems.</Text>
                                </li>
                                <li style={{ 'list-style-type': 'none' }}>
                                    <Text textStyle='p' color='blue.dark'>2. Design the product, which is a desktop application of for the client, Hopeland Systems in collaboration with the student team responsible for building the product.</Text>
                                </li>
                            </CardBody>
                        </Card>
                        <Card variant='projects'>
                            <CardHeader>
                                <Text textStyle='h3_card' color='blue.dark'>Solution</Text>
                            </CardHeader>
                            <CardBody>
                                <li style={{ 'list-style-type': 'none' }}>
                                    <Text textStyle='p' color='blue.dark'>1. Create a mid-fidelity website that is built using Wordpress so the client can maintain, edit and add new content if needed in the future.</Text>
                                </li>
                                <li style={{ 'list-style-type': 'none' }}>
                                    <Text textStyle='p' color='blue.dark'>2.  Create a mid-fidelity interface for the product, where clients of Hopeland Systems can monitor their fire detectors with ease accessible on mobile and desktop devices.</Text>
                                </li>
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
                    </motion.div>
                </div>
                <motion.div
                    className='pictures-container'
                    initial={{ opacity: 0, y: 500 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}>
                    <Text textStyle='h2' color='base.black'>The Finished Product - Website</Text>
                    <div className='pictures'>
                        <img src={image1} height='792' alt="" />
                        <img src={image2} height='792' alt="" />
                        <img src={image3} height='792' alt="" />
                        <img src={image4} height='792' alt="" />
                        <img src={image5} height='792' alt="" />
                    </div>
                </motion.div>
                <motion.div
                    className='pictures-container'
                    initial={{ opacity: 0, y: 500 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}>
                    <Text textStyle='h2' color='base.black'>The Finished Product - Product</Text>
                    <div className='pictures'>
                        <img src={image6} height='792' alt="" />
                        <img src={image7} height='792' alt="" />
                        <img src={image8} height='792' alt="" />
                        <img src={image9} height='792' alt="" />
                        <img src={image10} height='792' alt="" />
                    </div>
                </motion.div>
                <div className='nav-buttons'>
                    <Button variant='secondary' onClick={() => { backToHome(); window.scrollTo(0, 0); }}>Back to Home</Button>
                    <Button variant='tiertiary' onClick={() => { nextProject(); window.scrollTo(0, 0); }} å>Next Project</Button>
                </div>
            </div></>
    )
}

export default HopelandSystems