/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Button, useColorMode } from 'theme-ui'

const Dark = () => {
    const [colorMode, setColorMode] = useColorMode()
    return (
        <div>
            <Button
                sx={{ color: 'primary' }}
                onClick={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}>
                {colorMode === 'default' ? (
                    <span role="img" aria-label="moon">
                        🌑
                    </span>
                ) : (
                    <span role="img" aria-label="sun">
                        ☀️
                    </span>
                )}
            </Button>
        </div>
    )
}

export default Dark
