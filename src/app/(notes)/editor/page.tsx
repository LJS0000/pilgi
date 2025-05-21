import { Canvas } from '@components/feature';
import { Toolbar } from '@components/feature';

const EditorPage = () => {
  return (
    <div>
      <div>
        <button onClick={() => history.back()}>⬅️</button>
      </div>
      <Toolbar />
      <Canvas />
    </div>
  );
};

export default EditorPage;
