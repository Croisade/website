/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Image, Container, Grid, Box, Flex, Heading, Text } from 'theme-ui';

export default function Home() {
    return (
        <div sx={{ height: `calc(100vh - 120px)` }}>
            <Container p={4}>
                <Image
                    src={
                        'https://thelifeofjamal.com/wp-content/uploads/2019/05/cropped-Logo.jpg?x79259'
                    }
                    sx={{
                        maxWidth: '80%',
                        height: 'auto',
                        ml: 'auto',
                        mr: 'auto',
                        display: 'block'
                    }}
                />

                {/* // <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
    //   <h1 sx={{fontSize: 8, my: 0}}>The life of jamal</h1>
    // </div>
    // <Link href="/blog/technology/">
    //   <a>Blog</a>
    // </Link> */}
            </Container>
            <div sx={{ maxWidth: '70%', ml: 'auto', mr: 'auto' }}>
                <Grid width={[256, null, 192]}>
                    <Box bg="muted">
                        <Flex>
                            <Box>
                                <Heading>Title</Heading>
                                <Text> Praesent venenatis, quam quis mattis dictum, enim </Text>
                            </Box>
                            <Box sx={{ ml: 'auto', height: 110 }}>
                                <Image
                                    src={
                                        'https://www.oregon.gov/odf/working/PublishingImages/CloudForest.jpg'
                                    }
                                    sx={{ width: 110, height: '100%' }}
                                />
                            </Box>
                        </Flex>
                    </Box>
                    <Box bg="muted">
                        <Flex sx={{ flexWrap: 'wrap' }}>
                            <Box>
                                <Heading>Title</Heading>
                                <Text>
                                    {' '}
                                    Praesent venenatis, quam quis mattis dictum, enim um, enim um,
                                    enim um, enim{' '}
                                </Text>
                            </Box>
                            <Box sx={{ ml: 'auto', width: 110, height: 110 }}>
                                <Image
                                    src={
                                        'https://www.oregon.gov/odf/working/PublishingImages/CloudForest.jpg'
                                    }
                                    sx={{ width: '100%', height: '100%' }}
                                />
                            </Box>
                        </Flex>
                    </Box>
                </Grid>

                <Container pt={4}>
                    <Grid width={[256, null, 192]} sx={{ justifyContent: 'center' }}>
                        <Box bg="muted">
                            <Heading sx={{ textAlign: 'center', color: 'primary' }}>
                                Infrastructure
                            </Heading>
                            <Container pl={4} pr={4} pt={3} p b={3}>
                                <Text sx={{ textAlign: 'center' }}>
                                    The infrastructure for the thelifeofjamal.com is fault-tolerant,
                                    highly-available and spans multiple availability zones by using
                                    an application load balancer and auto scaling groups. To ensure
                                    security, the EC2 instance resides in a private subnet in a
                                    custom VPC. Static objects are stored in S3 and is distributed
                                    to clients through CloudFront. Services used: CloudFront, S3,
                                    ELB, CloudWatch, EC2, Nat Gateway, Route 53, ACM.
                                </Text>
                            </Container>
                        </Box>
                        <Box bg="muted">
                            <Heading sx={{ textAlign: 'center', color: 'primary' }}>
                                Full Stack
                            </Heading>
                            <Container pl={4} pr={4} pt={3} pb={3}>
                                <Text sx={{ textAlign: 'center' }}>
                                    The infrastructure for the thelifeofjamal.com is fault-tolerant,
                                    highly-available and spans multiple availability zones by using
                                    an application load balancer and auto scaling groups. To ensure
                                    security, the EC2 instance resides in a private subnet in a
                                    custom VPC. Static objects are stored in S3 and is distributed
                                    to clients through CloudFront. Services used: CloudFront, S3,
                                    ELB, CloudWatch, EC2, Nat Gateway, Route 53, ACM.
                                </Text>
                            </Container>
                        </Box>
                        <Box bg="muted">
                            <Image
                                src={'../static/JamalLogo.png'}
                                sx={{
                                    width: 101,
                                    height: 138,
                                    textAlign: 'center'
                                }}
                            />
                            <Heading sx={{ textAlign: 'center' }}>Jamal Gardiner</Heading>
                            <Text sx={{ textAlign: 'center' }}>Lorem Ipsum</Text>
                            <Text sx={{ textAlign: 'center' }}>Lorem Ipsum</Text>
                        </Box>
                    </Grid>
                </Container>
            </div>
            <div sx={{ maxWidth: '80%', ml: 'auto', mr: 'auto' }}>
                <Container pt={4}>
                    <Grid width={[128, null, 192]}>
                        <Box bg="muted">
                            <Heading sx={{ textAlign: 'center' }}>Technology</Heading>
                        </Box>
                        <Box bg="muted">
                            <Heading sx={{ textAlign: 'center' }}>Politics</Heading>
                        </Box>
                        <Box bg="muted">
                            <Heading sx={{ textAlign: 'center' }}>Health</Heading>
                        </Box>
                        <Box bg="muted">
                            <Heading sx={{ textAlign: 'center' }}>Anime</Heading>
                        </Box>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}
