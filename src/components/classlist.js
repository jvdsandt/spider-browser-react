import React from "react";

class ClassList extends React.Component {
  constructor(props) {
    super(props);
    this.selectClass = this.selectClass.bind(this);
  }

  selectClass(clazz) {}

  render() {
    console.log(JSON.stringify(this.props.package));
    return (
      <div>
        <h2>Classes</h2>
        <ul>
          {this.props.package &&
            this.props.package.classes.map(each => (
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
