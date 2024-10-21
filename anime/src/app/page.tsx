import Header1 from "@/Components/Header1/Header1";
import ListaMelhoresAnimes from "@/Components/MelhoresAnimesLista/MelhoresAnimesLista";

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
            <input type="text" id="Input" />
          </div>
        </div>
      </header>
      <main>
        <ListaMelhoresAnimes />
        
      </main>
    </div>
  );
}
