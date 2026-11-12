
import {AbsoluteFill, useCurrentFrame} from 'remotion';

export const MainVideo = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0f172a',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#38bdf8',
        fontSize: 50,
        fontFamily: 'Helvetica',
        textAlign: 'center',
        padding: 40,
      }}
    >
      <div>GitHub & Colab Otomasyonu</div>
      <div style={{fontSize: 25, marginTop: 20, color: '#f43f5e'}}>
        Sıfırdan Repo ve Video Üretimi - Frame: {frame}
      </div>
    </AbsoluteFill>
  );
};
