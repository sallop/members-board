import React from 'react';
//import styles from '../../styles/App.scss';
import styles from '../../styles/MemberTable.scss';

const MemberTable = ({members}) => {
  var tags = [];

  console.log(members)

  members.forEach((member)=>{
    tags.push(
    <tr key={member.id}>
      <td>{member.id}</td>
      <td>{member.group}</td>
      <td>{member.name}</td>
      <td>{member.pronounce}</td>
      <td>{member.spiritualName}</td>
      <td>{member.birthday}</td>
      <td>{member.telephone}</td>
      <td>{member.postcode}</td>
      <td>{member.address}</td>
      <td>{member.info}</td>
    </tr>
    );
  });

  return (
  <table>
    <thead>
      <tr>
        <td>番号</td>
        <td>班</td>
        <td>氏名</td>
        <td>ふりがな</td>
        <td>霊名</td>
        <td>生年月日</td>
        <td>電話</td>
        <td>郵便番号</td>
        <td>住所</td>
        <td>備考</td>
      </tr>
    </thead>
    <tbody>
      {tags}
    </tbody>
  </table>
  );
}

export default MemberTable;
