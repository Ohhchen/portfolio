import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(cardAnatomy.keys)

const variants = {
    projects: definePartsStyle({
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#F8F7FE',
            border: '1px solid #005FED',
            borderColor: '#005FED',
            boxShadow: '#000000 15px 15px',
            padding: '30px',
            width: 'fit-content',
            borderRadius: '0px'
        },
        header: {
            color: '#005FED'
        },
        body: {
            width: '100%',
            textAlign: 'justify'
        },
    })
};


export const cardTheme = defineMultiStyleConfig({ variants })