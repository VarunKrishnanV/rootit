// import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


function Home() {
    return (
        <div>
            <div>Home</div>
            
            {/* <Box sx={{ flexGrow: 1 }}> */}
                <Grid container spacing={2}>
                    <Grid xs={6} md={8}>
                        <>xs=6 md=8</>
                    </Grid>
                    <Grid xs={6} md={4}>
                        <>xs=6 md=4</>
                    </Grid>
                    <Grid xs={6} md={4}>
                        <>xs=6 md=4</>
                    </Grid>
                    <Grid xs={6} md={8}>
                        <>xs=6 md=8</>
                    </Grid>
                </Grid>
            {/* </Box> */}

        </div>
    )
}

export default Home