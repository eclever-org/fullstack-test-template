import { Map } from "./Map";

// TODO (candidate): Zustand store, capital list, add/edit/delete, markers (see README)
export function App() {
  return (
    <div className="layout">
      <aside className="sidebar"><h2>Capitals</h2></aside>
      <Map />
    </div>
  );
}
