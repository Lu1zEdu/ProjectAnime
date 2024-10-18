import Carousel1 from "@/Components/Carousel1/Carousel1";
import Header1 from "@/Components/Header1/Header1";
import Lista1 from "@/Components/Lista1/Lista1";

export default function Home() {
  return (
    <div className="BodyHome">
      <header className="HeaderHome">
        <Header1 />
        <div className="InputTotal">
          <div className="InputList">
            <input type="TiposDePesquisa" list="Lista" />
            <datalist id="Lista">
              <option value="Anime">Anime</option>
              <option value="Manga">Manga</option>
            </datalist>
          </div>
          <div className="InputA">
            <input type="text" id="" />
          </div>
        </div>
      </header>
      <main>
        <Lista1 />
        <Carousel1 />
      </main>
    </div>
  );
}
