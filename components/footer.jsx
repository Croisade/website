/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';

const Footer = () => {
    return (
        <header
            sx={{ height: '60px', bg: 'primary', borderTop: '1px solid', borderColor: 'primary' }}>
            <footer
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    variant: 'containers.page',
                    height: '60px'
                }}>
                <Link href="/">
                    <a sx={{ color: '#fff', fontWeight: 'bold', fontSize: 2, cursor: 'pointer' }}>
                        Home
                    </a>
                </Link>
                <Link href="/">
                    <a sx={{ color: '#fff', fontWeight: 'bold', fontSize: 2, cursor: 'pointer' }}>
                        Technology
                    </a>
                </Link>
                <Link href="/">
                    <a sx={{ color: '#fff', fontWeight: 'bold', fontSize: 2, cursor: 'pointer' }}>
                        Politics
                    </a>
                </Link>
                <Link href="/">
                    <a sx={{ color: '#fff', fontWeight: 'bold', fontSize: 2, cursor: 'pointer' }}>
                        Health
                    </a>
                </Link>
            </footer>
        </header>
    );
};

export default Footer;
