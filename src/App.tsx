import React from "react";
import "./App.css";
import { RiSettings3Fill, RiEdit2Fill, RiAddCircleFill } from "react-icons/ri";
import {
	Select,
	Button,
	Card,
	Row,
	Col,
	Presenter,
	PresBody,
	PresDesc,
	Tag,
	Text,
} from "./trunks-ui/trunks-ui";

export default function App() {
	function handleOnClick(buttonName: object) {
		console.log(`Button ${buttonName} clicked!`);
	}

	//comment
	return (
		<>
			<div className="App">
				<Row space wrap>
					<Presenter type="vertical">
						<PresBody>
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
									{ value: "cheese-sticks", label: "Cheese Sticks" },
								]}
							/>
						</PresBody>
						<PresDesc title="Select"></PresDesc>
					</Presenter>
					<Presenter type="vertical">
						<PresBody>
							<Card
								hover
								description="www.boobs.com/are-awesome"
								extra="Boobs"
								title="Card Title"
								buttons={[
									{ label: <RiSettings3Fill />, key: "settings" },
									{ label: <RiEdit2Fill />, key: "edit" },
									{ label: <RiAddCircleFill />, key: "add" },
								]}
							></Card>
						</PresBody>
						<PresDesc title="Card"></PresDesc>
					</Presenter>

					<Col>
						<Presenter type="vertical">
							<PresBody>
								<Button>Default Button</Button>
								<Button type="primary">Primary Button</Button>
								<Button type="danger">Danger Button</Button>
								<Button type="dashed">Dashed Button</Button>
								<Button disabled>Disabled Button</Button>
								<Button type="text">Text Button</Button>
							</PresBody>
							<PresDesc title="Types"></PresDesc>
						</Presenter>

						<Presenter type="vertical">
							<PresBody>
								<Button size="small">Small Button</Button>
								<Button size="default">Default Button</Button>
								<Button size="large">Large Button</Button>
							</PresBody>
							<PresDesc title="Sizes"></PresDesc>
						</Presenter>
					</Col>


				</Row>

				<div style={{ display: "none" }}>

					<Tag color="red" type="solid">
						Red
					</Tag>
					<Tag color="pink" type="solid">
						Pink
					</Tag>
					<Tag color="purple" type="solid">
						Purple
					</Tag>
					<Tag color="deeppurple" type="solid">
						Deep Purple
					</Tag>
					<Tag color="indigo" type="solid">
						Indigo
					</Tag>
					<Tag color="blue" type="solid">
						Blue
					</Tag>
					<Tag color="lightblue" type="solid">
						Light Blue
					</Tag>
					<Tag color="cyan" type="solid">
						Cyan
					</Tag>
					<Tag color="teal" type="solid">
						Teal
					</Tag>
					<Tag color="green" type="solid">
						Green
					</Tag>
					<Tag color="lightgreen" type="solid">
						Light Green
					</Tag>
					<Tag color="lime" type="solid">
						Lime
					</Tag>
					<Tag color="yellow" type="solid">
						Yellow
					</Tag>
					<Tag color="amber" type="solid">
						Amber
					</Tag>
					<Tag color="orange" type="solid">
						Orange
					</Tag>
					<Tag color="deeporange" type="solid">
						Deep Orange
					</Tag>
					<Tag color="brown" type="solid">
						Brown
					</Tag>
					<Tag color="gray" type="solid">
						Gray
					</Tag>
				</div>
        <Text>Default text</Text>
					<br />
					<Text secondary>Secondary text</Text>
					<br />
					<Text success>Success text</Text>
					<br />
					<Text warning>Warning text</Text>
					<br />
					<Text danger>Danger text</Text>
					<br />
					<Text disabled>Disabled text</Text>
					<br />
					<Text highlight>Highlight text</Text>
					<br />
					<Text code>Code text</Text>
					<br />
					<Text keyboard>Keyboard text</Text>
					<br />
      </div>
		</>
	);
}
