import {Composition} from 'remotion';
import {MainVideo} from './Video';

export const Root = () => {
  return (
    <Composition
      id="VideoGiris"
      component={MainVideo}
      durationInFrames={150}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
