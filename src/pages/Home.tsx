import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import '../scss/pages/Home.scss';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: "300px",
  height: "300px",
  display: "flex",
}));

function Home() {
  return (
    <Box sx={{ flexGrow: 1, margin: "auto", padding: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid size={{ xs: 12, sm: 3 }} sx={{ textAlign: "left" }}>
          <Item sx={{ position: "relative" }}>
            <div className="grid-price-tag">
                <h3>635$</h3>
            </div>
          </Item>
          <h2>London</h2>
          <h3>Mar 7 - Mar 14</h3>
        </Grid>
        <Grid size={{ xs: 12, sm: 3 }} sx={{ textAlign: "left" }}>
          <Item sx={{ position: "relative" }}>
            <div className="grid-price-tag">
                <h3>635$</h3>
            </div>
          </Item>
          <h2>London</h2>
          <h3>Mar 7 - Mar 14</h3>
        </Grid>
        <Grid size={{ xs: 12, sm: 3 }} sx={{ textAlign: "left" }}>
          <Item sx={{ position: "relative" }}>
            <div className="grid-price-tag">
                <h3>635$</h3>
            </div>
          </Item>
          <h2>London</h2>
          <h3>Mar 7 - Mar 14</h3>
        </Grid>
        <Grid size={{ xs: 12, sm: 3 }} sx={{ textAlign: "left" }}>
          <Item sx={{ position: "relative" }}>
            <div className="grid-price-tag">
                <h3>635$</h3>
            </div>
          </Item>
          <h2>London</h2>
          <h3>Mar 7 - Mar 14</h3>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;