/** @jsxImportSource theme-ui */
import Image from 'next/image'
import Link from 'next/link'
import { Container } from 'theme-ui'
import { IMAGES } from '@constants'

export const Banner = () => {
    return (
        <div sx={{ textAlign: 'center', cursor: 'pointer' }}>
            <Container p={4}>
                <Link href="/" passHref>
                    <Image src={IMAGES.banner} alt={IMAGES.bannerAlt} width={800} height={160} />
                </Link>
            </Container>
        </div>
    )
}

export default Banner
