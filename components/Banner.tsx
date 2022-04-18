/** @jsx jsx */
import Image from 'next/image'
import Link from 'next/link'
import { Container, jsx } from 'theme-ui'

export const Banner = () => {
    return (
        <div sx={{ textAlign: 'center', cursor: 'pointer' }}>
            <Container p={4}>
                <Link href="/">
                    <Image
                        src="https://cdn1.thelifeofjamal.com/banner.jpg"
                        alt="The life of jamal banner logo"
                        width={800}
                        height={160}
                    />
                </Link>
            </Container>
        </div>
    )
}

export default Banner
