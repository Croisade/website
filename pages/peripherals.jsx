/** @jsx jsx */
import { jsx, Heading, Box } from 'theme-ui'
import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

export default function Peripherals() {
    return (
        <div
            sx={{
                height: `calc(100vh - 120px)`,
                maxWidth: ['80%', '50%'],
                ml: 'auto',
                mr: 'auto'
            }}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta
                    name="Description"
                    content={
                        'Here you can find all of my peripherals I use on the day to day'
                    }></meta>
                <title>{'Peripherals - The Life Of Jamal'}</title>
            </Head>
            <Banner />
            <Heading as="h1">Peripherals</Heading>
            <br />
            <Heading as="h2">Tower</Heading>
            <a
                href="https://amzn.to/3owqF6W"
                sx={{ variant: 'styles.navBullet', p: 2, color: 'text' }}>
                AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED
                Cooler
            </a>
            <Box>
                <a
                    href="https://amzn.to/36oCwhf"
                    sx={{ variant: 'styles.navBullet', p: 2, color: 'text' }}>
                    Nvidia GEFORCE GTX 1070 Ti - FE Founder's Edition
                </a>
            </Box>
            <Box>
                <a
                    href="https://amzn.to/3opdAfC"
                    sx={{ variant: 'styles.navBullet', p: 2, color: 'text' }}>
                    Phanteks Eclipse P400A Digital ATX Mid-Tower
                </a>
            </Box>
            <Box>
                <a
                    href="https://amzn.to/2MGvmhm"
                    sx={{ variant: 'styles.navBullet', p: 2, color: 'text' }}>
                    TEAMGROUP T-Force Dark Z 16GB Kit x 2
                </a>
            </Box>
            <Box>
                <a
                    href="https://amzn.to/2MFUggI"
                    sx={{ variant: 'styles.navBullet', p: 2, color: 'text' }}>
                    be quiet! Dark Rock Pro 4, BK022, CPU Cooler
                </a>
            </Box>
            <Box>
                <a
                    href="https://amzn.to/2Mzf0ae"
                    sx={{ variant: 'styles.navBullet', p: 2, color: 'text' }}>
                    Samsung SSD 860 EVO 1TB Internal SSD
                </a>
            </Box>
            <br />
            <Heading as="h2">Office</Heading>
            <Box>
                <a
                    href="https://bit.ly/2JFw2yJ"
                    sx={{ variant: 'styles.navBullet', p: 2, color: 'text' }}>
                    Autonomous SmartDesk 2
                </a>
            </Box>
            <Box>
                <a
                    href="https://bit.ly/2JFw2yJ"
                    sx={{ variant: 'styles.navBullet', p: 2, color: 'text' }}>
                    Autonomous ErgoChair 2
                </a>
            </Box>
            <Box>
                <a
                    href="https://bit.ly/2JFw2yJ"
                    sx={{ variant: 'styles.navBullet', p: 2, color: 'text' }}>
                    Autonomous Cable Tray
                </a>
            </Box>
            <Box>
                <a
                    href="https://amzn.to/3py2ypx"
                    sx={{ variant: 'styles.navBullet', p: 2, color: 'text' }}>
                    Blue Snowball USB Microphone
                </a>
            </Box>
            <Box>
                <a
                    href="https://amzn.to/3orr4ax"
                    sx={{ variant: 'styles.navBullet', p: 2, color: 'text' }}>
                    Logitech HD Pro Webcam C920
                </a>
            </Box>
            <Box>
                <a
                    href="https://amzn.to/2L0588S"
                    sx={{ variant: 'styles.navBullet', p: 2, color: 'text' }}>
                    Elgato HD60 S Capture Card
                </a>
            </Box>
            <Box>
                <a
                    href="https://amzn.to/3a8Kv2I"
                    sx={{ variant: 'styles.navBullet', p: 2, color: 'text' }}>
                    Keychron K6 65% Compact Wireless Mechanical Keyboard
                </a>
            </Box>
            <Box>
                <a
                    href="https://amzn.to/39v7JBi"
                    sx={{ variant: 'styles.navBullet', p: 2, color: 'text' }}>
                    Corsair K70 RGB MK.2 Mechanical Gaming Keyboard
                </a>
            </Box>
            <Box>
                <a
                    href="https://amzn.to/2MGBLJq"
                    sx={{ variant: 'styles.navBullet', p: 2, color: 'text' }}>
                    Logitech Z333 2.1 Speakers
                </a>
            </Box>
            <Box>
                <a
                    href="https://amzn.to/36ldYpa"
                    sx={{ variant: 'styles.navBullet', p: 2, color: 'text' }}>
                    Sony WHCH710N/B Bluetooth Noise Cancellation Wireless Over-Ear Headphones
                </a>
            </Box>
            <Footer />
        </div>
    )
}
