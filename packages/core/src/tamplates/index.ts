import { useConfetti } from './confetti';
import { useTrippy } from './trippy';
import { useFireworks } from './fireworks';
import { useStarfield } from './starfield';
import { useTvSnow } from './tvSnow';
import { useUnderground } from './undergournd';

export const tamplates = {
  confetti: useConfetti,
  tvSnow: useTvSnow,
  trippy: useTrippy,
  fireworks: useFireworks,
  starfield: useStarfield,
  underground: useUnderground
};
