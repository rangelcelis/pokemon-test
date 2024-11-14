import { Chip } from '@mui/material';

type MovementTagType = {
  move: {
    name: string;
    power: number;
  };
};

const MovementTag = ({ move }: MovementTagType) => {
  return <Chip label={`${move.name}: ${move.power || 0}`} color="success" />;
};

export default MovementTag;
