import Widget from "./Widget";

const WidgetsBlock = () => {
  return (
    <div className="widgets-container">
      <Widget title="Weather" />
      <Widget title="Media" />
      <Widget title="TV-program" />
    </div>
  );
};

export default WidgetsBlock;
