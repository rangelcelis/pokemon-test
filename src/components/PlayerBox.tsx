import { Grid2 as Grid, Box, Typography } from '@mui/material';
import MovementTag from './MovementTag';
import { Player } from 'src/types/player';

type PlayerBoxType = {
  player: Player;
  index: number;
};

const PlayerBox = ({ player, index }: PlayerBoxType) => {
  return (
    <Grid
      container
      flexDirection={index === 0 ? 'row' : 'row-reverse'}
      justifyContent="space-around"
    >
      <Grid
        container
        flexDirection="row"
        border="1px solid grey"
        alignItems="center"
        paddingX={4}
        justifyContent="space-between"
        spacing={10}
      >
        <Box>
          <Typography variant="h4" textTransform="capitalize">
            {player.name}
          </Typography>
        </Box>
        <Box>
          <MovementTag move={player.move} />
        </Box>
      </Grid>
      <Grid>
        <img
          src={index === 0 ? player.sprites.front_default : player.sprites.back_default}
          alt={player.name}
        />
      </Grid>
    </Grid>
  );
};

export default PlayerBox;
