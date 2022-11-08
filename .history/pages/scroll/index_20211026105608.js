import Content from "./Content";
import data from "../Json/Products.json";
export default function index(props) {
  return (
    <>
      <div>
        <Content data={props.data} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  ).then((response) => response.json());
  return {
    props: { data }
  };
};
