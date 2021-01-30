/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import Link from 'next/link'
import Dark from './Darkmode'

//todo: implement dropdown on blog

const Header = () => {
    return (
        <Container sx={{ bg: 'muted', borderBottom: '1px solid', borderColor: 'primary' }}>
            <header className="main-header">
                <div className="container">
                    <Link href="/">
                        <a
                            sx={{
                                fontSize: 4,
                                py: 2,
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}>
                            TLOJ
                        </a>
                    </Link>
                    <nav className="main-nav">
                        <ul
                            className="main-nav-list"
                            sx={{ margin: '1em 0 .5em', textAlign: 'center' }}>
                            <li sx={{ display: 'inline' }}>
                                <div className="dropdown" sx={{ display: 'inline' }}>
                                    <button className="dropbtn">
                                        <Link href="/blog">
                                            <a sx={{ variant: 'styles.nav', mt: '1' }}>Blog</a>
                                        </Link>
                                    </button>
                                    <div className="dropdown-content" sx={{ bg: 'muted' }}>
                                        <Link href="/blog/technology">
                                            <a sx={{ variant: 'styles.nav', color: 'text' }}>
                                                Technology
                                            </a>
                                        </Link>
                                        <Link href="/blog/politics">
                                            <a sx={{ variant: 'styles.nav', color: 'text' }}>
                                                Politics
                                            </a>
                                        </Link>
                                        <Link href="/blog/health">
                                            <a sx={{ variant: 'styles.nav', color: 'text' }}>
                                                Health
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li sx={{ display: 'inline' }}>
                                <a
                                    href="https://www.amazon.com/s?rh=n%3A7141123011%2Cp_4%3ATLOJ-IT&ref=bl_sl_s_ap_web_7141123011"
                                    sx={{ variant: 'styles.nav' }}>
                                    Merch
                                </a>
                            </li>
                            <li sx={{ display: 'inline' }}>
                                <Link href="/about">
                                    <a sx={{ variant: 'styles.nav' }}>About</a>
                                </Link>
                            </li>
                            <li sx={{ display: 'inline' }}>
                                <Dark />
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </Container>
    )
}

export default Header
