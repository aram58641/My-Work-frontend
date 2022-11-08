import HomePage from "./HomePage/HomePage";
import Main from "./Leyouts/Main";

export default function App({ posts }) {
    return (
        <>
            <Main>
                <HomePage data={posts} />
            </Main>
        </>
    );
}
