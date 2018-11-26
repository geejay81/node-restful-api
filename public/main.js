var Dinosaurs = React.createClass({
  getInitialState: function() {
    return {
      dinosaurs: []
    };
  },
  render: function() {
    var dinosaurs = this.state.dinosaurs;

    dinosaurs = dinosaurs.map((dinosaur, index) => {
      return (
        <tr key={index}>
          <td>{dinosaur.name}</td>
          <td>{dinosaur.type}</td>
          <td>{dinosaur.length}</td>
          <td>{dinosaur.diet}</td>
          <td>{dinosaur.whenItLived}</td>
          <td>{dinosaur.foundIn}</td>
        </tr>
      );
    });

    return (
      <div>
        <div className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Dinosaur Database</h1>
              <form id="search" onSubmit={this.handleSearch}>
                <div className="field">
                  <label for="searchString">Search:</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      ref="searchString"
                      name="searchString"
                      id="searchString"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="button is-primary is-inverted is-outlined is-rounded"
                      type="submit"
                      value="Find Dinosaurs"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <table className="table is-fullwidth is-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Length (m)</th>
              <th>Diet</th>
              <th>When it lived</th>
              <th>Found in</th>
            </tr>
          </thead>
          <tbody>{dinosaurs}</tbody>
        </table>
      </div>
    );
  },
  handleSearch: function(e) {
    e.preventDefault();

    var searchString = this.refs.searchString.value;

    fetch("/api/dinosaurs?searchString=" + encodeURI(searchString))
      .then(function(data) {
        return data.json();
      })
      .then(json => {
        this.setState({
            dinosaurs: json
        });

        if (json.length > 0) {
            this.setState({
                dinosaurs: json
            });
        }
      });
  }
});

ReactDOM.render(<Dinosaurs />, document.getElementById("app-dinosaurs"));
