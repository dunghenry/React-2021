import React from 'react';
class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 10
        }
    }
    componentWillUnmount(){
        if(this.timer){
            clearInterval(this.timer)
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                time: this.state.time - 1
            })
        }, 1000);
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.time !== this.state.time && this.state.time === 0) {
            if(this.timer){
                clearInterval(this.timer);
                this.props.timesUp();
            }
        }
    }
    render() { 
        return (
            <>
                <h1>{this.state.time}</h1>
            </>
        );
    }
}
 
export default Countdown;