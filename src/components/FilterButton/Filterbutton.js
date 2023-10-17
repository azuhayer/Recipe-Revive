"use client"
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import styles from './FilterButton.module.css'
import {MdSort} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'

export default function FilterButton() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Sort By"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <div className="flex items-center">
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >

        <DropdownItem key="Sort By">Sort By</DropdownItem>
        <DropdownItem key="rating">Rating<AiFillStar/></DropdownItem>
        <DropdownItem key="name">Name</DropdownItem>
        <DropdownItem key="cook_time">Cook Time</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
  );
}
