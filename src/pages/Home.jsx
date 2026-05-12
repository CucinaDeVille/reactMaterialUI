import { Container, Typography, Paper, Box } from '@mui/material';

export default function Template() {
    return (
        <Container maxWidth="md">
            <Typography
                variant="h4"
                gutterBottom
                align="center"
                sx={{ fontFamily: 'monospace' }}
            >
                --- AppBar ---
            </Typography>
            <Typography variant="h6" gutterBottom>
                Hier soll eine umrandete Überschrift hin.
            </Typography>
            <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Willkommen auf der Seite
                </Typography>

                <Box sx={{ mt: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                    <Typography variant="subtitle1">
                        Zusatzinfo oder Sektion
                    </Typography>
                </Box>
            </Paper>
            <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Willkommen auf der Seite
                </Typography>

                <Box sx={{ mt: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                    <Typography variant="subtitle1">
                        Zusatzinfo oder Sektion
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}