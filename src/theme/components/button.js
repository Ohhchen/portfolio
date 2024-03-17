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

const secondary = defineStyle({
    fontFamily: 'Anybody',
    fontSize: '20px',
    fontWeight: 'normal',
    width: 'fit-content',
    height: 'fit-content',
    bg: 'blue.dark',
    color: 'base.white',
    padding: '20px 30px',
    borderRadius: '0px',
    border: '1px solid',
    borderColor: 'base.black',
    _hover: {
        boxShadow: '#000000 10px 8px',
    }
})


export const buttonTheme = defineStyleConfig({
    variants: { primary, secondary },
})

export default buttonTheme