import me from '../img/me.jpg'
const About = () => {
    return (
        <div className="about">
            <div className="about-div">
                <div className="about-div-info">
                    <h3 className="subheading">Om filmen</h3>
                    <p className="about-parag"> Hur ser Sveriges skogar ut? Den frågan ställde jag mig själv för några år 
                    sedan när jag såg en dokumentär om Sveriges gammelskogar. Att det skulle vara skillnad på skog och 
                    skog där skogen var uppdelad med planterade områden och så kallade gammelskogar var helt nytt för mig.
                     När jag skulle skapa en 10 minuters dokumentär i våras valde jag att utforska ämnet för att försöka 
                     få en helhetsbild av hur den svenska skogen förvaltas. Under skapandet av filmen har jag rest runt i 
                     Sverige och besökt allt ifrån naturskogar till kalhyggen. Under min resa har jag intervjuat människor 
                     som arbetar med skog samt arbetar för att bevara den som har fått ge sin bild av den svenska skogen och 
                     dess industri. Resultatet av dessa möten är filmen ovan. </p>
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
                    <p className="about-parag">
                    Mitt namn är Linnea Andersson jag är 23 år gammal och studerar för närvarande civilingenjör i 
                    design och produktutveckling på Linköpings universitet. Tidigare har jag läst ett år på biologprogrammet 
                    där. Från barnsben har jag haft ett intresse för naturen och tidigt föddes en dröm att någon gång 
                    göra naturdokumentärer som David Attenborough. I våras fann jag Naturfilmarnas förening och deras 
                    filmkurs där jag såg möjligheten att förverkliga min dröm i min examensfilm Sanningen om skogen.
 </p>
                </div>
            </div>
        </div>
    )
}

export default About;