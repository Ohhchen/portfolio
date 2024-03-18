import { Text, Button, Box } from "@chakra-ui/react"
import './styles/LandingPage.css'
import { useState } from "react"
import { motion } from "framer-motion"
import Skills from './Skills'
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
    // const [allSkills, setAllSkills] = useState(true)
    const [hardSkills, setHardSkills] = useState(false)
    const [softSkills, setSoftSkills] = useState(false)
    const [designSkills, setDesignSkills] = useState(false)
    const [devSkills, setDevSkills] = useState(false)
    const [allSkillsList, setAllSkillsList] = useState()
    const [hardSkillsList, setHardSkillsList] = useState([])
    const [softSkillsList, setSoftSkillsList] = useState()
    const [designSkillsList, setDesignSkillsList] = useState()
    const [devSkillsList, setDevSkillsList] = useState()

    const filterSkills = (filter) => {
        switch (filter) {
            case 'hardSkills':
                for (let object of Skills) {
                    const hardskills = object.tag.filter(function (skill) {
                        return skill == 'hardSkills'
                    })
                    setHardSkillsList([...hardSkillsList, hardskills])
                }
            break;
        }

    }
    console.log(hardSkillsList)

    return (
        <Box bg='base.white'>
            <div className="hero">
                <div className="hero-top">
                    <div>
                        <Text textStyle='h1' color='blue.dark'>Image goes here</Text>
                    </div>
                    <div>
                        <Text textStyle='h1' color='blue.dark'>Olivia Chen</Text>
                    </div>
                </div>
                <div>
                    <Text textStyle='h4' color='blue.dark'>This is where the infinite scroll goes</Text>
                </div>
            </div>
            <div className="whoami">
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
                            }}>Hard Skills</Button>
                        <Button variant={softSkills ? 'secondaryClicked' : 'secondary'}
                            onClick={() => {
                                filterSkills('softSkills');
                                setHardSkills(false);
                                setDesignSkills(false);
                                setSoftSkills(true);
                                setDevSkills(false);
                            }}>Soft Skills</Button>
                        <Button variant={designSkills ? 'secondaryClicked' : 'secondary'}
                            onClick={() => {
                                filterSkills('designSkills');
                                setHardSkills(false);
                                setDesignSkills(true);
                                setSoftSkills(false);
                                setDevSkills(false);
                            }}>Design</Button>
                        <Button variant={devSkills ? 'secondaryClicked' : 'secondary'}
                            onClick={() => {
                                filterSkills('devSkills');
                                setHardSkills(false);
                                setDesignSkills(false);
                                setSoftSkills(false);
                                setDevSkills(true);
                            }}>Development</Button>
                    </div>
                </div>
            </div>
            <Box bg="blue.dark">
                <div className="footer">
                    <Text textStyle='h2' color='base.white'>Interested in working with me?</Text>
                    <div>
                        <Text textStyle='p' color='base.white'>The work I showcased here are my strongest design disciplines however, this is just a capsule of what I am capable of. Let's get in touch!</Text>
                    </div>
                </div>
            </Box>
        </Box>
    )
}

export default LandingPage