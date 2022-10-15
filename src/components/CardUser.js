function CardUser(props) {
  return (
    <div>
      <div
        style={{ width: "100%", height: "130px", background: props.oboi }}
      ></div>
      <img className="kairat" src={props.foto} alt="img" />
      <div>{props.user}</div>
    </div>
  );
}
export default CardUser;
