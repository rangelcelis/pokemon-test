import { atom, selector } from 'recoil';
import { Player } from 'src/types/player';

export const waitingBattleAtom = atom<boolean>({
  key: 'waitingBattle',
  default: true,
});

export const playersAtom = atom<Player[]>({
  key: 'players',
  default: [],
});

export const messageSelector = selector({
  key: 'message',
  get({ get }) {
    const selectedPlayers = get(playersAtom);
    const waitingBattle = get(waitingBattleAtom);

    const p1 = selectedPlayers[0];
    const p2 = selectedPlayers[1];

    if (waitingBattle) {
      return 'Waiting...';
    }

    if (p1.move.power > p2.move.power) {
      return `${p1.name} lands a decisive blow with ${p1.move.name} knocking out ${p2.name}!`;
    } else if (p1.move.power < p2.move.power) {
      return `${p2.name} lands a decisive blow with ${p2.move.name} knocking out ${p1.name}!`;
    }

    return 'Draw';
  },
});
