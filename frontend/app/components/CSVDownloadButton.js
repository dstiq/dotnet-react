import {CSVLink} from 'react-csv';
import React, { Component } from 'react';
import {columnsIndexName, columnsStringName} from './OutputData/ExampleData';
import { connect } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import {CSVToArrayFunc} from './CSVToArrayHelper';

const headers = [
    {label: columnsStringName.DATE, key: columnsIndexName.DATE},
    {label: columnsStringName.EARNINGS, key: columnsIndexName.EARNINGS},
    {label: columnsStringName.PRECIOUS_METALS, key: columnsIndexName.PRECIOUS_METALS},
    {label: columnsStringName.MMVB, key: columnsIndexName.MMVB},
];

const dataExample = [
    {[columnsIndexName.DATE]: 'Ahmed', [columnsIndexName.EARNINGS]: 'Tomi' , [columnsIndexName.PRECIOUS_METALS]: 'ah@smthing.co.com', [columnsIndexName.MMVB]: 'ah@smthing.co.com'},
    {[columnsIndexName.DATE]:'Raed', [columnsIndexName.EARNINGS]:'Labes' , [columnsIndexName.PRECIOUS_METALS]:'rl@smthing.co.com', [columnsIndexName.MMVB]: 'ah@smthing.co.com'} ,
    {[columnsIndexName.DATE]:'Yezzi', [columnsIndexName.EARNINGS]:'Min l3b', [columnsIndexName.PRECIOUS_METALS]:'ymin@cocococo.com', [columnsIndexName.MMVB]: 'ah@smthing.co.com'}
];
const CSVDownloadButton = ({dataGrid}) => {

   const handleFiles = files => {
       var reader = new FileReader();
       reader.onload = function(e) {
           alert(reader.result)
           const finishResult = CSVToArrayFunc(reader.result);
           console.log(finishResult)
       };

       reader.readAsText(files[0]);

    };

    const gridLayout = dataGrid.data;

   return (
       <ul>
           <button className="gridButton">
               <CSVLink data={dataExample} headers={headers}>
                   Download me
               </CSVLink>
           </button>
           <li>
               <ReactFileReader handleFiles={handleFiles}>
                    <button className="gridButton">Upload</button>
                </ReactFileReader>
           </li>
       </ul>
   )
 };

const mapStateToProps = (state) => ({
    dataGrid: state.data
});

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CSVDownloadButton);