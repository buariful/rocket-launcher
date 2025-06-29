/* eslint-disable camelcase */

import { Card, Col } from 'antd';
import React, { FC } from 'react';
import { AllLauchesType } from '../../Features/type'

interface DataProps {
    data: AllLauchesType,
}

const CardBox: FC<DataProps> = ({ data }) => {
    const { launch_success, mission_name, launch_date_unix, rocket, links

    } = data;
    console.log(data)
    return (

        <Col flex={8}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt={mission_name} src={links.mission_patch_small} />}
            >
                <Card.Meta title={mission_name} description={launch_success} />
            </Card>
        </Col>
    );
};

export default CardBox;