import React, { useState, useEffect, createRef, ReactNode, FC } from "react";
import "./select.sass";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  children?: ReactNode;
  placeholder: string;
  options: any;
  size?: string;
}

interface Options {
  value: string;
  label: string;
  extra?: string;
}
const Select: FC<Props> = ({ placeholder, options, size }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [selected, setSelected] = useState<Options>({
    value: `${placeholder}`,
    label: `${placeholder}`,
  });
  const selectBox = createRef<HTMLDivElement>();
  const selectedItem = createRef<HTMLLIElement>();

  let debounceTimeout: NodeJS.Timeout;
  let searchTerm: string = "";

  // Closes options list on click outside

  function dynamicRef(label: string) {
    if (label === selected.label) {
      return selectedItem;
    }
  }

  useEffect(() => {
    onmousedown = (e) => {
      clicked &&
        selectBox.current &&
        !selectBox.current.contains(e.target as Node) &&
        setClicked(false);
    };
  }, [clicked, selectBox]);

  useEffect(() => {
    selectedItem.current &&
      selectedItem.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
  }, [selected, selectedItem]);

  return (
    <>
      <input type="hidden" value={selected.value} />
      <div className="select" ref={selectBox}>
        <div
          id="select-box"
          tabIndex={0}
          className={"select-box " + clicked}
          onMouseUp={() => {
            setClicked((oldState) => !oldState);
          }}
          // Keyboard Controls
          onKeyDown={(e) => {
            switch (e.code) {
              case "Space":
                setClicked((oldState) => !oldState);
                break;
              case "ArrowUp":
                const prevOptionUp: number = options.indexOf(selected) - 1;
                if (prevOptionUp > -1) {
                  setSelected(options[prevOptionUp]);
                } else {
                  setSelected(options[options.length - 1]);
                }

                break;
              case "ArrowDown":
                const prevOptionDown: number = options.indexOf(selected) + 1;
                if (prevOptionDown === options.length) {
                  setSelected(options[0]);
                } else {
                  setSelected(options[prevOptionDown]);
                }

                break;
              case "Enter":
                if (clicked === true) {
                  setClicked(false);
                } else {
                  setClicked(true);
                }
                break;
              case "Escape":
                if (clicked === true) {
                  setClicked(false);
                }
                break;

              default:
                clearTimeout(debounceTimeout);
                searchTerm += e.key;
                debounceTimeout = setTimeout(() => {
                  searchTerm = "";
                }, 500);

                const searchedOption = options.find((option: any) => {
                  return option.label.toLowerCase().startsWith(searchTerm);
                });
                if (searchedOption) setSelected(searchedOption);
                console.log(searchTerm);
            }
          }}
          clicked-={clicked.toString()}
        >
          {/* the contents of the select box */}
          <span
            className={
              selected.label !== placeholder ? "is-selected" : "placeholder"
            }
          >
            {selected.label ? selected.label : placeholder}
          </span>
          <span clicked-={clicked.toString()} className={"dropdown-arrow " + clicked}>
            <FaChevronDown />
          </span>
        </div>

        <ul
          id="select-options"
          className={"select-list-box " + clicked}
          clicked-={clicked.toString()}
        >
          {options.map((option: any) => (
            <li
              className={
                "select-list-item " + (selected === option && "selected-item")
              }
              id={option.value}
              key={option.value}
              extra-={option.extra}
              ref={dynamicRef(option.label)}
              onMouseUp={() => {
                setClicked((oldState) => !oldState);
                setSelected(option);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Select;
