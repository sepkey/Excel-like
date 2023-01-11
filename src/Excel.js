import React, { Component } from "react";
import { Box, Table } from "@mantine/core";
import { Input } from "@mantine/core";

function clone(o) {
  return JSON.parse(JSON.stringify(o));
}

export default class Excel extends Component {
  constructor(props) {
    super();
    this.state = {
      data: props.initialData,
      sortby: null,
      descending: false,
      edit: null,
    };
    this.sort = this.sort.bind(this);
    this.showEditor = this.showEditor.bind(this);
    this.save = this.save.bind(this);
  }

  sort(e) {
    const column = e.target.cellIndex;
    const data = clone(this.state.data);
    const descending = this.state.sortby === column && !this.state.descending;

    data.sort((a, b) => {
      if (a[column] === b[column]) {
        return 0;
      }
      return descending
        ? a[column] > b[column]
          ? 1
          : -1
        : a[column] > b[column]
        ? -1
        : 1;
    });

    this.setState({
      data,
      sortby: column,
      descending,
    });
  }

  showEditor(e) {
    this.setState({
      edit: {
        row: parseInt(e.target.parentNode.dataset.row, 10),
        column: e.target.cellIndex,
      },
    });
  }

  save(e) {
    e.preventDefault();
    const input = e.target.firstChild.firstChild;
    console.log(input);
    const data = clone(this.state.data);
    data[this.state.edit.row][this.state.edit.column] = input.value;
    this.setState({
      edit: null,
      data,
    });
  }

  render() {
    const edit = this.state.edit;
    return (
      <Box>
        <Table withBorder>
          <thead onClick={this.sort}>
            <tr>
              {this.props.headers.map((title, index) => {
                if (this.state.sortby === index) {
                  title += this.state.descending ? " \u2191" : " \u2193";
                }
                return <th key={index}>{title}</th>;
              })}
            </tr>
          </thead>
          <tbody onDoubleClick={this.showEditor}>
            {this.state.data.map((row, roxIndex) => {
              return (
                <tr key={roxIndex} data-row={roxIndex}>
                  {row.map((item, colIndex) => {
                    return edit &&
                      roxIndex === edit.row &&
                      colIndex === edit.column ? (
                      <td key={colIndex}>
                        <form onSubmit={this.save}>
                          <Input radius="xs" type="text" defaultValue={item} />
                        </form>
                      </td>
                    ) : (
                      <td key={colIndex}>{item}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Box>
    );
  }
}
