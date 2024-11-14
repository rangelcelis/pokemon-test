import React, { useEffect, useState } from 'react';
import { Grid2 as Grid, Container, Stack, Box, Typography, Button } from '@mui/material';
import PlayerBox from 'src/components/PlayerBox';
import { getInitialData } from 'src/services/api-pokemon';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { playersAtom, messageSelector, waitingBattleAtom } from 'src/context/state';

function BattlePage() {
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useRecoilState(playersAtom);

  const winnerMessage = useRecoilValue(messageSelector);
  const setIsWaiting = useSetRecoilState(waitingBattleAtom);

  const getPlayers = async () => {
    const pokemonList = await getInitialData();
    setPlayers(pokemonList);
    setIsWaiting(true);
    setLoading(false);
  };

  useEffect(() => {
    getPlayers();
  }, []);

  return !loading ? (
    <Container maxWidth="md">
      <Stack padding={2} spacing={2} width="100%" border="1px solid black">
        {players.map((player, index) => {
          return <PlayerBox key={'i_' + index} player={player} index={index} />;
        })}
      </Stack>

      <Stack marginTop={2}>
        <Typography variant="h4">Battle Log</Typography>

        <Grid container direction="row" spacing={2}>
          <Box border={'1px solid black'} width={400} height={100}>
            {winnerMessage}
          </Box>
          <Stack spacing={1}>
            <Button variant="contained" onClick={() => setIsWaiting(false)}>
              Start Battle!
            </Button>
            <Button variant="outlined" onClick={() => getPlayers()}>
              New Battle?
            </Button>
          </Stack>
        </Grid>
      </Stack>
    </Container>
  ) : null;
}

export default BattlePage;
