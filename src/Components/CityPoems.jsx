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
                        <Text textStyle='h1' color='base.black'>City Poems</Text>
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
                                <Text textStyle='p' color='blue.dark'>The City Poems project is an extension from Vancouver’s 2022 Poet Laureate, Fiona Tinwei Lam’s legacy project where she challenges local poets to write site-specific poems about Vancouver. We were tasked to make the poetry more interactive and immersive through storytelling. Therefore, we propose the idea of physically connecting the poems and the places that they are written about. </Text>
                            </CardBody>
                        </Card>
                        <Card variant='projects'>
                            <CardHeader>
                                <Text textStyle='h3_card' color='blue.dark'>Solution</Text>
                            </CardHeader>
                            <CardBody>
                                <Text textStyle='p' color='blue.dark'>In CEDaR’s version of the City Poems project, the poems from the contest are made available via a mobile app where users may access the audio, video, poem body and information about the author using GPS tracking for users to “unlock” the poem at the site it’s written about. </Text>
                            </CardBody>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 500 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='cards'>
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
                        <img src={image1} width='792' alt="" />
                        <img src={image2} height='792' alt="" />
                        <img src={image3} height='792' alt="" />
                        <img src={image4} height='792' alt="" />
                        <img src={image5} height='792' alt="" />
                    </div>
                </motion.div>
                <div className='nav-buttons'>
                    <Button variant='secondary' onClick={() => { backToHome(); window.scrollTo(0, 0); }}>Back to Home</Button>
                    <Button variant='tiertiary' onClick={() => { nextProject(); window.scrollTo(0, 0); }}>Next Project</Button>
                </div>
            </div ></>
    )
}

export default CityPoems