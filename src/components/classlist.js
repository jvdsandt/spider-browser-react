import React from "react";

class ClassList extends React.Component {
  constructor(props) {
    super(props);
    this.selectClass = this.selectClass.bind(this);
  }

  selectClass(clazz) {}

  render() {
    return (
      <div>
        <h2>Classes</h2>
        <ul>
          {this.props.classes.map(each => (
            <li>
              <a href="#" onClick={e => this.selecClass(each)}>
                {each.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClassList;
