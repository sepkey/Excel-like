import { Table, Input, Button } from "@mantine/core";
import React, { useReducer } from "react";
import {
  TbArrowNarrowDown,
  TbArrowNarrowUp,
  TbListSearch,
} from "react-icons/tb";
import "./Excel.css";

let preSearchData = null;

const clone = (object) => {
  return JSON.parse(JSON.stringify(object));
};

const reducer = function (state, action) {
  switch (action.type) {
    case "SORT": {
      const { sortBy, data, desc } = action.payload;
      return {
        ...state,
        sortBy,
        data,
        desc,
      };
    }

    case "ACTIVATE_EDITOR":
      return {
        ...state,
        edit: action.payload,
      };

    case "SAVE": {
      const { data, edit } = action.payload;
      return {
        ...state,
        data,
        edit,
      };
    }
    case "TOGGLE_SEARCH":
      return {
        ...state,
        searchOn: !state.searchOn,
      };
    case "FILL_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const Excel2 = ({ initialData, headers }) => {
  const initialState = {
    data: clone(initialData).map((row, index) => row.concat(index)),
    sortBy: null,
    desc: false,
    edit: null,
    searchOn: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, sortBy, desc, edit, searchOn } = state;

  const sort = (e) => {
    const column = e.target.closest("th").cellIndex;
    const newDesc = sortBy === column && !desc;
    const newData = clone(data);

    newData.sort((a, b) => {
      return desc
        ? a[column] > b[column]
          ? 1
          : -1
        : a[column] > b[column]
        ? -1
        : 1;
    });

    dispatch({
      type: "SORT",
      payload: { data: newData, sortBy: column, desc: newDesc },
    });
  };

  const activateEditor = (e) => {
    const col = e.target.cellIndex;
    const row = +e.target.parentNode.dataset.row;
    dispatch({
      type: "ACTIVATE_EDITOR",
      payload: { col: col, row: row },
    });
  };

  const save = (e) => {
    e.preventDefault();
    const input = e.target.firstChild.firstChild;
    const newData = clone(data).map((row) => {
      if (row[row.length - 1] === edit.row) {
        row[edit.col] = input.value;
      }
      return row;
    });
    dispatch({ type: "SAVE", payload: { data: newData, edit: null } });

    if (preSearchData) {
      preSearchData[edit.row][edit.col] = input.value;
    }
  };

  const toggleSearch = () => {
    if (searchOn) {
      dispatch({ type: "FILL_DATA", payload: preSearchData });
      dispatch({ type: "TOGGLE_SEARCH" });
      preSearchData = null;
    } else {
      preSearchData = data;
      dispatch({ type: "TOGGLE_SEARCH" });
    }
  };

  const handleChange = (e) => {
    const term = e.target.value.toLowerCase();
    if (!term) {
      dispatch({ type: "FILL_DATA", payload: preSearchData });
      return;
    }

    const index = e.target.dataset.index;
    const filteredData = preSearchData.filter(
      (row) => row[index].toLowerCase().indexOf(term) > -1
    );
    dispatch({ type: "FILL_DATA", payload: filteredData });
  };

  const searchRow = searchOn && (
    <tr onChange={handleChange}>
      {headers.map((_, index) => {
        return (
          <td key={index}>
            <Input type="text" data-index={index} />
          </td>
        );
      })}
    </tr>
  );

  return (
    <div style={{ padding: "2rem", border: "1px dashed #45e989" }}>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <Button onClick={toggleSearch}>
          {searchOn ? "Search On" : "Search off"}
          <TbListSearch className="btn-icon" />
        </Button>
      </div>
      <Table withBorder>
        <thead onClick={sort}>
          <tr>
            {headers.map((title, index) => {
              return (
                <th key={index}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {title}
                    {desc && index === sortBy ? (
                      <TbArrowNarrowDown />
                    ) : (
                      <TbArrowNarrowUp />
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody onDoubleClick={activateEditor}>
          {searchRow}
          {data.map((row) => {
            const rowID = row[row.length - 1];
            return (
              <tr data-row={rowID} key={rowID}>
                {row.slice(0, -1).map((col, colIndex) => {
                  if (colIndex === edit?.col && rowID === edit?.row) {
                    col = (
                      <form onSubmit={save}>
                        <Input type="text" defaultValue={col} />
                      </form>
                    );
                  }

                  return <td key={colIndex}>{col}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Excel2;
