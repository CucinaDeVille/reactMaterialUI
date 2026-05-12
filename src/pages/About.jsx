import { Container, Typography, Paper, Box } from "@mui/material";

export default function About() {
    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
                <Typography variant="h4" gutterBottom>
                    About
                </Typography>

                <Box sx={{ mt: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                    <Box
                        component="img"
                        src="https://i.imgur.com/n2fP4fH.jpg"
                        alt="Produktbild"
                        sx={{
                            width: '50%',
                            height: 'auto',
                            borderRadius: 5,
                            objectFit: 'cover',
                            float: 'left',
                            marginRight: 3,
                            marginBottom: 1
                        }}
                    />

                    <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
                        Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu
                        nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper,
                        ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.
                        Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque.
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}