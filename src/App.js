import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
function App() {
  
  
  return (
      <>
        <Header />

        <main>
          <Post title="Meu primeiro post" readingTime={5}>
            <p>Introdução </p>
            <p>Desenvolvimento da idéia..</p>
            <p>Conclusão...</p>
          </Post>

          <Post title="Meu segundo post" readingTime={1}>
            <p>
              <em> Texto em itálico </em>
            </p>
          </Post>
         
        </main>

        <Footer />
      </>
   
  );
}

export default App;
