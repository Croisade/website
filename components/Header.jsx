/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import Dark from './Darkmode'

//@todo implement dropdown on blog
const Header = () => {
    return (
        <header
            sx={{
                bg: 'muted',
                borderBottom: '1px solid',
                borderColor: 'primary'
            }}>
            <div
                sx={{
                    maxWidth: 768,
                    mx: 'auto',
                    px: 3,
                    display: 'flex',
                    alignItems: 'baseline'
                }}>
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
                <div sx={{ mx: 'auto' }} />
                <Link href="/blog">
                    <a
                        sx={{
                            variant: 'styles.navlink',
                            ml: 3,
                            py: 2,
                            pointer: 'cursor'
                        }}>
                        Blog
                    </a>
                </Link>
                <Link href="/about">
                    <a
                        sx={{
                            variant: 'styles.navlink',
                            ml: 3,
                            py: 2
                        }}>
                        About
                    </a>
                </Link>
                <Dark />
            </div>
        </header>
    )
}

export default Header
