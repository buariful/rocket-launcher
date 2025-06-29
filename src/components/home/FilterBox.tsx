import { Button, Card, Cascader, Checkbox, Form, Input } from 'antd';
import Select, { DefaultOptionType } from 'antd/es/select';

import React, { FC } from 'react';
import { useLauncesDataQuery } from '../../Features/api';

// interface Option {
//     value: string;
//     label: string;
// }

const FilterBox: FC = () => {
    const { data } = useLauncesDataQuery();
    const allRocketNames: Array<string> = [];

    const options: any[] = []

    const names: string[] = [];

    if (data) {
        data.map((d) => {
            if (!names.includes(d.rocket.rocket_name)) {
                names.push(d.rocket.rocket_name)
            }
        })
    }

    if (names) {
        names.map((n) => {
            options.push({
                value: n,
                label: n
            })
        })
    }
    const filter = (inputValue: string, path: DefaultOptionType[]) =>
        path.some(
            (option) => (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
        );
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div>

        </div>
    );
};

export default FilterBox;