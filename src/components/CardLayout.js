import "./CardLayout.css";

function CardLayout(props) {
  return (
    <div className="wrapper">
      <div>{props.children}</div>
    </div>
  );
}

export default CardLayout;
