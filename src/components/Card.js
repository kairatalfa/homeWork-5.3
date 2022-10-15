import CardUser from "./CardUser";
import CardAboutUser from "./CardAboutUser";
import CardLayout from "./CardLayout";

function Card(props) {
    console.log(props);
  return (
    <CardLayout>
      <div >
        <CardUser user={props.obj.username}   foto={props.obj.profilePic} oboi={props.obj.wallpaper} />
      </div>
      <div>
        <CardAboutUser    about={props.obj.userInfo} />
      </div>
    </CardLayout>
  );
}

export default Card;
