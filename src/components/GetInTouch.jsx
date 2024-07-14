import "./../index.css"
import Container from '@mui/material/Container';
import Grid from "@mui/material/Unstable_Grid2";
// Grid version 2
function GetInTouch() {
    return (
            <Container maxWidth="lg" className="git__container">
                <Grid container spacing={2} className="principle">
                    <Grid xs={12} md={2} lg={1}>
                        <div className="principle__imageContainer">

                        </div>
                    </Grid>
                    <Grid xs={12} md={12}>
                        <h3 className="text-md">Let&apos;s Discuss</h3>
                        <p className="principle__description text-semi">We&apos;d love to hear from you !</p>
                    </Grid>

                </Grid>
            </Container>
    )
}

export default GetInTouch