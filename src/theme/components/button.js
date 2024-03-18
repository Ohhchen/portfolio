import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const primary = defineStyle({
    fontFamily: 'Anybody',
    fontSize: '20px',
    fontWeight: 'normal',
    width: 'fit-content',
    height: 'fit-content',
    bg: 'base.white',
    color: 'blue.dark',
    padding: '20px 30px',
    borderRadius: '0px',
    border: '1px solid',
    borderColor: 'base.black',
    _hover: {
       boxShadow: '#000000 10px 8px',
    }
})

const primaryClicked = defineStyle({
    fontFamily: 'Anybody',
    fontSize: '20px',
    fontWeight: 'normal',
    width: 'fit-content',
    height: 'fit-content',
    bg: 'base.white',
    color: 'blue.dark',
    padding: '20px 30px',
    borderRadius: '0px',
    border: '1px solid',
    borderColor: 'base.black',
    boxShadow: '#000000 10px 8px',
    _hover: {
        boxShadow: 'transparent'
    }
})

const secondary = defineStyle({
    fontFamily: 'Anybody',
    fontSize: '20px',
    fontWeight: 'normal',
    width: 'fit-content',
    height: 'fit-content',
    bg: 'base.white',
    color: 'blue.dark',
    padding: '20px 30px',
    borderRadius: '0px',
    border: '1px solid',
    borderColor: 'blue.dark',
    _hover: {
        boxShadow: '#005FED 10px 8px',
    }
})

const secondaryClicked = defineStyle({
    fontFamily: 'Anybody',
    fontSize: '20px',
    fontWeight: 'normal',
    width: 'fit-content',
    height: 'fit-content',
    bg: 'base.white',
    color: 'blue.dark',
    padding: '20px 30px',
    borderRadius: '0px',
    border: '1px solid',
    borderColor: 'blue.dark',
    boxShadow: '#005FED 10px 8px',
    _hover: {
        boxShadow: 'transparent',
    }
})

const link = defineStyle({
    fontFamily: 'Anybody',
    fontSize: '64px',
    fontWeight: 'bold',
    width: 'fit-content',
    height: 'fit-content',
    color: 'blue.dark',
    textWrap: 'pretty',
    _hover: {
        color: 'base.black',
        textDecoration: 'none'
    }
})


export const buttonTheme = defineStyleConfig({
    variants: { primary, secondary, primaryClicked, secondaryClicked, link },
})

export default buttonTheme