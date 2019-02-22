
class ColorBox extends React.Component {
    constructor(props){
        super(props)
        let initialState ={}
        this.state = initialState
        this.randomize()
    }

    randomize = () => {
        let intervalId = setInterval(() => {
            this.setState({
                hexCode: '#' + Math.floor(Math.random() * 16777215).toString(16),
                isLocked: false,
                intervalId: intervalId
            })
        },500)
    }
    
    lockBox = () => {
        if (!this.state.isLocked){
            clearInterval(this.state.intervalId)
        } else {
            this.randomize()
        }
        this.setState({
            hexCode: this.state.hexCode,
            isLocked: !this.state.isLocked,
            intervalId: this.state.intervalId
        })
    }

    render = () => {
        let styles = {
            display: 'inline-flex',
            width: '20vw',
            height: '20vh',
            backgroundColor: `${this.state.hexCode}`,
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center'
        }
        let iconStyle = {
            fontSize: '36px',
            color: 'white'
        }
        if (this.state.isLocked){iconStyle.color = 'rgba(255,255,255,0.75)'} else {iconStyle.color = 'transparent'}
        return <div style={styles} onClick={this.lockBox}><i style={iconStyle} className="fas fa-lock"></i></div>
    }
}

class ColorRow extends React.Component {

    render = () => {
        return <div>
            <ColorBox />
            <ColorBox />
            <ColorBox />
            <ColorBox />
            <ColorBox />
        </div>
    }
}

class ColorGrid extends React.Component {

    render = () => {
        return <div>
            <ColorRow />
            <ColorRow />
            <ColorRow />
            <ColorRow />
            <ColorRow />
        </div>
    }
}

ReactDOM.render(<ColorGrid />, document.getElementById('root'))