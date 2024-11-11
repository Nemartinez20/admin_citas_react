import Form from "./components/Form";
import Citas from "./components/Citas";

function App() {
  return (
    <>
      <main className="main">
        <h2 className="titulo">Adminisrador de Citas</h2>
        <section className="conteiner">
          <div className="container__form item">
            <Form />
          </div>
          <div className="container__citas item">
            <Citas />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
