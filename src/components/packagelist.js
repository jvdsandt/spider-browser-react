import React from "react";

class PackageList extends React.Component {
    constructor(props) {
        super(props);
        this.selectPackage = this.selectPackage.bind(this);
    }

    selectPackage(pack) {
        this.props.onSelectionChange(pack);
    }

    render() {
        return (
            <div>
                <h2>Packages</h2>
                <ul className={"spider-list"}>
                    {this.props.packages.map(each => (
                        <li key={each.id}>
                            <button onClick={e => this.selectPackage(each)}>
                                {each.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PackageList;
