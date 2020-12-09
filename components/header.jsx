/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Header = () => {
    return (
        <header
            sx={{
                height: '45px',
                width: '100vw',
                bg: 'primary',
                borderBottom: '1px solid',
                borderColor: 'primary'
            }}>
            <div
                sx={{
                    display: 'grid',
                    maxWidth: '500',
                    overflow: 'hidden',
                    mx: 'auto',
                    px: 3,
                    gridAutoFlow: 'row',
                    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(3, 1fr)']
                }}>
                <div
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gridColumnStart: [1, 2],
                        gridColumnEnd: [3, 3],
                        order: [0, 1]
                    }}>
                    <Link
                        href="/"
                        title="Home"
                        sx={{
                            position: 'absolute',
                            width: 1,
                            height: 1,
                            overflow: 'hidden',
                            top: -9999
                        }}>
                        <a
                            sx={{
                                fontWeight: 'bold',
                                fontSize: 4,
                                cursor: 'pointer',
                                color: '#fff'
                            }}>
                            The Life Of Jamal
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
