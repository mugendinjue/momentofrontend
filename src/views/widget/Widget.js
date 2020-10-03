import React from 'react';
import { Card, CardBody, CardTitle, CardColumns } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Projects,
    RecentComment,
    Chat,
    SalesOverview,
    TaskList,
    UserProfile,
    BrowserStats,
    Feeds,
    Weather
} from '../../components/dashboard/';

import img1 from '../../assets/images/users/1.jpg';
import img4 from '../../assets/images/users/4.jpg';
import img5 from '../../assets/images/users/5.jpg';

const Widgets = () => {
    return (
        <CardColumns>
            <Card>
                <CardBody>
                    <CardTitle>Recent Comments</CardTitle>
                </CardBody>
                <div className="comment-widgets scrollable" style={{ height: '560px' }}>
                    <PerfectScrollbar>
                        <RecentComment
                            image={img1}
                            badge="Pending"
                            badgeColor="primary"
                            name="James Anderson"
                            comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
                            date="April 14"
                        />
                        <RecentComment
                            image={img4}
                            badge="Approved"
                            badgeColor="success"
                            name="Michael Jorden"
                            comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
                            date="April 14"
                        />
                        <RecentComment
                            image={img5}
                            badge="Rejected"
                            badgeColor="danger"
                            name="Johnathan Doeting"
                            comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
                            date="April 14"
                        />
                        <RecentComment
                            image={img1}
                            badge="Pending"
                            badgeColor="primary"
                            name="James Anderson"
                            comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
                            date="April 14"
                        />
                        <RecentComment
                            image={img4}
                            badge="Approved"
                            badgeColor="success"
                            name="Michael Jorden"
                            comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
                            date="April 14"
                        />
                    </PerfectScrollbar>
                </div>
            </Card>
            <TaskList />
            <Projects />
            <Chat />
            <UserProfile />
            <SalesOverview />
            <BrowserStats />
            <Feeds />
            <Weather />
        </CardColumns>
    );
}

export default Widgets;
