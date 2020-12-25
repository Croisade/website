/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Label, Input, Box, Button, Text, Flex } from 'theme-ui'
import Image from 'next/image'

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
                        src="/../public/JamalLogo.png"
                        alt="Picture of the author"
                        width={150}
                        height={200}
                    />
                </Flex>
                <Text
                    sx={{
                        fontSize: 2,
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>
                    Ready to join the larva lounge?
                </Text>
                <Text
                    sx={{
                        fontSize: 1,
                        ml: 3,
                        textAlign: 'center'
                    }}>
                    Join our community for a weekly dose of our best content with updates on the
                    happenings of my life
                </Text>
                <Label htmlFor="email">email</Label>
                <Input type="email" name="email" mb={3} />
                <Flex sx={{ justifyContent: 'center' }}>
                    <Button>Submit</Button>
                </Flex>
            </div>
        </Box>
    )
}

export default Newsletter
