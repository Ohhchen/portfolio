import { Text, Button, Box } from "@chakra-ui/react"
import './styles/LandingPage.css'

const LandingPage = ({ }) => {


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
                        </div>
                        <div>
                            <div>
                                <Text textStyle='h4' color='base.white'>Here are some examples of what I do</Text>
                                <Button variant='primary'>Project management</Button>
                                <Button variant='primary'>UX/UI design</Button>
                                <Button variant='primary'>Web development</Button>
                                <Button variant='primary'>Branding</Button>
                            </div>
                        </div>
                        <div>
                            <Text textStyle='h4' color='base.white'>Here are some examples of what I would like to do more of</Text>
                            <div>
                                <Button variant='primary'>Illustration</Button>
                                <Button variant='primary'>Data analysis</Button>
                            </div>
                        </div>
                    </div>
                </Box>
                <Box bg='base.white'>
                    <div className="whatdoido-right">
                        <Text textStyle='h2' color='base.black'>list of selection</Text>
                    </div>
                </Box>
            </div>
            <div className="skills">
                <Text textStyle='h2' color='blue.dark'>Skills</Text>
                <div>
                    <div>
                        <Button variant='secondary'>Hard Skills</Button>
                        <Button variant='secondary'>Soft Skills</Button>
                        <Button variant='secondary'>Design</Button>
                        <Button variant='secondary'>Development</Button>
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