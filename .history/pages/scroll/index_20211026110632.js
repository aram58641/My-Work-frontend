import Content from "./Content";
import data from "../Json/Products.json";
export default function index(props) {
  return (
    <>
      <div>
        <Content data={data} />
      </div>
    </>
  );
}

};
