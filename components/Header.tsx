/** @jsxImportSource theme-ui */
import Dark from '@components/Darkmode'
import { TOPICS, URLS } from '@constants'
import Link from 'next/link'
import { Container } from 'theme-ui'

const Header = () => {
    return (
        <Container sx={{ bg: 'muted', borderBottom: '1px solid', borderColor: 'primary' }}>
            <header className="main-header">
                <div className="container">
                    <Link href={URLS.home}>
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
                                        <Link href={URLS.blog}>
                                            <a sx={{ variant: 'styles.nav', mt: '1' }}>Blog</a>
                                        </Link>
                                    </button>
                                    <div className="dropdown-content" sx={{ bg: 'muted' }}>
                                        {TOPICS.map((x) => {
                                            return (
                                                <Link key={x.topic} href={x.path}>
                                                    <a
                                                        sx={{
                                                            variant: 'styles.nav',
                                                            color: 'text'
                                                        }}>
                                                        {x.topic}
                                                    </a>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            </li>
                            <li sx={{ display: 'inline' }}>
                                <a
                                    href="https://www.amazon.com/s?rh=n%3A7141123011%2Cp_4%3ATLOJ&ref=bl_sl_s_ap_web_7141123011"
                                    sx={{ variant: 'styles.nav' }}>
                                    Merch
                                </a>
                            </li>
                            <li sx={{ display: 'inline' }}>
                                <Link href={URLS.about}>
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
