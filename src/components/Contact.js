const FORM_ENDPOINT = "https://public.herotofu.com/v1/2183a670-3e5d-11ed-a10f-d1a38bd15d37"

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__form">
                <h4 className="subheading">Kontakta mig</h4>
                <form className="form" action={FORM_ENDPOINT} method="POST">
                    <label htmlFor="name"></label>
                    <input className="input" name="name" type="text" required placeholder="Ditt namn.." />

                    <label htmlFor="email"></label>
                    <input className="input" name="email" type="text" required placeholder="Din email.." />

                    <label htmlFor="message"></label>
                    <input className="meddelande" name="message" type="textarea" required placeholder="Ditt meddelande här.." />
                    <button type="submit">Skicka</button>
                </form>
            </div>
        </div>
    )
}

export default Contact