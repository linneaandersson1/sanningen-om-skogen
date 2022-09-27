import me from '../img/me.jpg'
const About = () => {
    return (
        <div className="about">
            <div className="about-div">
                <div className="about-div-info">
                    <h3 className="subheading">Om filmen</h3>
                    <p className="about-parag"> Det är jag som skaparen bakom dokumentären ”Sanningen om skogen”. Från
barnsben har jag haft ett intresse för naturen i allmänhet och skogen i synnerhet så när jag fick
möjligheten att göra en naturfilm om just skogen kunde jag inte tacka nej. Allt började med att jag
gick en kurs om naturfilm där jag fick lära mig grunderna och sen har jag tagit den bollen och sprungit
med. Under skapandet av filmen har jag rest runt i Sverige och besökt diverse skogar, allt från
naturskogar till kalhyggen. Drivkraften bakom filmen var att jag ville skapa mig en helhetsbild av hur
olika aktörer (från skogsägare till aktivister) inom skogsindustrin ser på skogsbruk. Slutprodukten är
filmen ovan. </p>
                </div>
                {/* <div className="about-div-info">
                    <h3 className="about-header">Om filmen</h3>
                    <p className="about-parag">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore
                         magna aliqua. Ut enim ad minim veniam, </p>
                </div> */}
                <div className="about-div-info">
                    <img src={me} alt="bild"></img>
                    <h3 className="subheading">Om mig</h3>
                    <p className="about-parag">Mitt namn är Linnea Andersson jag är 23 år gammal och studerar för närvarande civilingenjör med
inriktning design och produktutveckling på Linköpings universitet. Tidigare har jag läst biologi på
Linköpings universitet., </p>
                </div>
            </div>
        </div>
    )
}

export default About;