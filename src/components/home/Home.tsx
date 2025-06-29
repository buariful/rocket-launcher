import React from 'react';
import 'antd/dist/reset.css';
import { useLauncesDataQuery } from '../../Features/api';
import banner from '../../img/banner.jpg'
import FilterBox from './FilterBox';
import CardBox from './CardBox';
import { Image, Layout, Row, Space, Typography } from 'antd';


const Home: React.FC = () => {
    const { data, error, isLoading, isFetching, isSuccess } = useLauncesDataQuery();



    return (
        <div>
            <Space direction="vertical" size="large">
                <Layout>
                    <Image src={banner} preview={false}></Image>
                </Layout>
                <Typography.Title level={2}>All Rocket Launches</Typography.Title>
                <FilterBox></FilterBox>
                <Row gutter={16} justify="center">
                    {data && data.map((d) => <CardBox data={d} key={d.flight_number}></CardBox>)}
                </Row>
            </Space>
        </div>
    );
};

export default Home;