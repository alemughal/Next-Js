import Link  from "next/link";
import { Header } from "../../Components";


const home = () => {
  return (
    <>
      <Header />
      <h1>Hello World from Next JS</h1>
      <a href="/blog">Go to Blog</a>
      <br />
      <Link href="/blog"> Go to Blog with Link</Link>
    </>
  );
};


export default home;
