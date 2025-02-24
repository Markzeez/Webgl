import WebGLScene from "./Component/WebglScene";
const App: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
    <h1 className="text-3xl font-bold">WebGL with React</h1>
    <WebGLScene />
  </div>
);

export default App;
