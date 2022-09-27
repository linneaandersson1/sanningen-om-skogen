
const Herosec = () => {
    return (
        <section className="hero">
            <div className="hero-div">
                <div className="hero-headings">
                    <h1 className="hero-heading">Sanningen om skogen</h1>
                    {/* <h2 className="hero-citat">Citat</h2> */}
                </div>
                
                <div className="hero-vid">
                    <div className="vid-container"><iframe src="https://www.youtube.com/embed/b3y9Wh6zFF8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} className="video"></iframe></div>
                </div>
                {/* <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fsanningen-om-skogen-lklh.vercel.app%2F&layout=button&size=large&width=77&height=28&appId" width="77" height="28" style="border:none;overflow:hidden" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
            </div>
        </section>
    )
}

export default Herosec;