import React from 'react';
//import styles from '../../styles/App.scss';
import styles from '../../styles/MemberTable.scss';
import * as constants from '../constants';

//const MemberTable = (members) => {
const MemberTable = ({members}) => {
  var tags = [];

  console.log("JSON.stringify(constants.MEMBER)")
  console.log(JSON.stringify(constants.MEMBER))
  console.log(members)
  console.log(Object.keys(constants.MEMBER))

  var columns = [];
  Object.keys(constants.MEMBER).map((k,idx) => {
    columns.push(<td>{constants.MEMBER[k]}</td>)
  })

  members.forEach((member)=>{
    tags.push(
      <tr key={member.id}>
        {
          Object.keys(member).map((k,idx)=>{
            return <td>{member[k]}</td>
          })
        }
      </tr>
    )});
  console.log("JSON.stringify(tags)")
  console.log(tags)

  return (
  <table>
    <thead>
      <tr>{columns}</tr>
    </thead>
    <tbody>
      {tags}
    </tbody>
  </table>
  );
}
  //return (
  //<table>
  //  <thead>
  //    <tr>
  //      <td>番号</td>
  //      <td>班</td>
  //      <td>氏名</td>
  //      <td>ふりがな</td>
  //      <td>霊名</td>
  //      <td>生年月日</td>
  //      <td>電話</td>
  //      <td>郵便番号</td>
  //      <td>住所</td>
  //      <td>備考</td>
  //    </tr>
  //  </thead>
  //  <tbody>
  //    {tags}
  //  </tbody>
  //</table>
  //);

  //members.forEach((member)=>{
  //  tags.push(
  //  <tr key={member.id}>
  //    <td>{member.id}</td>
  //    <td>{member.group}</td>
  //    <td>{member.name}</td>
  //    <td>{member.pronounce}</td>
  //    <td>{member.spiritualName}</td>
  //    <td>{member.birthday}</td>
  //    <td>{member.telephone}</td>
  //    <td>{member.postcode}</td>
  //    <td>{member.address}</td>
  //    <td>{member.info}</td>
  //  </tr>
  //  );
  //});

export default MemberTable;
