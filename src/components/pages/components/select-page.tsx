import React from 'react'
import { Select } from '../../../trunks-ui/trunks-ui'

export const SelectPage = () => {
    return (
        <div>
            <Select options={[
                {value: "boobs", label: "Boobs"},
                {value: "more boobs", label: "moree boobs"}
            ]} placeholder="Choose..."></Select>
        </div>
    )
}
