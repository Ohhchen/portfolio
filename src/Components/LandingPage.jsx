import { Text, Button, Box, List, ListItem } from "@chakra-ui/react"
import './styles/LandingPage.css'
import { useState } from "react"
import { motion } from "framer-motion"
import Skills from './Skills'
import landingPortrait from '../Assets/Landing portrait/PortraitWbackground.png'
import aboutPortrait from '../Assets/About Portrait/PortraitWBackground.png'
import footerPortrait from '../Assets/Footer Portrait/PortraitWBackground.png'
import g1 from '../Assets/Digital Project Background/GRADIENT_009.jpg'
import g2 from '../Assets/Digital Project Background/GRADIENT_010.jpg'
import g3 from '../Assets/Digital Project Background/GRADIENT_011.jpg'
import g4 from '../Assets/Digital Project Background/GRADIENT_012.jpg'

const LandingPage = ({ }) => {
    const [projectManagement, setProjectManagement] = useState(false)
    const [design, setDesign] = useState(false)
    const [webDev, setWebDev] = useState(false)
    const [branding, setBranding] = useState(false)
    const [illustration, setIllustration] = useState(false)
    const [dataAnalysis, setDataAnalysis] = useState(false)
    const [allSkills, setAllSkills] = useState(true)
    const [hardSkills, setHardSkills] = useState(false)
    const [softSkills, setSoftSkills] = useState(false)
    const [designSkills, setDesignSkills] = useState(false)
    const [devSkills, setDevSkills] = useState(false)
    const [hardSkillsList, setHardSkillsList] = useState()
    const [softSkillsList, setSoftSkillsList] = useState()
    const [designSkillsList, setDesignSkillsList] = useState()
    const [devSkillsList, setDevSkillsList] = useState()

    const cardDetails = {
        0: {
            title: "Project Manager"
        },
        1: {
            title: "Web Developer"
        },
        2: {
            title: "Designer"
        },
        3: {
            title: "Project Manager"
        },
        4: {
            title: "Web Developer"
        },
        5: {
            title: "Designer"
        },
        6: {
            title: "Project Manager"
        },
        7: {
            title: "Web Developer"
        },
        8: {
            title: "Designer"
        },
        9: {
            title: "Project Manager"
        },
        10: {
            title: "Web Developer"
        },
    }

    const filterSkills = (filter) => {
        switch (filter) {
            case 'hardSkills':
                let hardArray = []
                for (let object of Skills) {
                    if (object.tag.find((skill) => skill == 'hardSkills')) {
                        hardArray.push(object)
                    }
                }
                setHardSkillsList(hardArray)
                break;
            case 'softSkills':
                let softArray = []
                for (let object of Skills) {
                    if (object.tag.find((skill) => skill == 'softSkills')) {
                        softArray.push(object)
                    }
                }
                setSoftSkillsList(softArray)
                break;
            case 'design':
                let designArray = []
                for (let object of Skills) {
                    if (object.tag.find((skill) => skill == 'design')) {
                        designArray.push(object)
                    }
                }
                setDesignSkillsList(designArray)
                break;
            case 'dev':
                let devArray = []
                for (let object of Skills) {
                    if (object.tag.find((skill) => skill == 'dev')) {
                        devArray.push(object)
                    }
                }
                setDevSkillsList(devArray)
                break;
        }
    }

    return (
        <Box bg='base.white'>
            <div className="hero">
                <div className="hero-top">
                    <div>
                        <img src={landingPortrait} style={{ width: '900px' }} />
                    </div>
                    <div className="hero-top">
                        <Text textStyle='h1' color='base.white'>Olivia Chen</Text>
                    </div>
                </div>
                <div className="carousel-container">
                    <div className="carousel-track">
                        <div className="carousel-card">
                            {Object.keys(cardDetails).map((detailKey) => {
                                return (
                                    <Text textStyle='h4_carousel' color='base.white'>{cardDetails[detailKey].title}</Text>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="whoami">
                <div className="whoami-left">
                    <div>
                        <Text textStyle='h2' color='blue.dark'>Who am I?</Text>
                    </div>
                    <div>
                        <Text textStyle='p' color='blue.dark'>A design enthusiast. A team leader, based in Vancouver, BC Canada</Text>
                    </div>
                    <div>
                        <Text textStyle='p' color='blue.dark'>I am most experienced as a Project Manager but I worked mostly in small teams where I need to help out with different aspects of the project, so I also have UX/UI designa and web develpment experience.</Text>
                    </div>
                </div>
                <div className="whoami-right">
                    <img src={aboutPortrait} />
                </div>
            </div>
            <div className="whatdoido">
                <Box bg='blue.dark'>
                    <div className="whatdoido-left">
                        <div>
                            <Text textStyle='h2' color='base.white'>What do I do?</Text>
                            <Text textStyle='p_s' color='base.white'>Start by selecting one of the domains below</Text>
                        </div>
                        <div>
                            <div className="whatdoido-examples">
                                <div>
                                    <Text textStyle='h4' color='base.white'>Here are some examples of what I do</Text>
                                </div>
                                <div className="whatdoido-examples-buttons">
                                    <Button variant={projectManagement ? 'primaryClicked' : 'primary'}
                                        onClick={() => {
                                            setProjectManagement(true);
                                            setDesign(false);
                                            setWebDev(false);
                                            setBranding(false);
                                        }}>Project management</Button>
                                    <Button variant={design ? 'primaryClicked' : 'primary'}
                                        onClick={() => {
                                            setDesign(true);
                                            setProjectManagement(false);
                                            setWebDev(false);
                                            setBranding(false);
                                        }}>UX/UI design</Button>
                                    <Button variant={webDev ? 'primaryClicked' : 'primary'}
                                        onClick={() => {
                                            setWebDev(true);
                                            setDesign(false);
                                            setProjectManagement(false);
                                            setBranding(false);
                                        }}>Web development</Button>
                                    <Button variant={branding ? 'primaryClicked' : 'primary'}
                                        onClick={() => {
                                            setBranding(true);
                                            setWebDev(false);
                                            setDesign(false);
                                            setProjectManagement(false);
                                        }}>Branding</Button>
                                </div>
                            </div>
                        </div>
                        <div className="whatdoido-examples">
                            <div>
                                <Text textStyle='h4' color='base.white'>Here are some examples of what I would like to do more of</Text>
                            </div>
                            <div className="whatdoido-examples-buttons">
                                <Button variant='primary'>Illustration</Button>
                                <Button variant='primary'>Data analysis</Button>
                            </div>
                        </div>
                    </div>
                </Box>
                <div className="whatdoido-right">
                    {projectManagement &&
                        <div className="whatdoido-right-selection">
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <Button variant='link'>CEDaR CMS</Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <Button variant='link'>City Poems Project</Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <Button variant='link'>SXG Twine Game</Button>
                            </motion.div>
                        </div>
                    }
                    {design &&
                        <div className="whatdoido-right-selection">
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <Button variant='link'>CEDaR CMS</Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <Button variant='link'>City Poems Project</Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <Button variant='link'>Hopeland Systems</Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <Button variant='link'>SXG Twine Game</Button>
                            </motion.div>
                        </div>
                    }
                    {webDev &&
                        <div className="whatdoido-right-selection">
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <Button variant='link'>CEDaR CMS</Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <Button variant='link'>Smímeyale Socials</Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <Button variant='link'>Hopeland Systems</Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <Button variant='link'>SXG Twine Game</Button>
                            </motion.div>
                        </div>
                    }
                    {branding &&
                        <div className="whatdoido-right-selection">
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <Button variant='link'>Smímeyale Socials</Button>
                            </motion.div>
                        </div>
                    }
                </div>
            </div>
            <div className="skills">
                <div className="skills-top">
                    <div>
                        <Text textStyle='h2' color='blue.dark'>Skills</Text>
                    </div>
                    <div className="skills-top-buttons">
                        <Button variant={hardSkills ? 'secondaryClicked' : 'secondary'}
                            onClick={() => {
                                filterSkills('hardSkills');
                                setHardSkills(true);
                                setDesignSkills(false);
                                setSoftSkills(false);
                                setDevSkills(false);
                                setAllSkills(false);
                            }}>Hard Skills</Button>
                        <Button variant={softSkills ? 'secondaryClicked' : 'secondary'}
                            onClick={() => {
                                filterSkills('softSkills');
                                setHardSkills(false);
                                setDesignSkills(false);
                                setSoftSkills(true);
                                setDevSkills(false);
                                setAllSkills(false);
                            }}>Soft Skills</Button>
                        <Button variant={designSkills ? 'secondaryClicked' : 'secondary'}
                            onClick={() => {
                                filterSkills('design');
                                setHardSkills(false);
                                setDesignSkills(true);
                                setSoftSkills(false);
                                setDevSkills(false);
                                setAllSkills(false);
                            }}>Design</Button>
                        <Button variant={devSkills ? 'secondaryClicked' : 'secondary'}
                            onClick={() => {
                                filterSkills('dev');
                                setHardSkills(false);
                                setDesignSkills(false);
                                setSoftSkills(false);
                                setDevSkills(true);
                                setAllSkills(false);
                            }}>Development</Button>
                        <Button variant={'tiertiary'}
                            onClick={() => {
                                setHardSkills(false);
                                setDesignSkills(false);
                                setSoftSkills(false);
                                setDevSkills(false);
                                setAllSkills(true);
                            }}>Clear Filters</Button>
                    </div>
                </div>
                <div className="skills-bottom">
                    {allSkills &&
                        <div className="skills-bottom-container">
                            <List variant='skills'>
                                <div style={{ padding: '10px', background: '#005FED' }}>
                                    <Text textStyle='p_bold' color='base.white'>I would say I'm excellent with: </Text>
                                </div>
                                {Skills.map((skill, index) =>
                                    skill.size == 'large' &&
                                    <ListItem key={index}>
                                        <div className="text-stretcher">
                                            <Text textStyle='skills' color='bright.orange'>{skill.text}</Text>
                                        </div>
                                    </ListItem>
                                )}
                            </List>
                            <List variant='skills'>
                                <div style={{ padding: '10px', background: '#005FED' }}>
                                    <Text textStyle='p_bold' color='base.white'>I would say I'm great with:</Text>
                                </div>
                                {Skills.map((skill, index) =>
                                    skill.size == 'mid' &&
                                    <ListItem key={index}>
                                        <div className="text-stretcher">
                                            <Text textStyle='skills' color='bright.green'>{skill.text}</Text>
                                        </div>
                                    </ListItem>
                                )}
                            </List>
                            <List variant='skills'>
                                <div style={{ padding: '10px', background: '#005FED' }}>
                                    <Text textStyle='p_bold' color='base.white'>I would say I know enough of:</Text>
                                </div>
                                {Skills.map((skill, index) =>
                                    skill.size == 'small' &&
                                    <ListItem key={index}>
                                        <div className="text-stretcher">
                                            <Text textStyle='skills' color='bright.yellow'>{skill.text}</Text>
                                        </div>
                                    </ListItem>
                                )}
                            </List>
                        </div>
                    }
                    {hardSkills &&
                        <div className="skills-bottom-container">
                            <List variant='skills'>
                                <motion.div style={{ padding: '10px', background: '#005FED' }}>
                                    <Text textStyle='p_bold' color='base.white'>I would say I'm excellent with: </Text>
                                </motion.div>
                                {hardSkillsList.map((skill, index) =>
                                    skill.size == 'large' &&
                                    <ListItem key={index}>
                                        <div className="text-stretcher">
                                            <Text textStyle='skills' color='bright.orange'>{skill.text}</Text>
                                        </div>
                                    </ListItem>
                                )}
                            </List>
                            <List variant='skills'>
                                <div style={{ padding: '10px', background: '#005FED' }}>
                                    <Text textStyle='p_bold' color='base.white'>I would say I'm great with:</Text>
                                </div>
                                {hardSkillsList.map((skill, index) =>
                                    skill.size == 'mid' &&
                                    <ListItem key={index}>
                                        <div className="text-stretcher">
                                            <Text textStyle='skills' color='bright.green'>{skill.text}</Text>
                                        </div>
                                    </ListItem>
                                )}
                            </List>
                            <List variant='skills'>
                                <div style={{ padding: '10px', background: '#005FED' }}>
                                    <Text textStyle='p_bold' color='base.white'>I would say I know enough of:</Text>
                                </div>
                                {hardSkillsList.map((skill, index) =>
                                    skill.size == 'small' &&
                                    <ListItem key={index}>
                                        <div className="text-stretcher">
                                            <Text textStyle='skills' color='bright.yellow'>{skill.text}</Text>
                                        </div>
                                    </ListItem>
                                )}
                            </List>
                        </div>
                    }
                    {softSkills &&
                        <div className="skills-bottom-container">
                            <List variant='skills'>
                                <div style={{ padding: '10px', background: '#005FED' }}>
                                    <Text textStyle='p_bold' color='base.white'>I would say I'm excellent with: </Text>
                                </div>
                                {softSkillsList.map((skill, index) =>
                                    skill.size == 'large' &&
                                    <ListItem key={index}>
                                        <div className="text-stretcher">
                                            <Text textStyle='skills' color='bright.orange'>{skill.text}</Text>
                                        </div>
                                    </ListItem>
                                )}
                            </List>
                            <List variant='skills'>
                                <div style={{ padding: '10px', background: '#005FED' }}>
                                    <Text textStyle='p_bold' color='base.white'>I would say I'm great with:</Text>
                                </div>
                                {softSkillsList.map((skill, index) =>
                                    skill.size == 'mid' &&
                                    <ListItem key={index}>
                                        <div className="text-stretcher">
                                            <Text textStyle='skills' color='bright.green'>{skill.text}</Text>
                                        </div>
                                    </ListItem>
                                )}
                            </List>
                        </div>
                    }
                    {designSkills &&
                        <div className="skills-bottom-container">
                            <List variant='skills'>
                                <div style={{ padding: '10px', background: '#005FED' }}>
                                    <Text textStyle='p_bold' color='base.white'>I would say I'm excellent with: </Text>
                                </div>
                                {designSkillsList.map((skill, index) =>
                                    skill.size == 'large' &&
                                    <ListItem key={index}>
                                        <div className="text-stretcher">
                                            <Text textStyle='skills' color='bright.orange'>{skill.text}</Text>
                                        </div>
                                    </ListItem>
                                )}
                            </List>
                            <List variant='skills'>
                                <div style={{ padding: '10px', background: '#005FED' }}>
                                    <Text textStyle='p_bold' color='base.white'>I would say I'm great with:</Text>
                                </div>
                                {designSkillsList.map((skill, index) =>
                                    skill.size == 'mid' &&
                                    <ListItem key={index}>
                                        <div className="text-stretcher">
                                            <Text textStyle='skills' color='bright.green'>{skill.text}</Text>
                                        </div>
                                    </ListItem>
                                )}
                            </List>
                            <List variant='skills'>
                                <div style={{ padding: '10px', background: '#005FED' }}>
                                    <Text textStyle='p_bold' color='base.white'>I would say I know enough of:</Text>
                                </div>
                                {designSkillsList.map((skill, index) =>
                                    skill.size == 'small' &&
                                    <ListItem key={index}>
                                        <div className="text-stretcher">
                                            <Text textStyle='skills' color='bright.yellow'>{skill.text}</Text>
                                        </div>
                                    </ListItem>
                                )}
                            </List>
                        </div>
                    }
                    {devSkills &&
                        <div className="skills-bottom-container">
                            <List variant='skills'>
                                <div style={{ padding: '10px', background: '#005FED' }}>
                                    <Text textStyle='p_bold' color='base.white'>I would say I'm excellent with: </Text>
                                </div>
                                {devSkillsList.map((skill, index) =>
                                    skill.size == 'large' &&
                                    <ListItem key={index}>
                                        <div className="text-stretcher">
                                            <Text textStyle='skills' color='bright.orange'>{skill.text}</Text>
                                        </div>
                                    </ListItem>
                                )}
                            </List>
                            <List variant='skills'>
                                <div style={{ padding: '10px', background: '#005FED' }}>
                                    <Text textStyle='p_bold' color='base.white'>I would say I'm great with:</Text>
                                </div>
                                {devSkillsList.map((skill, index) =>
                                    skill.size == 'mid' &&
                                    <ListItem key={index}>
                                        <div className="text-stretcher">
                                            <Text textStyle='skills' color='bright.green'>{skill.text}</Text>
                                        </div>
                                    </ListItem>
                                )}
                            </List>
                            <List variant='skills'>
                                <div style={{ padding: '10px', background: '#005FED' }}>
                                    <Text textStyle='p_bold' color='base.white'>I would say I know enough of:</Text>
                                </div>
                                {devSkillsList.map((skill, index) =>
                                    skill.size == 'small' &&
                                    <ListItem key={index}>
                                        <div className="text-stretcher">
                                            <Text textStyle='skills' color='bright.yellow'>{skill.text}</Text>
                                        </div>
                                    </ListItem>
                                )}
                            </List>
                        </div>
                    }
                </div>
            </div>
            <Box bg="blue.dark">
                <div className="footer">
                    <div className="footer-left">
                        <img src={footerPortrait}/>
                    </div>
                    <div className="footer-right">
                        <div>
                            <Text textStyle='h2' color='base.white'>Interested in working with me?</Text>
                        </div>
                        <div>
                            <Text textStyle='p' color='base.white'>The work I showcased here are my strongest design disciplines however, this is just a capsule of what I am capable of. Let's get in touch!</Text>
                        </div>
                        <div>
                            <Button variant='link' color='base.white'>GitHub</Button>
                            <Button variant='link' color='base.white'>LinkedIn</Button>
                            <Button variant='link' color='base.white'>Email</Button>
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    )
}

export default LandingPage