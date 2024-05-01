import { Text, Button, Box, List, ListItem, Alert, AlertDescription, AlertTitle } from "@chakra-ui/react"
import './styles/LandingPage-Xsmall.css'
import './styles/LandingPage-Small.css'
import './styles/LandingPage-Medium.css'
import './styles/LandingPage-Large.css'
import './styles/LandingPage-Xlarge.css'
// import './styles/LandingPage.css'
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Skills from './Skills'
import CEDaRCMS from "./CEDaRCMS"
import CityPoems from "./CityPoems"
import HopelandSystems from './HopelandSystems'
import SXGTwine from './SXGTwine'
import landingPortrait from '../Assets/Landing portrait/PortraitWbackground.png'
import aboutPortrait from '../Assets/About Portrait/PortraitWBackground.png'
import footerPortrait from '../Assets/Footer Portrait/PortraitWBackground.png'

const LandingPage = ({ }) => {
    const [navBarExpanded, setNavBarExpanded] = useState(false)
    const [pageScrolled, setPageScrolled] = useState(false)
    const [domainFiltered, setDomainFiltered] = useState(false)
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
    const [projectSelected, setProjectSelected] = useState(false)
    const [cedarCms, setCedarCms] = useState(false)
    const [cityPoems, setCityPoems] = useState(false)
    const [hopelandSystems, setHopelandSystems] = useState(false)
    const [sxgTwineGame, setSxgTwineGame] = useState(false)
    const [hoverCEDaRCMS, setHoverCEDaRCMS] = useState(false)
    const [hoverCityPoems, setHoverCityPoems] = useState(false)
    const [hoverHopelandSystem, setHoverHopelandSystem] = useState(false)
    const [hoverSXG, setHoverSXG] = useState(false)

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

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const openEmailLink = (email) => {
        navigator.clipboard.writeText(email);
        window.alert(`copied email address: ${email} to the clipboard!`);
    }

    const changeNavBarBG = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 730 && window.scrollY <= 1300) {
            setPageScrolled(true);
        } else if (window.scrollY <= 730) {
            setPageScrolled(false);
        } else if (window.scrollY >= 1300 && window.scrollY <= 1850) {
            setPageScrolled(false);
        } else if (window.scrollY >= 1850 && window.scrollY <= 2690) {
            setPageScrolled(true)
        } else {
            setPageScrolled(false);
        }
    }

    useEffect(() => {
        changeNavBarBG();
        window.addEventListener("scroll", changeNavBarBG)
    }, [])

    const changeBackground = () => {
        if (hoverCityPoems) {
            return 'whatdoido-right-selection-citypoems'
        } else if (hoverCEDaRCMS) {
            return 'whatdoido-right-selection-cedarcms'
        } else if (hoverSXG) {
            return 'whatdoido-right-selection-sxg'
        } else if (hoverHopelandSystem) {
            return 'whatdoido-right-selection-hs'
        } else {
            return "whatdoido-right-selection"
        }
    }

    return (<>
        <Box bg='base.white' width={['100%', '100%', '100%', '100%', '100%', '100%']}>
            {!projectSelected &&
                <>{navBarExpanded ?
                    <motion.div className="navbar-active"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: 'spring', ease: 'linear' }}>
                        <motion.div whileHover={{ scale: 1.5 }}>
                            <IoCloseSharp size={'4em'} color={'#005FED'} onClick={() => setNavBarExpanded(false)} />
                        </motion.div>
                        <Button variant='link'>
                            <a onClick={() => { window.scrollTo(0, 0); setNavBarExpanded(false); }}>
                                Home
                            </a>
                        </Button>
                        <Button variant='link'>
                            <a href="#whoami" onClick={() => { setNavBarExpanded(false); }}>
                                About
                            </a>
                        </Button>
                        <Button variant='link' onClick={() => { setCedarCms(true); setProjectSelected(true); window.scrollTo(0, 0); }}>Work</Button>
                    </motion.div>
                    :
                    <div className="navbar">
                        <motion.div
                            whileHover={{ scale: 1.5 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}>
                            <GiHamburgerMenu size={'3em'} className={pageScrolled ? 'navbar-scrolled' : 'navbar-unscrolled'} onClick={() => setNavBarExpanded(true)} />
                        </motion.div>
                    </div>
                }</>
            }
            {!projectSelected &&
                <div className="hero">
                    <div className="hero-top">
                        <Box width={['200px', '200px', '500px', '500px', '900px', '900px']}
                            as={motion.div}
                            viewport={{ once: true }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}>
                            <img src={landingPortrait} width='100%' />
                        </Box>
                        <motion.div
                            className="hero-top"
                            viewport={{ once: true }}
                            initial={{ x: -200, scale: 1.5 }}
                            whileInView={{ x: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}>
                            <Text textStyle='h1' color='base.white'>Olivia Chen</Text>
                        </motion.div>
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
                </div>}
            {!projectSelected &&
                <div className="whoami" id='whoami'>
                    <motion.div className="whoami-left"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 0.8 }}>
                        <div>
                            <Text textStyle='h2' color='blue.dark'>Who am I?</Text>
                        </div>
                        <div>
                            <Text textStyle='p' color='blue.dark'>A design enthusiast. A team leader, based in Vancouver, BC Canada.</Text>
                        </div>
                        <div>
                            <Text textStyle='p' color='blue.dark'>I am most experienced as a Project Manager but I worked mostly in small teams where I need to help out with different aspects of the project, so I also have UX/UI design and web develpment experience.</Text>
                        </div>
                    </motion.div>
                    <motion.div className="whoami-right"
                        viewport={{ once: true }}
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}>
                        <Box width={['200px', '200px', '500px', 'auto', 'auto', 'auto']}>
                            <img src={aboutPortrait} />
                        </Box>
                    </motion.div>
                </div>}
            {!projectSelected &&
                <div className="whatdoido">
                    <Box bg='blue.dark' style={{ width: '100%' }}>
                        <div className="whatdoido-left">
                            <motion.div
                                viewport={{ once: true }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}>
                                <Text textStyle='h2' color='base.white'>What do I do?</Text>
                                <Text textStyle='p_s' color='base.white'>Start by selecting one of the domains below</Text>
                            </motion.div>
                            <div>
                                <div className="whatdoido-examples">
                                    <motion.div
                                        viewport={{ once: true }}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ type: "spring", stiffness: 100, delay: 0.5 }}>
                                        <Text textStyle='h4' color='base.white'>Here are some examples of what I do</Text>
                                    </motion.div>
                                    <motion.div
                                        className="whatdoido-examples-buttons"
                                        viewport={{ once: true }}
                                        initial={{ opacity: 0, y: -200 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}>
                                        <Button variant={projectManagement ? 'primaryClicked' : 'primary'}
                                            onClick={() => {
                                                setDomainFiltered(true);
                                                setProjectManagement(true);
                                                setDesign(false);
                                                setWebDev(false);
                                                setBranding(false);
                                                setIllustration(false);
                                                setDataAnalysis(false);
                                            }}>Project management</Button>
                                        <Button variant={design ? 'primaryClicked' : 'primary'}
                                            onClick={() => {
                                                setDomainFiltered(true);
                                                setDesign(true);
                                                setProjectManagement(false);
                                                setWebDev(false);
                                                setBranding(false);
                                                setIllustration(false);
                                                setDataAnalysis(false);
                                            }}>UX/UI design</Button>
                                        <Button variant={webDev ? 'primaryClicked' : 'primary'}
                                            onClick={() => {
                                                setDomainFiltered(true);
                                                setWebDev(true);
                                                setDesign(false);
                                                setProjectManagement(false);
                                                setBranding(false);
                                                setIllustration(false);
                                                setDataAnalysis(false);
                                            }}>Web development</Button>
                                        <Button variant={branding ? 'primaryClicked' : 'primary'}
                                            onClick={() => {
                                                setDomainFiltered(true);
                                                setBranding(true);
                                                setWebDev(false);
                                                setDesign(false);
                                                setProjectManagement(false);
                                                setIllustration(false);
                                                setDataAnalysis(false);
                                            }}>Branding</Button>
                                    </motion.div>
                                </div>
                            </div>
                            {/* <div className="whatdoido-examples">
                                <div>
                                    <Text textStyle='h4' color='base.white'>Here are some examples of what I would like to do more of</Text>
                                </div>
                                <div className="whatdoido-examples-buttons">
                                    <Button variant={illustration ? 'primaryClicked' : 'primary'}
                                        onClick={() => {
                                            setDomainFiltered(true);
                                            setBranding(false);
                                            setWebDev(false);
                                            setDesign(false);
                                            setProjectManagement(false);
                                            setIllustration(true);
                                            setDataAnalysis(false);
                                        }}>Illustration</Button>
                                    <Button variant={dataAnalysis ? 'primaryClicked' : 'primary'}
                                        onClick={() => {
                                            setDomainFiltered(true);
                                            setBranding(false);
                                            setWebDev(false);
                                            setDesign(false);
                                            setProjectManagement(false);
                                            setIllustration(false);
                                            setDataAnalysis(true);
                                        }}>Data Analysis</Button>
                                </div>
                            </div> */}
                        </div>
                    </Box>
                    {domainFiltered &&
                        <div className="whatdoido-right">
                            {projectManagement &&
                                <motion.div className={changeBackground()}
                                    viewport={{ once: true }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ ease: 'linear', duration: 0.8, delay: 0.2 }}>
                                    <motion.div whileHover={{ scale: 1.2 }}>
                                        <Button
                                            variant='link'
                                            onMouseEnter={() => setHoverCEDaRCMS(true)}
                                            onMouseLeave={() => setHoverCEDaRCMS(false)}
                                            onClick={() => {
                                                setProjectSelected(true);
                                                setCedarCms(true);
                                                window.scrollTo(0, 0);
                                            }}>CEDaR CMS</Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.2 }}>
                                        <Button
                                            variant='link'
                                            onMouseEnter={() => setHoverCityPoems(true)}
                                            onMouseLeave={() => setHoverCityPoems(false)}
                                            onClick={() => {
                                                setProjectSelected(true);
                                                setCityPoems(true);
                                                window.scrollTo(0, 0);
                                            }}>City Poems Project</Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.2 }}>
                                        <Button
                                            variant='link'
                                            onMouseEnter={() => setHoverSXG(true)}
                                            onMouseLeave={() => setHoverSXG(false)}
                                            onClick={() => {
                                                setProjectSelected(true);
                                                setSxgTwineGame(true);
                                                window.scrollTo(0, 0);
                                            }}>SXG Twine Game</Button>
                                    </motion.div>
                                </motion.div>
                            }
                            {design &&
                                <motion.div
                                    className={changeBackground()}
                                    viewport={{ once: true }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ ease: 'linear', duration: 0.8, delay: 0.2 }}>
                                    <motion.div whileHover={{ scale: 1.2 }}>
                                        <Button
                                            variant='link'
                                            onMouseEnter={() => setHoverCEDaRCMS(true)}
                                            onMouseLeave={() => setHoverCEDaRCMS(false)}
                                            onClick={() => {
                                                setProjectSelected(true);
                                                setCedarCms(true);
                                                window.scrollTo(0, 0);
                                            }}>CEDaR CMS</Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.2 }}>
                                        <Button
                                            variant='link'
                                            onMouseEnter={() => setHoverCityPoems(true)}
                                            onMouseLeave={() => setHoverCityPoems(false)}
                                            onClick={() => {
                                                setProjectSelected(true);
                                                setCityPoems(true);
                                                window.scrollTo(0, 0);
                                            }}>City Poems Project</Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.2 }}>
                                        <Button variant='link'
                                            onMouseEnter={() => setHoverHopelandSystem(true)}
                                            onMouseLeave={() => setHoverHopelandSystem(false)}
                                            onClick={() => {
                                                setProjectSelected(true);
                                                setHopelandSystems(true);
                                                window.scrollTo(0, 0);
                                            }}>Hopeland Systems</Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.2 }}>
                                        <Button
                                            variant='link'
                                            onMouseEnter={() => setHoverSXG(true)}
                                            onMouseLeave={() => setHoverSXG(false)}
                                            onClick={() => {
                                                setProjectSelected(true);
                                                setSxgTwineGame(true);
                                                window.scrollTo(0, 0);
                                            }}>SXG Twine Game</Button>
                                    </motion.div>
                                </motion.div>
                            }
                            {webDev &&
                                <motion.div
                                    className={changeBackground()}
                                    viewport={{ once: true }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ ease: 'linear', duration: 0.8, delay: 0.2 }}>
                                    <motion.div whileHover={{ scale: 1.2 }}>
                                        <Button
                                            variant='link'
                                            onMouseEnter={() => { setHoverCEDaRCMS(true) }}
                                            onMouseLeave={() => { setHoverCEDaRCMS(false) }}
                                            onClick={() => {
                                                setProjectSelected(true);
                                                setCedarCms(true);
                                                window.scrollTo(0, 0);
                                            }}>CEDaR CMS</Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.2 }}>
                                        <Button variant='link'
                                            onMouseEnter={() => { setHoverHopelandSystem(true) }}
                                            onMouseLeave={() => { setHoverHopelandSystem(false) }}
                                            onClick={() => {
                                                setProjectSelected(true);
                                                setHopelandSystems(true);
                                                window.scrollTo(0, 0);
                                            }}>Hopeland Systems</Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.2 }}>
                                        <Button variant='link'
                                            onMouseEnter={() => { setHoverSXG(true) }}
                                            onMouseLeave={() => { setHoverSXG(false) }}
                                            onClick={() => {
                                                setProjectSelected(true);
                                                setSxgTwineGame(true);
                                                window.scrollTo(0, 0);
                                            }}>SXG Twine Game</Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.2 }}>
                                        <Button variant='link'
                                            onClick={() => {
                                                setProjectSelected(true)
                                            }}>Smímeyale Socials</Button>
                                    </motion.div>
                                </motion.div>
                            }
                            {branding &&
                                <motion.div
                                    className="whatdoido-right-selection"
                                    viewport={{ once: true }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ ease: 'linear', duration: 0.8, delay: 0.2 }}>
                                    <motion.div whileHover={{ scale: 1.2 }}>
                                        <Button variant='link'
                                            onClick={() => {
                                                setProjectSelected(true)
                                            }}>Smímeyale Socials</Button>
                                    </motion.div>
                                </motion.div>
                            }
                            {illustration &&
                                <div className="whatdoido-right-selection">
                                    <motion.div whileHover={{ scale: 1.2 }}>
                                        <Text textStyle='h2' color='blue.dark'>Coming soon!</Text>
                                    </motion.div>
                                </div>
                            }
                            {dataAnalysis &&
                                <div className="whatdoido-right-selection">
                                    <motion.div whileHover={{ scale: 1.2 }}>
                                        <Text textStyle='h2' color='blue.dark'>Coming soon!</Text>
                                    </motion.div>
                                </div>
                            }
                        </div>}
                </div>}
            {!projectSelected &&
                <div className="skills">
                    <div className="skills-top">
                        <motion.div
                            viewport={{ once: true }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: 'linear', duration: 0.8, delay: 1 }}>
                            <Text textStyle='h2' color='blue.dark'>Skills</Text>
                        </motion.div>
                        <motion.div
                            className="skills-top-buttons"
                            viewport={{ once: true }}
                            initial={{ opacity: 0, x: 500 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1 }}>
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
                        </motion.div>
                    </div>
                    <div className="skills-bottom">
                        {allSkills &&
                            <motion.div
                                className="skills-bottom-container"
                                initial={{ opacity: 0, y: 500 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ease: 'linear', duration: 0.5, delay: 0.3 }}>
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
                            </motion.div>
                        }
                        {hardSkills &&
                            <motion.div
                                className="skills-bottom-container"
                                initial={{ opacity: 0, y: 500 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ease: 'linear', duration: 0.5, delay: 0.3 }}>
                                <List variant='skills'>
                                    <div style={{ padding: '10px', background: '#005FED' }}>
                                        <Text textStyle='p_bold' color='base.white'>I would say I'm excellent with: </Text>
                                    </div>
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
                            </motion.div>
                        }
                        {softSkills &&
                            <motion.div
                                className="skills-bottom-container"
                                initial={{ opacity: 0, y: 500 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ease: 'linear', duration: 0.5, delay: 0.3 }}>
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
                            </motion.div>
                        }
                        {designSkills &&
                            <motion.div
                                initial={{ opacity: 0, y: 500 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ease: 'linear', duration: 0.5, delay: 0.3 }}
                                className="skills-bottom-container">
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
                            </motion.div>
                        }
                        {devSkills &&
                            <motion.div
                                initial={{ opacity: 0, y: 500 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ease: 'linear', duration: 0.5, delay: 0.3 }}
                                className="skills-bottom-container">
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
                            </motion.div>
                        }
                    </div>
                </div>}
            {projectSelected &&
                <>{cedarCms &&
                    <CEDaRCMS
                        backToHome={() => { setProjectSelected(false); setCedarCms(false); setNavBarExpanded(false); }}
                        nextProject={() => { setCedarCms(false); setCityPoems(true); }}
                    />
                }
                    {cityPoems &&
                        <CityPoems
                            backToHome={() => { setProjectSelected(false); setCityPoems(false); setNavBarExpanded(false); }}
                            nextProject={() => { setCityPoems(false); setHopelandSystems(true); }}
                        />
                    }
                    {hopelandSystems &&
                        <HopelandSystems
                            backToHome={() => { setProjectSelected(false); setHopelandSystems(false); setNavBarExpanded(false); }}
                            nextProject={() => { setHopelandSystems(false); setSxgTwineGame(true); }}
                        />
                    }
                    {sxgTwineGame &&
                        <SXGTwine
                            backToHome={() => { setProjectSelected(false); setSxgTwineGame(false); setNavBarExpanded(false); }}
                            nextProject={() => { setSxgTwineGame(false); setProjectSelected(false); setNavBarExpanded(false); window.scrollTo(0, 0); }}
                        />
                    }
                </>
            }
            <Box bg="blue.dark">
                <div className="footer">
                    <div className="footer-left">
                        <Box width={['200px', '200px', '500px', 'auto', 'auto', 'auto']}
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}>
                            <img src={footerPortrait} />
                        </Box>
                    </div>
                    <div className="footer-right">
                        <motion.div
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: 'linear' }}>
                            <Text textStyle='h2' color='base.white'>Interested in working with me?</Text>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: 'linear' }}>
                            <Text textStyle='p' color='base.white' style={{ textAlign: 'justify' }}>The work I showcased here are my strongest design disciplines however, this is just a capsule of what I am capable of. Let's get in touch!</Text>
                        </motion.div>
                        <motion.div
                            className="links"
                            initial={{ opacity: 0, x: 300 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: 'linear' }}>
                            <Button variant='link' color='base.white' onClick={() => openEmailLink('ochen0909@gmail.com')}><AiOutlineMail /></Button>
                            <Button variant='link' color='base.white' onClick={() => openInNewTab('https://www.linkedin.com/in/olivia-chen-26bba9245/')}><FaLinkedin /></Button>
                            <Button variant='link' color='base.white' onClick={() => openInNewTab('https://github.com/Ohhchen')}><FaGithub /></Button>
                        </motion.div>
                    </div>
                </div>
            </Box>
        </Box>
    </>)
}

export default LandingPage