import React, { Component } from "react";
import { Button, Table, Input } from "@mantine/core";
import {
  TbListSearch,
  TbFileExport,
  TbArrowNarrowDown,
  TbArrowNarrowUp,
} from "react-icons/tb";
import "./Excel.css";
import { ActionIcon } from "@mantine/core";

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

    this.log = [clone(this.state)];
    this.replay = this.replay.bind(this);
    this.logSetState = this.logSetState.bind(this);

    this.state = {
      data, //data which is polished
      sortby: null, //which column is clicked?num
      descending: false,
      edit: null, //object{row:0,column:0}
      search: false, //on and off button
    };

    this.preSearchData = null;
    this.sort = this.sort.bind(this);
    this.activateEditor = this.activateEditor.bind(this);
    this.save = this.save.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if (e.altKey && e.shiftKey && e.keyCode === 82) {
        // ALT+SHIFT+R(eplay)
        this.replay();
      }
    });
  }

  replay() {
    if (this.log.length === 1) {
      console.warn("No state changes to replay yet");
      return;
    }
    let idx = -1;
    const interval = setInterval(() => {
      if (++idx === this.log.length - 1) {
        // the end
        clearInterval(interval);
      }
      this.setState(this.log[idx]);
    }, 1000);
  }
  logSetState(newState) {
    // remember the old state in a clone
    this.log.push(clone(newState));
    // now set it
    this.setState(newState);
  }

  sort(e) {
    const column = e.target.closest("th").cellIndex;
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

    this.logSetState({
      data,
      sortby: column,
      descending,
    });
  }

  activateEditor(e) {
    this.logSetState({
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
    const data = clone(this.state.data).map((row) => {
      if (row[row.length - 1] === this.state.edit.row) {
        row[this.state.edit.column] = input.value;
      }
      return row;
    });

    this.logSetState({
      edit: null,
      data,
    });

    if (this.preSearchData) {
      this.preSearchData[this.state.edit.row][this.state.edit.column] =
        input.value;
    }
  }

  toggleSearch() {
    if (this.state.search) {
      this.logSetState({
        data: this.preSearchData,
        search: false,
      });
      this.preSearchData = null;
    } else {
      this.preSearchData = this.state.data;
      this.logSetState({
        search: true,
      });
    }
  }

  handleChange(e) {
    const needle = e.target.value.toLowerCase();
    if (!needle) {
      this.logSetState({ data: this.preSearchData });
      return;
    }
    const idx = e.target.dataset.index;
    const searchData = this.preSearchData.filter(
      (row) => row[idx].toString().toLowerCase().indexOf(needle) > -1
    );
    this.logSetState({ data: searchData });
  }

  render() {
    const searchRow = !this.state.search ? null : (
      <tr onChange={this.handleChange}>
        {this.props.headers.map((_, index) => {
          return (
            <td style={{ padding: "0.5rem" }} key={index}>
              <Input type="text" data-index={index} />
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
                return (
                  <th
                    key={index}
                    onClick={() => this.logSetState({ once: false })}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {title}
                      <ActionIcon variant="transparent">
                        {this.state.descending &&
                        this.state.sortby === index ? (
                          <TbArrowNarrowDown size={16} />
                        ) : (
                          <TbArrowNarrowUp size={16} />
                        )}
                      </ActionIcon>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody onDoubleClick={this.activateEditor}>
            {searchRow}
            {this.state.data.map((row, rowIndex) => {
              const recordId = row[row.length - 1];
              return (
                <tr key={recordId} data-row={recordId}>
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
