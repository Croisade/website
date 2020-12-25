/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Text, Heading } from 'theme-ui'
import RecentThree from '../components/RecentThree'
import Banner from '../components/Banner'
import Head from 'next/head'

//@todo include meta description
export default function Home() {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="Description" content={''}></meta>
                <title>{'The Life Of Jamal'}</title>
            </Head>
            <Banner />
            <div sx={{ height: `calc(100vh - 120px)`, maxWidth: '40%', ml: 'auto', mr: 'auto' }}>
                <Heading as="h1">Home</Heading>
                <Heading as="h2" sx={{ mt: '3' }}>
                    Jamal Gardiner
                </Heading>
                <Text sx={{ mt: '2' }}>
                    I am a developer, content creator and a learner of all things. Welcome to my
                    website where I keep all of my thoughts and opinions. Everything you want to
                    know and more, is here.
                </Text>
                <RecentThree />
            </div>
        </div>
    )
}
