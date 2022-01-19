import React from 'react';
import AddComponent from './AddComponent';
import ChildComponent from './ChildComponent'
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [
                {id: '001', title: "Developer", salary: 1000},
                {id: '002', title: "Tester", salary: 800},
                {id: '003', title: "Project Manager", salary: 2000},
            ],
        }
    }
    addNewJob = (job) =>{
        this.setState({
            jobs : [...this.state.jobs, job]
        })
        // console.log(job)
    }

    deleteJob = (job) =>{
        let currentJob = this.state.jobs;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            jobs: currentJob
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", prevState, this.state)
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    render() { 
        console.log("render")
        return (
            <div>
                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent jobs={this.state.jobs} deleteJob={this.deleteJob}/>
            </div>
        );
    }
}
 
export default MyComponent;