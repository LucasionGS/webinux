import { Rnd } from "react-rnd";

function DraggableWindow() {
  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: 320,
        height: 200,
      }}
      bounds="parent"
    >
      <div className="window">
        <div className="title-bar">My Application</div>
        <div className="content">Hello, World!</div>
      </div>
    </Rnd>
  );
}
