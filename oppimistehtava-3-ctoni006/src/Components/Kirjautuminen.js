import { useState } from 'react';

const Kirjautuminen = () => {
    const validUser = { nimi: 'testi', salasana: 'testi' };
    const [user, setUser] = useState({ nimi: '', salasana: '' });

    const kirjaudu = () => {
        if (user.nimi === validUser.nimi && user.salasana === validUser.salasana) {
            return <div> Olet kirjautunut sisään tunnuksella: {user.nimi};
                <button
                    onClick={() => {
                        setUser({ nimi: '', salasana: '' });
                    }}>
                    Kirjaudu ulos
                </button>
            </div>
        } else return (
            <div style={{
                width: '100%',
                backgroundColor: 'lightgreen',
                marginTop: '20px',
                height: 'fit-content'
            }}>
                <input
                    style={{
                        marginTop: '10px',
                        width: '90%'
                    }}
                    type='text'
                    value={user.nimi}
                    onChange={e => setUser({ ...user, nimi: e.target.value })} />
                <br />
                <input
                    style={{
                        marginTop: '10px',
                        width: '90%'
                    }}
                    type='password'
                    value={user.salasana}
                    onChange={e => setUser({ ...user, salasana: e.target.value })} />
                <br />
                <button
                    style={{
                        marginTop: '10px',
                        width: '70px',
                        fontWeight: '700',
                        marginLeft: '40%'
                    }}
                    onClick={kirjaudu}>
                    Kirjaudu
                </button>
                <p>{user.nimi} {user.salasana}</p>
            </div >
        )
    }
    return (
        <div style={{
            width: '100%',
            backgroundColor: 'lightgreen',
            marginTop: '20px',
            height: 'fit-content'
        }}>
            <input
                style={{
                    marginTop: '10px',
                    width: '90%'
                }}
                type='text'
                value={user.nimi}
                onChange={e => setUser({ ...user, nimi: e.target.value })} />
            <br />
            <input
                style={{
                    marginTop: '10px',
                    width: '90%'
                }}
                type='password'
                value={user.salasana}
                onChange={e => setUser({ ...user, salasana: e.target.value })} />
            <br />
            <button
                style={{
                    marginTop: '10px',
                    width: '70px',
                    fontWeight: '700',
                    marginLeft: '40%'
                }}
                onClick={kirjaudu}>
                Kirjaudu
            </button>
            <p>{user.nimi} {user.salasana}</p>
        </div >
    )

}
export default Kirjautuminen
/*
       <input type='text' onChange={(e) => { setNimi(e.target.value) }} />
    <input type='text' onChange={(e) => { setSalasana((e.target.value)) }} />
    <button onClick={() => { kirjaudu(nimi, salasana) }}>Kirjaudu</button>  
*/