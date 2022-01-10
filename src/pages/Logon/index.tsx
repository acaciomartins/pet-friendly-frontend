import './styles.css';

export default function Logon() {
    return (
        <>
            <div className="container">
                <div className="logo">Pet Friendly</div>
                <div className="login-item">
                    <form className="form form-login">
                        <div className="form-field">
                            {/* <label className="user"><span className="hidden">Usuário</span></label> */}
                            <input id="login-username" type="text" className="form-input" placeholder="Usuário" required />
                        </div>

                        <div className="form-field">
                            {/* <label className="lock"><span className="hidden">Senha</span></label> */}
                            <input id="login-password" type="password" className="form-input" placeholder="Senha" required />
                        </div>

                        <div className="form-field">
                            <input type="submit" value="Log in" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}