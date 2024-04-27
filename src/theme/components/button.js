import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const primary = defineStyle({
    fontFamily: 'Anybody',
    fontSize: ['12px', '12px', '16px', '16px','20px', '20px'],
    fontWeight: 'normal',
    width: 'fit-content',
    height: 'fit-content',
    bg: 'base.white',
    color: 'blue.dark',
    padding: ['10px 10px', '10px 10px', '10px 20px', '10px 20px', '20px 30px', '20px 30px'],
    borderRadius: '0px',
    border: '1px solid',
    borderColor: 'base.black',
    _hover: {
       boxShadow: ['#000000 6px 4px', '#000000 6px 4px', '#000000 8px 6px', '#000000 8px 6px', '#000000 10px 8px', '#000000 10px 8px'],
    }
})

const primaryClicked = defineStyle({
    fontFamily: 'Anybody',
    fontSize: ['12px', '12px', '16px', '16px','20px', '20px'],
    fontWeight: 'normal',
    width: 'fit-content',
    height: 'fit-content',
    bg: 'base.white',
    color: 'blue.dark',
    padding: ['10px 10px', '10px 10px', '10px 20px', '10px 20px', '20px 30px', '20px 30px'],
    borderRadius: '0px',
    border: '1px solid',
    borderColor: 'base.black',
    boxShadow: ['#000000 6px 4px', '#000000 6px 4px', '#000000 8px 6px', '#000000 8px 6px', '#000000 10px 8px', '#000000 10px 8px'],
    _hover: {
        boxShadow: 'transparent'
    }
})

const secondary = defineStyle({
    fontFamily: 'Anybody',
    fontSize: ['12px', '12px', '16px', '16px','20px', '20px'],
    fontWeight: 'normal',
    width: 'fit-content',
    height: 'fit-content',
    bg: 'base.white',
    color: 'blue.dark',
    padding: ['10px 10px', '10px 10px', '10px 20px', '10px 20px', '20px 30px', '20px 30px'],
    borderRadius: '0px',
    border: '1px solid',
    borderColor: 'blue.dark',
    _hover: {
        boxShadow: ['#005FED 6px 4px', '#005FED 6px 4px', '#005FED 8px 6px', '#005FED 8px 6px', '#005FED 10px 8px' ,'#005FED 10px 8px'],
    }
})

const secondaryClicked = defineStyle({
    fontFamily: 'Anybody',
    fontSize: ['12px', '12px', '16px', '16px','20px', '20px'],
    fontWeight: 'normal',
    width: 'fit-content',
    height: 'fit-content',
    bg: 'base.white',
    color: 'blue.dark',
    padding: ['10px 10px', '10px 10px', '10px 20px', '10px 20px', '20px 30px', '20px 30px'],
    borderRadius: '0px',
    border: '1px solid',
    borderColor: 'blue.dark',
    boxShadow: ['#005FED 6px 4px', '#005FED 6px 4px', '#005FED 8px 6px', '#005FED 8px 6px', '#005FED 10px 8px' ,'#005FED 10px 8px'],
    _hover: {
        boxShadow: 'transparent',
    }
})

const tiertiary = defineStyle({
    fontFamily: 'Anybody',
    fontSize: ['12px', '12px', '16px', '16px','20px', '20px'],
    fontWeight: 'normal',
    width: 'fit-content',
    height: 'fit-content',
    bg: 'blue.dark',
    color: 'base.white',
    padding: ['10px 10px', '10px 10px', '10px 20px', '10px 20px', '20px 30px', '20px 30px'],
    borderRadius: '0px',
    border: '1px solid',
    borderColor: 'blue.dark',
    _hover: {
        boxShadow: ['#000000 6px 4px', '#000000 6px 4px', '#000000 8px 6px', '#000000 8px 6px', '#000000 10px 8px', '#000000 10px 8px'],
    }
})

const link = defineStyle({
    fontFamily: 'Anybody',
    fontSize: [ '24px', '24px', '32px', '32px', '64px', '64px'],
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
    variants: { primary, secondary, primaryClicked, secondaryClicked, link, tiertiary },
})

export default buttonTheme