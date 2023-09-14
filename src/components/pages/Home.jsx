import Headers from "../layout/Headers";
import Sidebar from "../layout/Sidebar";
import Content from "../layout/Content";
import Footer from "../layout/Footer";

const home = () => {
  return (
    <>
      <Headers />
      <div id='main'>
        <Sidebar />
        <Content>
          <h1>Home</h1>
        </Content>
      </div>
      <Footer />
    </>
  )
}

export default home