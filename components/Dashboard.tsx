/** @jsxImportSource theme-ui */
import useSWR from 'swr'
import { Box, Grid, Text } from 'theme-ui'

export default function Dashboard() {
    const fetcher = (args) => fetch(args).then((res) => res.json())
    const { data, error } = useSWR('/api/youtube', fetcher)

    if (!data) return 'I am loading'
    if (error) return 'there is an error'

    return (
        <div sx={{ height: `calc(100vh - 120px)`, maxWidth: '70%', ml: 'auto', mr: 'auto' }}>
            <Text>Home</Text>

            <Grid gap={2} columns={[1, null, 2]}>
                <Box bg="primary">{data.viewCount}</Box>
                <Box bg="muted">{data.subscriberCount}</Box>
                <Box bg="primary">Box</Box>
                <Box bg="muted">Box</Box>
            </Grid>
        </div>
    )
}
