"use client"
import React, {useState,useMemo} from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import styles from './FilterButton.module.css'
import {MdSort} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'

export default function FilterButton({currentSort, onSortChange}) {
  const [selectedKeys, setSelectedKeys] = useState(new Set([currentSort]));

  const handleSelectionChange = (newSelection) => {
    console.log(newSelection,"--")
    setSelectedKeys(newSelection);
    const selectedKey = Array.from(newSelection)[0];
    onSortChange(selectedKey);
  };

  const selectedValue = useMemo(
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
        onSelectionChange={handleSelectionChange}
      >
        <DropdownItem key="Sort By">Sort By</DropdownItem>
        <DropdownItem key="name">Name</DropdownItem>
        <DropdownItem key="cookTime">Cook Time</DropdownItem>
        <DropdownItem key="calories">Calories</DropdownItem>
        <DropdownItem key="mealType">Meal Type</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
  );
}
