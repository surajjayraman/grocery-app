

const Header = (props) => {

    return (
        <>
        <p className="highlighted">React Review - My Friends App</p>
        <h2>{props.text}</h2>
        <div className="input-form">
            <input type="text" />
        </div>
        </>
    )

}

export default Header;