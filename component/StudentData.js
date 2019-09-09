import React from 'react';
import {getStudentRecords} from '../Service/service';
import SideBar from './SideBar';

class StudentData extends React.Component{
    constructor(props){
        super();
        this.state = {
            records: [],
            toggleSideBar: false,
            data:null
        }
    }

    componentDidMount() {
        
        getStudentRecords()
        .then((data)=>{
            const records = this.formatRecords(data.data);
            this.setState({
                records
            })
        }).catch((err)=>{
            throw err;
        });
        
    }

    formatRecords = (data) => {
    
        const filteredClasses = data.reduce((accum, obj) => {
            const classNumber = obj.class;
            if (!accum[classNumber]) accum[classNumber] = [];
                accum[classNumber].push(obj);
            return accum;
          }, []);
        
        return filteredClasses;
    }

    groupBySection = (collection, property) => {
            var i = 0, val, index,
                values = [], result = [];
            for (; i < collection.length; i++) {
                val = collection[i][property];
                index = values.indexOf(val);
                if (index > -1)
                    result[index].push(collection[i]);
                else {
                    values.push(val);
                    result.push([collection[i]]);
                }
            }
            return result;

    }

    showSideBar = (section) => {
        this.setState({
            toggleSideBar: true,
            data: section
        })
    }

    hideSideBar = () => {
        this.setState({
            toggleSideBar: false,
            data: null
        })
    }

    renderStudentList = () => {
        let records = this.state.records;
        let list = [];
        records.forEach((record) => {
            var sectionObj = this.groupBySection(record, "section");
            list.push(
                <ul>Class {sectionObj[0][0].class}
            {sectionObj.map((section)=>{  

                        
                            return (<li key = {`${Math.random}${section[0].rollNumber}`}>Section {section[0].section}
                                {
                                   <div className="name-container"> {section.map((sec) => {
                                        return <span onClick={()=>this.showSideBar(sec)} className = {"name-content"}>{sec.name}</span>    
                                })}</div>
                            }
                    </li>)
                    

            })}
            </ul>
        )           
              
       });
       return list;
       
    }

    render(){
        const studentList = this.state.records.length > 0 ? this.renderStudentList(): '';
        return (
            <div className = "main-container">
                <div>
                    {studentList}   
                </div>
                
                    {this.state.toggleSideBar ? <SideBar hideSideBar = {this.hideSideBar} data = {this.state.data}></SideBar> : ''}     
                
            </div>
               
        )
    }
}

export default StudentData;