import { Box } from "@material-ui/core";
interface WelcomeProps{
    title: string
    author?: string
}

const Welcome = ({title, author = "DungHenry"}: WelcomeProps) => {
    return (
        <Box mb={1}>
            Welcome {title} by {author}
        </Box>
    )
}

export default Welcome;
