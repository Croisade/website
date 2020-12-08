/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';
import { Button, useColorMode } from 'theme-ui';
import { NavLink } from 'theme-ui';
import { Flex } from 'theme-ui';

const Nav = () => {
    const [colorMode, setColorMode] = useColorMode();
    return (
        <nav
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                variant: 'containers.page'
            }}>
            <Link href="/">
                <a sx={{ fontWeight: 'bold', fontSize: 2, cursor: 'pointer' }}>Home</a>
            </Link>
            <Link href="/">
                <a sx={{ fontWeight: 'bold', fontSize: 2, cursor: 'pointer' }}>Technology</a>
            </Link>
            <Link href="/">
                <a sx={{ fontWeight: 'bold', fontSize: 2, cursor: 'pointer' }}>Politics</a>
            </Link>
            <Link href="/">
                <a sx={{ fontWeight: 'bold', fontSize: 2, cursor: 'pointer' }}>Health</a>
            </Link>
            <Link href="/">
                <a sx={{ fontWeight: 'bold', fontSize: 2, cursor: 'pointer' }}>About</a>
            </Link>
            {/* <Button onClick={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}>
                Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
            </Button> */}
        </nav>
    );
};

export default Nav;
