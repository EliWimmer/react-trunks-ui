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
				<Col>
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
							>
								This is descriptive card text. I'm only here to show you stuff.
							</Card>
						</PresBody>
						<PresDesc title="Card"></PresDesc>
					</Presenter>

						<Presenter type="vertical">
							<PresBody>
								<Button>Default Button</Button>
								<Button type="primary">Primary Button</Button>
								<Button type="danger">Danger Button</Button>
								<Button type="dashed">Dashed Button</Button>
								<Button disabled>Disabled Button</Button>
								<Button type="textonly">Text Button</Button>
							</PresBody>
							<PresDesc title="Types">Buttons come in 6 primary types:<br/>
							<Tag color="white" type="border">Default</Tag>  
							<Tag color="blue" type="solid">Primary</Tag>  
							<Tag color="red" type="solid">Danger</Tag>  
							<Tag color="gray" type="dashed">Dashed</Tag>  
							<Tag color="gray" type="faded"><Text disabled>Disabled</Text></Tag>  
							<Tag color="white" type="solid">Text</Tag> 
							</PresDesc>
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

				<div style={{ display: "flex", flexWrap: "wrap" }}>
					<Tag color="red" type="faded">
						Red
					</Tag>
					<Tag color="pink" type="faded">
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
				
				<Presenter type="vertical">
							<PresBody>
							<div style={{ display: "flex", flexDirection: "column", gap: "8px"}}>
					<Text>Default text</Text>
					<Text secondary>Secondary text</Text>
					<Text success>Success text</Text>
					<Text warning>Warning text</Text>
					<Text danger>Danger text</Text>
					<Text>Disabled text</Text>
					<Text highlight>Highlight text</Text>
					<Text code>Code text</Text>
					<div><Text keyboard>Ctrl</Text><Text keyboard>Alt</Text><Text keyboard>S</Text></div>
					
				</div>
							</PresBody>
							<PresDesc title="Text"></PresDesc>
						</Presenter>
				<div style={{ display: "flex", flexDirection: "column", gap: "8px"}}>
					<div style={{padding: "8px"}} />
				</div>

			</div>
		</>
	);
}
