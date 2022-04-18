/** @jsx jsx */
import Image from 'next/image'
import { Box, Button, Flex, Input, jsx, Label, Text } from 'theme-ui'

export const Newsletter = () => {
    return (
        <Box
            sx={{
                border: '2px solid',
                borderRight: '3px solid',
                borderLeft: '3px solid',
                borderTop: '3px solid',
                borderColor: 'primary',
                ml: 2,
                mr: 2,
                mt: 5,
                bg: 'muted'
            }}
            as="form"
            onSubmit={(e) => e.preventDefault()}>
            <div sx={{ ml: 3, mr: 3, mt: 2, mb: 2 }}>
                <Flex sx={{ justifyContent: 'center' }}>
                    <Image
                        src="https://cdn1.thelifeofjamal.com/public/JamalLogo.png"
                        alt="Picture of the author"
                        width={150}
                        height={200}
                    />
                </Flex>
                <Text
                    sx={{
                        fontSize: 2,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        display: 'block'
                    }}>
                    Ready to join the Coder Cafe?
                </Text>
                <Text
                    sx={{
                        fontSize: 1,
                        ml: 3,
                        textAlign: 'center',
                        display: 'block'
                    }}>
                    Join our community for a weekly dose of my latest videos and articles.{' '}
                </Text>
                <form
                    action="https://live.us3.list-manage.com/subscribe/post?u=827b5c696729af48377892a43&amp;id=5a7c20ecb7"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    noValidate>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        name="EMAIL"
                        className="required email"
                        id="mce-EMAIL"
                        mb={3}
                    />
                    {/* <div id="mce-responses" className="clear">
                        <div
                            className="response"
                            id="mce-error-response"
                            style="display:none"></div>
                        <div
                            className="response"
                            id="mce-success-response"
                            style="display:none"></div>
                    </div> */}
                    <Flex sx={{ justifyContent: 'center' }}>
                        <Button>Submit</Button>
                    </Flex>
                </form>
            </div>
        </Box>
    )
}

export default Newsletter
