/** @jsx jsx */
import { jsx, Grid, Box, Link } from 'theme-ui'
// import Link from 'next/link'
import Dark from './Darkmode'

//@todo implement dropdown on blog

const Header = () => {
    return (
        <div
            sx={{
                bg: 'muted',
                borderBottom: '1px solid',
                borderColor: 'primary'
            }}>
            <div sx={{ maxWidth: ['80%', '50%'], ml: 'auto', mr: 'auto' }}>
                <header
                    sx={{
                        display: 'grid',
                        gridGap: 3,
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        px: 3,
                        py: 0,
                        alignItems: 'center',
                        variant: 'styles.header'
                    }}>
                    <button
                        title="Toggle Menu"
                        sx={{
                            appearance: 'none',
                            width: 8,
                            height: 8,
                            m: 0,
                            p: 1,
                            color: 'inherit',
                            bg: 'transparent',
                            border: 0,
                            ':focus': {
                                outline: '2px solid'
                            },
                            ':hover': {
                                color: 'primary'
                            }
                        }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentcolor"
                            viewBox="0 0 24 24"
                            sx={{
                                display: 'block',
                                margin: 0
                            }}>
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                        </svg>
                    </button>
                    <div
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Link
                            to="/"
                            sx={{
                                variant: 'styles.navlink',
                                px: 3,
                                py: 1,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                fontSize: 4,
                                color: 'text'
                            }}>
                            TLOJ
                        </Link>
                    </div>
                    <div
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}>
                        <Link
                            to="/blog"
                            sx={{
                                variant: 'styles.navlink',
                                ml: 3,
                                py: 3
                            }}>
                            Blog
                        </Link>
                        <Link
                            to="/about"
                            sx={{
                                variant: 'styles.navlink',
                                ml: 3,
                                py: 3
                            }}>
                            About
                        </Link>
                        <Dark />
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header
