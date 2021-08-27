import "./App.css";
import Button from "./trunks-ui/button/button";
import Select from "./trunks-ui/select/select";
import Card from "./trunks-ui/card/card"
import { RiSettings3Fill, RiEdit2Fill, RiAddCircleFill } from 'react-icons/ri';
import { Children, Component } from "react";

export default function App() {

function handleOnClick(buttonName: object) {
  console.log(`Button ${buttonName} clicked!`)
}

  //comment
  return (
    <>
        <Button>Default Button</Button>
        <Button icon={<RiAddCircleFill />} type="primary">Primary Button</Button>
        <Button type="danger">Danger Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button disabled>Disabled Button</Button>
        <Button type="text">Text Button</Button>
      
        <Button size="small">Small Button</Button>
        <Button size="default">Default Button</Button>
        <Button size="large">Large Button</Button>
      <Select
            placeholder="Choose..."
            options={[
              { value: "beans", label: "Beans" },
              { value: "potatoes", label: "Potatoes" },
              { value: "cheese", label: "Cheese" },
              { value: "apples", label: "Apples" },
              { value: "pizza", label: "Pizza" },
              { value: "Fish", label: "Fish" },
              { value: "hamburger", label: "Hamburger" },
              { value: "pie", label: "Pie" },
              { value: "cheese-sticks", label: "Cheese Sticks" }
            ]}
          />
          <Card hover description="www.boobs.com/are-awesome" extra="Boobs" title="Card Title" buttons={[
            {label: <RiSettings3Fill />, key: "settings"},
            {label: <RiEdit2Fill />, key: "edit"},
            {label: <RiAddCircleFill/>, key: "add"},
          ]}>
            If the content gets too long I dont want it to look bad.
            </Card>
          </>
  );
}
