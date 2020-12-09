/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Button, useColorMode } from 'theme-ui'

const Dark = () => {
    const [colorMode, setColorMode] = useColorMode()
    return (
        <div>
            <Button onClick={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}>
                Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
            </Button>
        </div>
    )
}

export default Dark
