
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
                hexCode: 'hsl('+ Math.floor(Math.random() * 360).toString(16)+',80%,70%)',
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
        console.log(this.state.hexcode)
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
        return <div style={styles} onMouseDown={this.lockBox}><i style={iconStyle} className="fas fa-lock"></i></div>
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
