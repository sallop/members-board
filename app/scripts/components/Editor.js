import React, { Component, PropTypes } from 'react';
//import styles from '../../styles/App.scss';
//import styles from '../../styles/MemberTable.scss';
import styles from '../../styles/Editor.scss';

const InputForms = (state) => class extends Component {
  constructor(props){
    super(props);
    console.log(props);
    console.log(state);
    this.state = state;
  }

  handleChange(key, event){
    this.setState({
      [key]: event.target.value
    });
  }

  getText(key){
    return this.state[key];
  }

  render(){
    const translates = {
      id:"番号",
      group:"班",
      name:"氏名",
      pronounce:"ふりがな",
      spiritualName:"霊名",
      birthday:"生年月日",
      telephone:"電話",
      postcode:"郵便番号",
      address:"住所",
      info:"備考",
    };

    //const styles = {
    //  label: {
    //    width: '180px',
    //    clear: 'left',
    //    textAlign: 'right',
    //    paddingRight: '10px'
    //  },
    //  input: {
    //    float: 'left'
    //  }
    //};

    const tmpl = (key) => (
      <li key={key}>
        <label>{translates[key]}:
        </label>
          <input type="text" value={this.state[key]} onChange={this.handleChange.bind(this, key)} />
      </li>
    );

    const formTags = Object.keys(this.state).map(tmpl);

    console.log(`formTags = ${formTags}`);

    return (
      <div>
        {formTags}
      </div>
    );
  }
}

//const MembiiijerTable = ({members}) => {
const Editor = () => {
  var tags = [];
  var dict  = {
      id:"番号",
      group:"班",
      name:"氏名",
      pronounce:"ふりがな",
      spiritualName:"霊名",
      birthday:"生年月日",
      telephone:"電話",
      postcode:"郵便番号",
      address:"住所",
      info:"備考",
  };
  var form = (
      <form>
        <label>
          Name:<input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      );
  //return <InputForms />;
  var InputPane = InputForms({...dict});
  console.log(`${InputPane}`)
  //var InputPane = InputForms({});
  return (
    <div>
      <InputPane />
    </div>
  );

  //return (
  //  <ul>
  //    <li>番号:</li>
  //    <li>班:</li>
  //    <li>氏名:</li>
  //    <li>ふりがな:</li>
  //    <li>霊名:</li>
  //    <li>生年月日:</li>
  //    <li>電話:</li>
  //    <li>郵便番号:</li>
  //    <li>住所:</li>
  //    <li>備考:</li>
  //    <li>
  //      {form}
  //    </li>
  //  </ul>
  //);
}

export default Editor;
