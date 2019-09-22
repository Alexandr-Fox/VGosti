import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader, platform, IOS } from '@vkontakte/vkui';
import persik from '../img/persik.png';
import './Persik.css';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>ВГости: Ваши гости ВКонтакте</PanelHeader>
			<img className="Persik" src={persik} alt="Persik The Cat"/>
			<Button size="xl" level="2" onClick={go} data-to="persik">
				Персик
			</Button>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;
