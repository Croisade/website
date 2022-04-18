/** @jsx jsx */
import { Button, jsx, useColorMode } from 'theme-ui'

const Dark = () => {
    const [colorMode, setColorMode] = useColorMode()
    return (
        <div sx={{ display: 'inline' }}>
            <Button
                variant="muted"
                onClick={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}>
                {colorMode === 'dark' ? (
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
