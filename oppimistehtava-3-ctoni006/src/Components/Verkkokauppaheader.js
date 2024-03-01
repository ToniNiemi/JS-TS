function Verkkokauppaheader(props) {
    return (
        <div style={{
            width: '100%',
            minheight: '100px',
            backgroundColor: 'yellow',
            textAlign: 'center',
            borderRadius: '5px'
        }}
        >
            <h1>{props.children}</h1>
        </div>
    )
}

export default Verkkokauppaheader