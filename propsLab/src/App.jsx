import "./App.css";
import Navbar from "./component/Navbar";
import Footerbar from "./component/Footerbar";
import Card from "./component/Card";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
       
        <div className="flex-grow-1 container text-center my-5">
        <p>Browse My Recent</p>
        <h1>Projects</h1>
          <div className="row">
            <div className="col-md-4">
              <Card
                src="https://tunora.netlify.app/assets/Blue%20White%20Digitalism%20Basic%20Simple%20Presentation.png"
                title="AmanID"
                item1="JAVA"
                item2="XML"
                item3="FIREBASE"
                ditail = "My graduated project."
              />
            </div>
            <div className="col-md-4">
              <Card
                src="https://tunora.netlify.app/assets/Blue%20White%20Digitalism%20Basic%20Simple%20Presentation-3.png"
                title="Web Development"
                item1="HTML"
                item2="CSS"
                item3="JS"
                ditail = "I do this project just for fun 😆"
              />
            </div>
            <div className="col-md-4">
              <Card
                src="https://tunora.netlify.app/assets/Blue%20White%20Digitalism%20Basic%20Simple%20Presentation-2.png"
                title="Web Devloment"
                item1="JAVA"
                item2="XML"
                item3="FIREBASE"
                ditail = "Sushi restrant web site "
              />
            </div>
            <div className="col-md-4">
              <Card
                src="https://user-images.githubusercontent.com/6929121/87441911-486bf600-c611-11ea-9d45-94c215733cf7.png"
                title="...."
                item1="JS"
                item2="REACT"
                item3="API"
                ditail="Project coming soon"
              />
            </div>
            <div className="col-md-4">
              <Card
                src="https://user-images.githubusercontent.com/6929121/87441911-486bf600-c611-11ea-9d45-94c215733cf7.png"
                title="...."
                item1="JS"
                item2="REACT"
                item3="NEXT JS"
                ditail="Project coming soon"
              />
            </div>
          </div>
        </div>
        <Footerbar />
      </div>
    </>
  );
}

export default App;
