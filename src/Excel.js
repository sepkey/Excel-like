import React, { Component } from "react";
import { Button, Table, Input } from "@mantine/core";
import { TbListSearch, TbFileExport } from "react-icons/tb";
import "./Excel.css";

function clone(o) {
  return JSON.parse(JSON.stringify(o));
}

export default class Excel extends Component {
  constructor(props) {
    super();
    const data = clone(props.initialData).map(
      (record, indexAsId) => record.concat(indexAsId)
      // record.push(indexAsId);
      // return record;
      // return record.concat([indexAsId]);
    );
    this.state = {
      data, //data which is polished
      sortby: null, //which column is clicked?num
      descending: false,
      edit: null, //object{row:0,column:0}
      search: false, //on and off button
    };

    this.preSearchData = null;

    this.sort = this.sort.bind(this);
    this.showEditor = this.showEditor.bind(this);
    this.save = this.save.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.search = this.search.bind(this);
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
        // row: parseInt(e.target.parentNode.dataset.row, 10),
        row: +e.target.parentNode.dataset.row,
        column: e.target.cellIndex,
      },
    });
  }

  save(e) {
    e.preventDefault();
    const input = e.target.firstChild.firstChild;
    const data = clone(this.state.data);
    data[this.state.edit.row][this.state.edit.column] = input.value;
    this.setState({
      edit: null,
      data,
    });
  }

  toggleSearch() {
    if (this.state.search) {
      this.setState({
        data: this.preSearchData,
        search: false,
      });
      this.preSearchData = null;
    } else {
      this.preSearchData = this.state.data;
      this.setState({
        search: true,
      });
    }
  }

  search(e) {
    const needle = e.target.value.toLowerCase();
    if (!needle) {
      this.setState({ data: this.preSearchData });
      return;
    }
    const idx = e.target.dataset.index;
    const searchdata = this.preSearchData.filter((row) => {
      return row[idx].toString().toLowerCase().indexOf(needle) > -1;
    });
    this.setState({ data: searchdata });
  }

  render() {
    const searchRow = !this.state.search ? null : (
      <tr onChange={this.search}>
        {this.props.headers.map((_, index) => {
          return (
            <td style={{ padding: "0.5rem" }} key={index}>
              <Input type="text" placeholder="search..." data-index={index} />
            </td>
          );
        })}
      </tr>
    );
    return (
      <div style={{ padding: "2rem", border: "1px dashed #45e989" }}>
        <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
          <Button onClick={this.toggleSearch}>
            {this.state.search ? "Hide search" : "Show search"}
            <TbListSearch className="btn-icon" />
          </Button>
          <Button>
            Export excel <TbFileExport className="btn-icon" />
          </Button>
          <Button>
            Export CSV <TbFileExport className="btn-icon" />
          </Button>
        </div>
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
            {searchRow}
            {this.state.data.map((row, roxIndex) => {
              const recordId = row[row.length - 1];
              return (
                <tr key={recordId} data-row={roxIndex}>
                  {/* slice works */}
                  {row.slice(0, row.length - 1).map((item, colIndex) => {
                    const edit = this.state.edit;
                    if (
                      edit &&
                      recordId === edit.row &&
                      colIndex === edit.column
                    ) {
                      item = (
                        <form onSubmit={this.save}>
                          <Input radius="xs" type="text" defaultValue={item} />
                        </form>
                      );
                    }
                    return <td key={colIndex}>{item}</td>;
                  })}
                  {/* //////////////////book implementation */}
                  {/* {row.map((item, colIndex) => {
                    const edit = this.state.edit;
                    if (colIndex === this.state.headers.length) {
                      return;
                    } else {
                      if (
                        edit &&
                        recordId === edit.row &&
                        colIndex === edit.column
                      ) {
                        item = (
                          <form onSubmit={this.save}>
                            <Input
                              radius="xs"
                              type="text"
                              defaultValue={item}
                            />
                          </form>
                        );
                      }
                      return <td key={colIndex}>{item}</td>;
                    }

                    // return edit &&
                    //   roxIndex === edit.row &&
                    //   colIndex === edit.column ? (
                    //   <td key={colIndex}>
                    //     <form onSubmit={this.save}>
                    //       <Input radius="xs" type="text" defaultValue={item} />
                    //     </form>
                    //   </td>
                    // ) : (
                    //   <td key={colIndex}>{item}</td>
                    // );
                  })} */}
                  {/* Encountered with an error which the book ignored it  */}

                  {/* ///////////////with filter */}
                  {/* {row
                    .filter((item) => item !== recordId)
                    .map((item, colIndex) => {
                      const edit = this.state.edit;
                      if (
                        edit &&
                        recordId === edit.row &&
                        colIndex === edit.column
                      ) {
                        item = (
                          <form onSubmit={this.save}>
                            <Input
                              radius="xs"
                              type="text"
                              defaultValue={item}
                            />
                          </form>
                        );
                      }
                      return <td key={colIndex}>{item}</td>;
                    })} */}
                  {/* The problem is when one of the other cell's content === recordId */}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
