
class ColorBox extends React.Component {
    constructor(props){
        super(props)
        // let colorArray = colors(1,5)
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
        },2000)
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
            height: '100vh',
            backgroundColor: `${this.state.hexCode}`,
            cursor: 'pointer'
        }
        return <div style={styles} onClick={this.lockBox}/>
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

ReactDOM.render(<ColorRow />, document.getElementById('root'))