import { defineStyle, createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'
import { listAnatomy as parts } from '@chakra-ui/anatomy'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const variants = {
  skills: definePartsStyle(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '10px',
        alignSelf: 'stretch',
        textAlign: 'left',
        height: '100%',
        padding: '15px',
        width: '100%',
        border: '1px solid',
        borderColor: 'blue.dark',
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        flex: '1 0 0',
        color:'blue.dark',
        borderBottom: '1px solid',
        borderColor: 'blue.dark',
        padding: '5px'
    },
  })),
}

export const listTheme = defineMultiStyleConfig({ variants })