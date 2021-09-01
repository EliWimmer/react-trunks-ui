import React, { useState } from 'react'
import { Tag, Space, Button, ButtonGroup } from '../../../trunks-ui/trunks-ui'

export default function TagsPage() {
    return (
        <div className='compo-page-container'>
            <div className='compo-page'>
                <h2>Tags</h2>
                <TagTypes />
                <TagColors />
            </div>
        </div>



    )
}
const TagTypes = () => {
    return (
        <>
            <h3 className='section-header'>Types</h3>
            <div className='display-container'>
                <Space size="small" direction="horizontal" wrap>
                    <Tag color="blue" type="default">Default</Tag>
                    <Tag color="blue" type="solid">Solid</Tag>
                    <Tag color="blue" type="border">Border</Tag>
                    <Tag color="blue" type="dashed">Dashed</Tag>
                </Space>
            </div>
        </>
    );
};

const TagColors = () => {
    const [tagType, setTagType] = useState<"default" | "solid" | "border" | "dashed" | undefined>('default')
    return (
        <>
            <h3 className='section-header'>Colors</h3>
            <ButtonGroup>
        <Button onClick={() => setTagType('default')}>Default</Button>
        <Button onClick={() => setTagType('solid')}>Solid</Button>
        <Button onClick={() => setTagType('border')}>Border</Button>
        <Button onClick={() => setTagType('dashed')}>Dashed</Button>
      </ButtonGroup>
      <Space inline />
            <div className='display-container'>
                <Space size="small" direction="horizontal" wrap>
                    <Tag type={tagType}>Default</Tag>
                    <Tag color="red" type={tagType}>Red</Tag>
                    <Tag color="pink" type={tagType}>Pink</Tag>
                    <Tag color="purple" type={tagType}>Purple</Tag>
                    <Tag color="deeppurple" type={tagType}>Deep Purple</Tag>
                    <Tag color="indigo" type={tagType}>Indigo</Tag>
                    <Tag color="blue" type={tagType}>Blue</Tag>
                    <Tag color="lightblue" type={tagType}>Light Blue</Tag>
                    <Tag color="cyan" type={tagType}>Cyan</Tag>
                    <Tag color="teal" type={tagType}>Teal</Tag>
                    <Tag color="green" type={tagType}>Green</Tag>
                    <Tag color="lightgreen" type={tagType}>Light Green</Tag>
                    <Tag color="lime" type={tagType}>Lime</Tag>
                    <Tag color="yellow" type={tagType}>Yellow</Tag>
                    <Tag color="amber" type={tagType}>Amber</Tag>
                    <Tag color="orange" type={tagType}>Orange</Tag>
                    <Tag color="deeporange" type={tagType}>Deep Orange</Tag>
                    <Tag color="brown" type={tagType}>Brown</Tag>
                </Space>
            </div>
        </>
    );
};