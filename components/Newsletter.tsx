/** @jsxImportSource theme-ui */
import { IMAGES, MAILCHIMP_NEWSLETTER, URLS } from '@constants'
import Image from 'next/image'
import { Box, Button, Flex, Input, Label, Text } from 'theme-ui'

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
                        src={IMAGES.personalLogo}
                        alt={IMAGES.personalLogoAlt}
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
                    {MAILCHIMP_NEWSLETTER.callToAction}
                </Text>
                <Text
                    sx={{
                        fontSize: 1,
                        ml: 3,
                        textAlign: 'center',
                        display: 'block'
                    }}>
                    {MAILCHIMP_NEWSLETTER.joinMessage}
                </Text>
                <form
                    action={URLS.mailchimpSubmit}
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
                    <Flex sx={{ justifyContent: 'center' }}>
                        <Button>Submit</Button>
                    </Flex>
                </form>
            </div>
        </Box>
    )
}

export default Newsletter
